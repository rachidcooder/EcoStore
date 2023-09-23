import Cart from "../models/cart.js"




export const  addToCart=async(req,res)=>{
 let cartItems=req.body ;
   //cartItems =JSON.parse(cartItems) ;
    console.log("cart item from frontend :",cartItems.product) ;
  try{
 let  cart=await Cart.findOne({user : req.user._id});
   
    if(cart){ // quantity++ ;
       const product=cartItems.product;
       const item=  cart.cartItems.find((i)=>i.product==product);

   if(item){
   await   Cart.findOneAndUpdate({"user":req.user._id,"cartItems.product":product},{
       "$set": {
           "cartItems.$.quantity": item.quantity +cartItems.quantity
         }
    }) 
       res.status(200).json({msg: ` qunatity increased of  :${item}`});
   }else{
          await Cart.findOneAndUpdate( { user : req.user._id} , {
            "$push" :{
              "cartItems" :cartItems
            }
          }
           ) 
        res.status(200).json({msg: `new product added  to :${cart}`});
      }
    
    }else{
       cart =new Cart({ user:req.user._id , cartItems });
          await cart.save();
      res.status(200).json({cart}) ;
    }

  }catch(err){console.log(err)} 
}

export const  deleteFromCart=async(req,res)=>{

}

export const getItemsInCart=async(req,res)=>{
  try{
      let cartItem =await Cart.findOne({user:req.user._id});
           console.log(cartItem.cartItems)
           res.status(200).json({cartItem}) ;

          }catch(err){console.log(err)}
}
