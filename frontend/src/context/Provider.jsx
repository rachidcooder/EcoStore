import React, { createContext, useContext, useEffect, useState } from 'react'


const EcoContext=createContext();
function EcProvider({children}) {
const [user,setUser]=useState("")
const [categor,setCategory] =useState([]);
const [currentProduct,setcurrentProduct]=useState('');
const[cartProducts,setCartProducts]=([])

    
useEffect(()=>{
  const isUser=localStorage.getItem("user") ;
   if(isUser){
    setUser(isUser) ;
   }
},[]) ;
 
  return (
   <EcoContext.Provider
           value={{
               user,setUser,
               categor,setCategory,
               currentProduct,setcurrentProduct,
               cartProducts,setCartProducts
             }}
   >
{children}
   </EcoContext.Provider>
  )
}
 export const EcoState=()=>{
  return useContext(EcoContext) ;
 }
export default EcProvider
