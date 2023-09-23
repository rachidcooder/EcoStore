import { useState } from 'react'
import Home from './pages/home'
import Header from './compoanenet/layout/Header'
import Footer from './compoanenet/layout/footer'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import DescibeProduct from './compoanenet/descibeProduct'
import { EcoState } from './context/Provider'
import CardItems from './compoanenet/CardItems'
 
function App() {
   
   const{currentProduct,setcurrentProduct}=EcoState()
   
  return (
<div>
   <Header/>
   <BrowserRouter>
     <Routes>
      <Route path='/' element={  <Home />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
       <Route path='/cart' element={<CardItems/>}/>
      <Route path='/product' element={<DescibeProduct product={currentProduct}/>}/>
     </Routes>
   </BrowserRouter>
   <Footer/>
</div>
  )
}



export default App
