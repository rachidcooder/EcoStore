import mongoose from "mongoose";

 const CartSchema = mongoose.Schema({
  user: {type : mongoose.Schema.Types.ObjectId,ref:"User"} ,
  cartItems :[{
    product :{ type : mongoose.Schema.Types.ObjectId,ref:"Product" ,required :true},
    quantity: { type : Number, default :1 },
    price :{ type : Number , required : true }
  }]
 },{ timestamps : true}) ;

 export default mongoose.model("cart",CartSchema);
