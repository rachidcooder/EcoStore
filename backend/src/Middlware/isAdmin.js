
const AdmineMiddlware =(req,res,next)=>{
  if(req.user.role!="admin") {
    return res.status(400).json({message : "Access denied!"});
  }
  next();
}
export default AdmineMiddlware ;
