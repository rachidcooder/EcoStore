import express  from "express";
import protect from "../Middlware/Protect.js";
import AdmineMiddlware from "../Middlware/isAdmin.js";
import {CreateCategory,getCategories} from "../controllers/CategoryController.js"

const CategoryRoute=express.Router() ;

 
      //  add || Category  POST 
CategoryRoute.post("/create",protect,AdmineMiddlware,CreateCategory) ;
     // Delete Category DELETE
CategoryRoute.delete("/:id",protect) ;
   // Update Category PUT
CategoryRoute.put("/:id",protect) ;  
  //GET every one can fetsh categories
 CategoryRoute.get("/",getCategories) ;

export default CategoryRoute ;