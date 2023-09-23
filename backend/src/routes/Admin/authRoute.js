import express  from "express";
import {signup,signin} from "../../controllers/Admin/auth.js"


 const AdmineRoute=express.Router();
 //register POST
AdmineRoute.post("/signup",signup);
//login POST
AdmineRoute.post("/signin",signin);


export default AdmineRoute ;
