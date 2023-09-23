import express  from "express";
import protect from "../Middlware/Protect.js";
import AdmineMiddlware from "../Middlware/isAdmin.js";
import { addToCart ,deleteFromCart,getItemsInCart } from "../controllers/CartController.js";


const CartRoute=express.Router() ;

 
      //  add || Cart  POST 
 CartRoute.post("/add",protect,addToCart);
//      // Delete Cart DELETE
// CartRoute.delete("/:id",protect,deleteFromCart) ;
//    // Update Category PUT

  CartRoute.get("/",protect,getItemsInCart);

export default CartRoute ;



