import React from 'react'
import  ImgBrand from "../images/women/product2.jpg"
import Categories from '../compoanenet/categories'

function home() {
  

  
  return (
    <div className=''>
    <div className='md:flex flex-row justify-end mt-20 items-center ms-10 '>
     <div className='md:w-2/5 md:text-left text-center'>
      <h1 className='text-5xl font-serif  text-gray-600 mb-4'>Some Title Here </h1>
      <p  className='text-2xl uppercase text-gray-600 trackig-wide '>Our brand tagline goes here .</p>
      <p  className='text-2xl uppercase text-gray-600 tracking-wide mb-5'>Our brand motto goes here.</p>
      <a href='' className='bg-gradient-to-r from-red-600 to-pink-500 
           rounded-full text-gray-50 uppercase  px-8 py-3 my-5 text-lg font-bold '>Shop Now</a>
     </div>  
      <div className='w-3/5 flex justify-end mx-10 p-5'>
         <img src={ImgBrand} alt='imgBrand' className='h-96 w-80 rounded-lg'/>
      </div>
    </div>
    <Categories/>
    </div>
  )
}

export default home 
