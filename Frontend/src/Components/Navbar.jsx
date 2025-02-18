import React, { useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  
   const [visible , setVisible] = useState(false);

  return (
    <>
     <div className='flex justify-between items-center py-4 font-medium'>
    
      <img src={assets.logo} className='w-36' alt="" />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-500'>
      <NavLink to='/' className='flex flex-col items-center ' >  
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center ' >  
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center ' >  
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center ' >  
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-500 hidden' />
        </NavLink>
      </ul>
  
      <div className='flex items-center gap-4'>
         <img src={assets.search_icon} className='w-5 cursor-pointer hover:text-gray-600' alt="" />
         <div className='group relative'>
         <img src={assets.profile_icon} className='h-5 cursor-pointer' alt="" />
           <div className='group-hover:block hidden absolute border  rounded-md right-0  mt-2  '>
            <div className='flex flex-col  items-center gap-2 cursor-pointer bg-slate-100 text-gray-500 w-full h-full  py-3 px-5 text-nowrap rounded '>
               <p className='hover:text-black cursor-pointer'>My Profile</p>
               <p className='hover:text-black cursor-pointer'>Orders</p>
               <p className='hover:text-black cursor-pointer'>Log-Out</p>
            </div>
           </div>
         </div>
         <Link to='/cart' className='relative' >
         <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
         <p className='absolute top-[12px] right-[-6px] w-4 h-4 bg-black text-center text-white leading-4 rounded-full aspect-square text-[8px]'>10</p>
         </Link>
         <img onClick={() => setVisible(true)} src={assets.menu_icon} className='md:hidden flex w-5 cursor-pointer'  alt="" />
      </div>
           
           {/* menu items for small screen  */}

           <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full ' : 'w-0' }`}>
              <div className='flex flex-col text-gray-600'>
                <div className='flex items-center gap-3 p-3 cursor-pointer '>
                    <img onClick={() =>setVisible(false)} src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                    <p>Back</p>
                </div>
  
                 
                   <NavLink onClick={() => setVisible(false )} to='/' className='px-3 py-2 border'> Home </NavLink>
                   <NavLink onClick={() => setVisible(false )} to='/collection' className='px-3 py-2 border'>  Collection </NavLink>
                   <NavLink onClick={() => setVisible(false )} to='/contact' className='px-3 py-2 border'>  Contact </NavLink>
                   <NavLink onClick={() => setVisible(false )} to='/about' className='px-3 py-2 border'>  About </NavLink>
            
              </div>
           </div>
      
     </div>
    </>
  )
}

export default Navbar