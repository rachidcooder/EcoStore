import  express  from "express";
import AdmineMiddlware from "../Middlware/isAdmin.js";
import protect from "../Middlware/Protect.js";
import multer from 'multer';
import { CreateeProduct,getProduct } from "../controllers/ProductController.js";
import shortid from 'shortid'
import path  from "path";
//************************** */
           import { fileURLToPath } from 'url';
           import { dirname } from 'path';
           const __filename = fileURLToPath(import.meta.url);
           const __dirname = dirname(__filename);
//*********************************** */
const ProductRouter=express.Router() ;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(path.dirname(__dirname),'uploads') ) ;
  },
  filename: function (req, file, cb) {

    cb(null, shortid.generate() + '-' +file.originalname);
  }
})
const upload=multer({storage});
//CREATE  
ProductRouter.post("/create",protect,AdmineMiddlware,upload.array('productImage'),CreateeProduct) ;
//UPDATE
//DELETE
//GET Products
 ProductRouter.get("/",getProduct);

export default ProductRouter;
