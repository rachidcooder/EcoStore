import React, { useEffect } from 'react'
import { EcoState } from '../context/Provider'
import axios from 'axios'
import { TogetCartRoute } from '../utils/apiRoutes'







function CardItems() {
const { cartProducts,setCartProducts }=EcoState() ;
const{user}=EcoState()
  
 useEffect(()=>{
  const getCartItems=async()=>{
    if(user){
    const userString =JSON.parse(user);
          if(!user|| !userString.token){
            navigate("/login") ;
          }
       const  config = { headers: {
             Authorization: `Bearer ${userString.token}`,
          },
         };
    try{
       const res=await axios.get(TogetCartRoute,config)
              console.log(res.data) ;
              const data=res.data.cartItems ;
        if(res.data.cartItems){
          setCartProducts(data);
        
      }}catch(err){console.log(err)}
    }
  }
  getCartItems();
 },[user])
 
   const onShowProductInfo=(product)=>{
      if(product){
        setcurrentProduct(product)
        navigate("/product");
      }
     }

  return (
    <div className='mt-10'>
    
          <div className='grid grid-flow-row md:grid-cols-3 lg:xl:grid-cols-3 xl:grid-cols-4 gap-10 p-4'>
          {cartProducts && cartProducts.map((product,i)=>{
 return(
      <div className='shadow-lg rounded-lg' key={i}>
                    <a href='#'>
                    <img src={IcTest} alt='icTest' className='h-80 w-72 rounded-lg'/>
                    </a>
                    <h3 className='text-2xl'><a>{product.name}</a></h3>
                    <div className='flex flex-row my-3'>
                       <div className='bg-black h-5 w-5 rounded-full shadow-md m-2'></div>
                       <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md m-2'></div>
                       <div className='bg-white h-5 w-5 rounded-full shadow-md m-2'></div>
                       <div className='bg-red-800 h-5 w-5 rounded-full shadow-md m-2'></div>
                       <div className='bg-green-800 h-5 w-5 rounded-full shadow-md m-2'></div>
                   </div>
                   <div className='flex flex-row my-3'>
                    <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs  px-2 py-1 mr-2'>XL</div>
                    <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs  px-2 py-1 mr-2'>XXL</div>
                    <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs  px-2 py-1 mr-2'>L</div>
                    <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs  px-2 py-1 mr-2'>M</div>
                    <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs  px-2 py-1 mr-2'>S</div>
                   </div>
                   <div className='flex md:flex-row flex-col lg:justify-between  lg:text-2xl text-xl mx-2 my-2'>
     <div className='m-1'></div> 
 <a href='#' className='px-2 py-1 text-gray-50 bg-gradient-to-r from-red-600 to-pink-500 rounded-full'
  onClick={()=>{onShowProductInfo(product)}}
 >    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
    detailes</a>

                   </div>
          </div>   
)
                 }) }

                

              </div>
    </div>
  )
}

export default CardItems
