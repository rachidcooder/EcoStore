import mongoose from "mongoose"
import bcrypt from "bcryptjs"


const UserSchema = mongoose.Schema({
  firstName : {
    type : String,
    require :true,
    trim : true ,
    min : 3 ,
    max : 20
  },
  lastName:{
    type : String,
    require :true,
    trim : true ,
    min : 3 ,
    max : 20
  },
  email :{
  type : String ,
  require : true ,
  unique : true ,
  lowercase: true ,
  trim :true
  },
  hashpassword : {
    type : String ,
    require : true 
  },
  role :{
    type : String ,
    enum :['user','admin',, "super-admin"],
    default : "user"
  },
  contatctnumber :{
    type :String
  },
  profilePicture : {
    type : String ,
    default : ""
  }
},{timestamps : true}) ;
  
UserSchema.virtual('password')
.set(function(password){
  this.hashpassword=bcrypt.hashSync(password,10) ;
})


UserSchema.methods={
  authenticate : function(password){
    return bcrypt.compare(password , this.hashpassword) ;
  }
}
const User =mongoose.model("User",UserSchema) ;

export default  User
