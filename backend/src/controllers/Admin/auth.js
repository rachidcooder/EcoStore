import User from "../../models/User.js";
import generateToken from "../../configs/generateToken.js";


   
//register
   export const signup =async(req, res) => {
      const { firstName, lastName, email, password } = req.body;
 try{
   let user =await User.findOne({email})
       if (user)
          return res.status(400).json({
        message: "Admin already registered",
       });

     User.estimatedDocumentCount()
      .then (async (count) => {
    
      let role = "admin";
      if (count === 0) {
         role = "super-admin";
        }

      const _user = new User({
        firstName,
        lastName,
        email,
        password,
        // username: shortid.generate(),
        role,
      });

       await _user.save();
        
          return res.status(201).json({ message: "Admin created Successfully..!",_user})
        
      }).catch((err)=>{
           return res.status(400).json({ err });

    })
     }catch(err){console.log(err)}
};

 //login 
    export const signin =async(req, res) => {
       const {email,password} =req.body ;

        try{
      
  let user = await User.findOne({ email }) ;
    if (user) {
       console.log(user);
      const isPassword = await user.authenticate(password);
      if ( isPassword && (user.role === "admin" || user.role === "super-admin")  ) {
        const token = generateToken(user._id,user.role);
        res.cookie("token", token, { expiresIn: "1d" });
        res.status(200).json({
          token,
          user,  //fullName
        });
      } else {
        return res.status(400).json({
          message: "Invalid Email or Password ",
        });
      }
     } else {
       return res.status(400).json({ message: "Invalid Email or Password" });
     }
      }catch(err){console.log(err);}
};

// export const signout = (req, res) => {
//   res.clearCookie("token");
//   res.status(200).json({
//     message: "Signout successfully...!",
//   });
// };
 