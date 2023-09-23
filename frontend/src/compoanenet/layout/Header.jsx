import React from 'react'

function Header() {
  return (
    <div className='container mx-auto h-8 p-3 md:flex md:flex-row md:justify-between'>
      <div className="flex flex-row justify-center">
         <div className='bg-gradient-to-r from-purple-400 to-red-400 w-8 h-8 rounded-lg '></div>
         <h1 className='text-3xl text-gray-600 ml-2'>Logo</h1>
        </div>
      <div className='mt-2'>
        <a href='#' className='md:text-2xl p-3 hover:text-purple-500'>Home</a>
        <a href='#' className='md:text-2xl p-3 hover:text-purple-500'>shop</a>
        <a href='#' className='md:text-2xl p-3 hover:text-purple-500'>Blog</a>
        <a href='#' className='md:text-2xl p-3 hover:text-purple-500'>Contact</a>
        <a href='#' className='md:text-2xl p-3 text-gray-50 bg-purple-600 rounded-full px-5 pe-3 hover:bg-purple-700'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
           className="w-8 h-8 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
       </svg>
   Cart(0)</a>
      </div>
    </div>
  )
}

export default Header
