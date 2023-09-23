import Product from "../models/Product.js";
import slugify from "slugify";


//create product 
 export const CreateeProduct=async(req,res)=>{

   const{name,price,quantity,description,category}=req.body;
 let productPic=[];
  if(name&&price&&description){
  
     if(req.files.length>0){
       productPic=req.files.map((file)=>{
        return {img : file.filename}
       })
     }
  

    try{  
       
       let prduct= new Product({
           name,price,quantity,description,
           slug :slugify(name),
           productPic,
            createdBy : req.user._id,
           category
          })
           await prduct.save() ;
          res.status(200).json({prduct}) ;
  
    }catch(err){console.log(err)}
 }

}
export const getProduct=async(req,res)=>{
    try{
      const products=await Product.find();
      res.status(200).json({products}) ;
    }catch(err){console.log(err)}
}
