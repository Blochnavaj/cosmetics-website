import React, { useContext, useEffect, useState } from 'react'
import Tittle from './Tittle'
import { ShopContext } from '../Context/ShopContext'
import ProductItems from './ProductItems';

function BestSeller() {

     const {products} = useContext(ShopContext);
     const [bestSeller , setBestSeller] = useState([]);

     useEffect(() => {
        const bestproduct = products.filter((itmes) => (itmes.bestseller))
        setBestSeller(bestproduct.slice(0,5));
     },[])
  return (
    <>
      <div className='text-center  m-auto mt-4'>
        <Tittle text1='Best' text2='Seller'/>
        <p className='w-3/4 font-light text-sm m-auto md:text-base sm:text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae porro architecto deleniti fuga sint repellendus! Beatae quos molestias unde voluptas.</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-3'>
     {
        bestSeller.map((itmes,index) =>(
            <ProductItems key={index} id={itmes._id} name={itmes.name} price={itmes.price} image={itmes.image}/>
        ))
     }
        
      </div>


    </>
  )
}

export default BestSeller