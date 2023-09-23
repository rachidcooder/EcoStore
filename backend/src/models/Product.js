import mongoose from "mongoose";

const ProductSchema=mongoose.Schema({
 name :{
    type : String,
    required : true,
    trime : true
  },
  slug :{
    type    :  String ,
    required :  true,
    unique  :  true 
  },
  price :{
    type :Number,
    required : true
  },
  quantity: {
      type: Number,
      required: true
    },
  description :{
    type : String ,
    required : true
  },
  offer :{
    type:Number
  },
  productPic :[
   {  img :  { type : String } }
],
  reviews : [{
    type : mongoose.Schema.Types.ObjectId , ref:"User",
    review :{type : String}
  }],
createdBy :{
  type : mongoose.Schema.Types.ObjectId , ref : "User" , required :true
},
category: {type : mongoose.Schema.Types.ObjectId , ref :"category" ,required :true}

 },{timestamps: true}
 )

export default mongoose.model("Product",ProductSchema);
