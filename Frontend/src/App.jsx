 import React from 'react'
import Navbar from './Components/Navbar'
 
import Slider from './Components/Slider'
import Product from './Components/Product'
 
 function App() {
   return (
    <>
     <Navbar/>
     {/* <div className='mt-[100px]'> */}

     <Slider/>
     {/* </div> */}
     <Product/>
    
    </>
   )
 }
 
 export default App