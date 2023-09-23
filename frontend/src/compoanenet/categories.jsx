import React, { useEffect, useState } from 'react'
import IcTest from "../images/product3.jpg"
import IcTest1 from "../images/women/product3.jpg"
import Ic from "../images/women/product2.jpg"
import {EcoState} from "../context/Provider.jsx"
import axios from 'axios'
import DescibeProduct from './descibeProduct'
import { useNavigate } from 'react-router-dom'
import { ToAddTocartRoute } from '../utils/apiRoutes'

function categories() {
  const [products, setProducts] = useState([]);
  const {categor,setCategory,setcurrentProduct}=EcoState();
    const { setCartProducts ,user }=EcoState();

  const navigate=useNavigate();


    useEffect(()=>{
    const  getCategs=async()=>{
       try{
        //http://localhost:5173/#
         const res = await axios.get("http://localhost:3000/api/ecostore/category");
         if(res.data){
          setCategory(res.data.calegoryList);
         }

           }catch(err){console.log(err)}
      }
      getCategs();
    },[])

   useEffect(()=>{
       const getPrs=async()=>{
        try{
           const res = await axios.get("http://localhost:3000/api/ecostore/product") ;
         if(res.data){
         setProducts(res.data.products);
         }
         }catch(err){console.log(err)}

       }
       if(categor)
          getPrs();
   },[categor])

   const onShowProductInfo=(product)=>{
      if(product){
        setcurrentProduct(product)
        navigate("/product");
      }
     }

  const onAddTocart=async(pr)=>{
    const cartItems={ 
      "product":pr._id,
        "quantity":1,
        "price":pr.price}
        console.log("cart items",cartItems)
      try{
            const userString =JSON.parse(user);
          if(!user|| !userString.token){
            navigate("/login") ;
          }
       const  config = { headers: {
    Authorization: `Bearer ${userString.token}`,
         },
         };
     const res=await axios.post(ToAddTocartRoute,cartItems,config);
         console.log("res",res.data) ;
      }catch(err){console.log(err)}

  }
  return (
    <div>
      <div className=''>
              <div className='p-3 flex flex-row '>
        <h1 className='text-4xl px-3 font-medium text-gray-700'>Categories </h1>
         <select className='text-3xl px-3'>
          {
            categor.map((ctgs,i)=>{
              return ( <option value="Men" key={ctgs._id}>{ctgs.name}</option>)
            })
          }
           
        </select>
           </div >
           <div className='flex flex-col'>
    <div className='grid grid-flow-row md:grid-cols-3 lg:xl:grid-cols-3 xl:grid-cols-4 gap-10 p-4'>
          {products && products.map((product,i)=>{
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
       <a href='#' className='px-2 py-1 text-gray-50 bg-gradient-to-r from-red-600 to-pink-500 rounded-full'
          onClick={()=>{onAddTocart(product)}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
           className="w-5 h-5 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"  />
       </svg>
   Add to cart</a>
     <div className='m-1'></div> 
 <a href='#' className='px-2 py-1 text-gray-50 bg-gradient-to-r from-red-600 to-pink-500 rounded-full'
  onClick={()=>{onShowProductInfo(product)}}
 >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
    detailes</a>

                   </div>
          </div>   
)
                 }) }

                

              </div>
    <div className='grid grid-flow-row md:grid-cols-3 lg:xl:grid-cols-3 xl:grid-cols-4 gap-10 p-4'>
          {products && products.map((product,i)=>{
 return(
      <div className='shadow-lg rounded-lg' key={i}>
                    <a href='#'>
                    <img src={IcTest1} alt='icTest' className='h-80 w-72 rounded-lg'/>
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
                   <div className='flex md:flex-row flex-col lg:justify-between px-2 lg:text-2xl text-xl mx-2 my-2'>
                    <a href='#' className='md:m-2 px-2 py-1 text-gray-50 bg-gradient-to-r from-red-600 to-pink-500 rounded-full'
                        onClick={()=>{onAddTocart(product)}}
                    >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
           className="w-5 h-5 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
       </svg>
   Add to cart</a>
     <div className='m-1'></div> 
           <a href='#' 
           className='md:m-2 px-2 py-1 text-gray-50 bg-gradient-to-r from-red-600 to-pink-500 rounded-full'
            onClick={()=>{onShowProductInfo(product)}}
           >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>

    detailes</a>

                   </div>
          </div>   
)
                 }) }

                

              </div>
  </div>
              <div className='flex flex-row rounded-lg shadow-lg mx-5 '>
                <div className='lg:w-3/5 bg-gradient-to-r from-black via-purple-900 to-transparent rounded text-gray-100 p-12'>
                    <div className='lg:w-1/2'>
    <h3 className='text-3xl mb-4 font-extrabold'>Subscribe to get Our ofers </h3>
    <p className='mb-4 leading-relaxed'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Nesciunt architecto eligendi facilis dolores aperiam ea qui,
        culpa animi eligendi.</p>
        <div>
          <input type='email' placeholder='Enter email Address'
          className='bg-gray-600 text-gray-50 placeholder-gray-400 px-4 py-2 w-full rounded-lg 
          focus:outline-none mb-4'/>
          <button type='submit' className='bg-red-600 rounded-lg w-full py-2'>Subscribe</button>
        </div>
            </div>
                        
                  </div>
                  <div className='lg:w-2/5  lg:flex lg:flex-row hidden justify-end'>
                    <img src={Ic} alt='testIc' className='rounded-lg  h-96 mt-5'/>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default categories

