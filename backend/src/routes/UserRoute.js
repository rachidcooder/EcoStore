import express  from "express";
import {register,login,getUsers} from "../controllers/UserController.js"
import protect from "../Middlware/Protect.js";


const UserRoute= express.Router();


UserRoute.post("/",register) ;
UserRoute.post("/login",login) ;
UserRoute.post("/getUsers",protect,getUsers) ;


export default UserRoute ;