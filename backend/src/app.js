import  express  from "express";
import env from "dotenv"
import UserRoute from "./routes/UserRoute.js";
import ConnectDB from "./configs/db.js"
import cors from "cors"
import CategoryRoute from "./routes/CategoryRoute.js";
import AdminRoute from "./routes/Admin/authRoute.js"
import ProductRouter from "./routes/ProductRoute.js";
import CartRoute from "./routes/CartRoute.js";


env.config();
const app=express();
const PORT=process.env.PORT||3001 ;

app.use(cors()) ;
app.use(express.json());//you can use bodyParser library

ConnectDB(); 

app.use("/api/ecostore/user",UserRoute);
app.use("/api/ecostore/admin",AdminRoute);
app.use("/api/ecostore/category",CategoryRoute);
app.use("/api/ecostore/product",ProductRouter);
app.use("/api/ecostore/user/cart",CartRoute);

app.get("*",(req,res)=>{
  res.status(200).send("<h1>This Page not found : error 404</h1>");
})


  const server=app.listen(PORT,()=>{
  console.log("listening to the port ",PORT);
  })