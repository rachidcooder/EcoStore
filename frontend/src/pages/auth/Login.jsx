import React, { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginRoute } from '../../utils/apiRoutes';
import axios from 'axios';
import { EcoState } from '../../context/Provider';


function Login() {
    const{user ,setUser}=EcoState();
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate =useNavigate();
 
  const onLogin=async(event)=>{
      event.preventDefault();
    if(email && password){
       try{
        const res =await axios.post(LoginRoute,{
          email,password
        }) ;
        console.log(res);
            if(res.data){
               setUser(res.data) ;
                 localStorage.setItem('user',JSON.stringify(res.data));
                  navigate("/");
            }
       }catch(err){console.log(err)}
     }

  }

  return (
      <div className='m-5 h-screen  flex justify-center items-center'>
      <div className='container md:w-1/3  bg-slate-200 m-5
            shadow-lg rounded-lg p-5'>
              <h1 className=' mx-5 text-xl text-gray-800 font-bold'>Login</h1>
      <form  onSubmit={onLogin}
         className='flex flex-col'>
             <input type='email' placeholder='Enter email'
               value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
           className='p-2 outline-none m-2 bg-gray-400 placeholder:text-gray-50 rounded-lg'/>
             <input type='password' placeholder='Enter password'
               value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
           className='p-2 outline-none m-2 bg-gray-400 placeholder:text-gray-50 rounded-lg'/>
           <button type='submit' className='rounded-lg p-2 m-2 bg-sky-500 text-white '>login</button>
      </form>
      <div className='flex justify-center '>
         <span>
             you don't have account ? <Link to="/register" className='text-cyan-900  font-bold'>Register</Link>
          </span>
      </div>
      
      </div>
   
    </div>
  )
}

export default Login
