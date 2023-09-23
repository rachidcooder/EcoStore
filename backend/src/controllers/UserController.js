import generateToken from '../configs/generateToken.js';
import User from '../models/User.js'

  //POSt
 export const register=async(req,res)=>{
  const {firstName ,lastName ,email,password}=req.body ;
  if(!firstName||!lastName||!email||!password){
    return res.status(400).json({msg : "some fields are empty!"})
  }
   let user ;
    try{
        user =await User.findOne({email}) ;
         if(user){
          return res.status(400).json({msg : "User already existe !"})
         }
         user = new User({firstName ,lastName ,email,password}) ;
           
          await user.save();
             const token = generateToken(user._id,user.role);
          res.json({
      "_id":user._id,
      "firstname":user.firstName,
      "lastName":user.lastName,
      "email":user.email,
      "token":token
          }) ;
   }catch(err){
     console.log(err) ;
   }
}
 
 //POST 
  export const login=async(req,res)=>{
  const {email,password}=req.body ;

   if(!email||!password){
    return res.status(400).json({msg : "some fields are empty!"});
  }
    let user ;    
   try{
    user = await User.findOne({email}) ;
    if(!user) return res.status(400).json({msg :"Invalid email or password"});
     else{
         const isPassword = await user.authenticate(password);
  if( !isPassword){
   return res.status(400).json({msg :"Invalid email or password"});
   }
   const token =generateToken(user._id) ;
    return res.status(200).json({
       "_id":user._id,
      "firstname":user.firstName,
      "lastName":user.lastName,
      "email":user.email,
      "token":token
    }) ;
     }
   }catch(err){
  console.log(err) ;
   }
    

    }

    //GET all Users
     export const getUsers=async(req,res)=>{
 
       try{
        const users=await User.find();
         res.status(200).json({users});
       }catch(err){
     console.log(err) ;
    }
    }
