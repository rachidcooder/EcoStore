import React from 'react'
import PropTypes from 'prop-types'
import Pimage from '../images/product2.jpg'

//https://www.youtube.com/watch?v=fO_Bs7Lut9I
function descibeProduct({product}) {
  return (
    <div className=' mt-10 flex flex-col'>
       <div className='flex md:flex-row bg-gray-50'>
      <div className='h-full m-5 rounded-lg flex md:flex-col'>
        <img src={Pimage} alt='ic-product' className='rounded-lg'/>
        <div className='flex flex-row m-5 bg-slate-300 py-1 px-1 w-fit'>
             <img src={Pimage} alt='ic-product' className=' h-16 w-16 rounded-lg mx-2'/>
            <img src={Pimage} alt='ic-product' className=' h-16 w-16 rounded-lg mx-2'/>
            <img src={Pimage} alt='ic-product' className=' h-16 w-16 rounded-lg mx-2'/>
            <img src={Pimage} alt='ic-product' className=' h-16 w-16 rounded-lg mx-2'/>
            <img src={Pimage} alt='ic-product' className=' h-16 w-16 rounded-lg mx-2'/>
        
            
        </div>
      </div>
      <div className=' w-2/3  m-5 flex flex-col p-3 scroll-m-'>
        <h1 className='text-4xl font-bold text-gray-900'>{product.name}</h1>
        <h1 className='text-3xl text-red-950'>{product.category}</h1>
        <h2 className='text-2xl text-yellow-500'>Rating ¤¤¤¤¤</h2>
        <p className='text-xl'>{product.description}</p>
          <p className='text-2xl'>
             quibusdam enim officia facere est ratione
          </p>
          <p className='text-xl'>
            Totam esse sequi quo sapiente consequatur deleniti amet,
          </p>
          <h2 className='text-4xl text-gray-900 font-bold'>{`${product.price} $`}</h2>
          <div className='flex flex-col'>
            <button className='m-2 px-20 py-2  text-xl 
              bg-gradient-to-r from-red-600 to-pink-500 rounded-full'>Add to cart</button>
                <button className='m-2 px-20 py-2  text-xl 
              bg-gradient-to-r from-red-600 to-pink-500 rounded-full'>Buy Now</button>
          </div>
          <div className='flex flex-col'>
        <h1 className='text-3xl'>About this item</h1>
           <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Eaque, dolorem. Quibusdam, mollitia! Necessitatibus, repellat quidem fugiat,<br/>
           magnam voluptatum perferendis ipsam sed eaque molestias dolore exercitationem debitis officiis.<br/>
            Ad, assumenda necessitatibus.
            
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Eaque, dolorem. Quibusdam, mollitia! Necessitatibus, repellat quidem fugiat,<br/>
           magnam voluptatum perferendis ipsam sed eaque molestias dolore exercitationem debitis officiis.<br/>
            Ad, assumenda necessitatibus.
            
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Eaque, dolorem. Quibusdam, mollitia! Necessitatibus, repellat quidem fugiat,<br/>
           magnam voluptatum perferendis ipsam sed eaque molestias dolore exercitationem debitis officiis.<br/>
            Ad, assumenda necessitatibus.
         
              </p> 
      </div>
      </div>
      
           </div>
    </div>
  )
   
}


export default descibeProduct

