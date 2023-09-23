import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { EcoState } from '../../context/Provider'
import axios from 'axios';
import { RegisterRoute } from '../../utils/apiRoutes';

function Register() {
  const{user ,setUser}=EcoState()
  const navigate=useNavigate();
  const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

const onRegister=async(event)=>{
  event.preventDefault();
     if(firstname&&lastname && email && password){
       try{
        const res =await axios.post(RegisterRoute,{
         firstName:firstname,
         lastName:lastname,
          email,
          password
        }) ;
        console.log(res);
            if(res.data){
               setUser(res.data) ;
             localStorage.setItem("user",JSON.stringify(res.data));
             navigate("/");
            }
       }catch(err){console.log(err)}
     }
}

  return (
    <div className='m-5 h-screen  flex justify-center items-center'>
      <div className='container md:w-1/3  bg-slate-200 m-5
            shadow-lg rounded-lg p-5'>
              <h1 className=' mx-5 text-xl text-gray-800 font-bold'>Register</h1>
      <form  onSubmit={onRegister}
          className='flex flex-col'>
        <input type='text' placeholder='Enter first name'
            value={firstname}
              onChange={(e)=>{setFirstname(e.target.value)}}
           className='py-2 px-4 outline-none m-2 bg-gray-400 placeholder:text-gray-50 rounded-lg'/>
            <input type='text' placeholder='Enter last name'
            value={lastname}
              onChange={(e)=>{setLastname(e.target.value)}}
           className='py-2 px-4 outline-none m-2 bg-gray-400 placeholder:text-gray-50 rounded-lg'/>
             <input
              type='email'
               placeholder='Enter email'
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
           className='p-2 outline-none m-2 bg-gray-400 placeholder:text-gray-50 rounded-lg'/>
             <input type='password' placeholder='Enter password'
                  value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
           className='p-2 outline-none m-2 bg-gray-400 placeholder:text-gray-50 rounded-lg'/>
           <button type='submit' className='rounded-lg p-2 m-2 bg-sky-500 hover:bg-sky-700 text-white '>Register</button>
      </form>
      <div className='flex justify-center '>
         <span>
             you don't have account ? <Link to="/login" className='text-cyan-900  font-bold'>Log in</Link>
          </span>
      </div>
      
      </div>
   
    </div>
  )
}

export default Register
