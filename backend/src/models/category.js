
 import mongoose from "mongoose";

 const CategorySchema=mongoose.Schema({
  name :{
    type : String,
    require : true,
    trime : true
  },
  slug :{
    type    :  String ,
    require :  true,
    unique  :  true 
  },
  categoryImage: { type : String},
  parentId : {
    type : String 
  }
 },{timestamps: true}
 )

 export default mongoose.model("Category",CategorySchema) ;