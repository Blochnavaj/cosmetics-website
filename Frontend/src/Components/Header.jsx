import React from 'react';
import header_image from '../assets/header_image.png';

function Header() {
  return (
    <div className='md:px-3 md:py-3 px-3 py-3'>
      <div className='flex flex-col-reverse md:flex-row md:items-center md:justify-between'>
        {/* Text Section */}
        <div className='mt-6 md:mt-0 md:w-1/2 md:pr-10  md:pl-6 md:grid md:justify-center md:items-center grid justify-center items-center ml-5'>
          <h1 className='md:text-8xl text-6xl  font-bold text-gray-800'>
            Be <span className='text-[#10B981]'>Beautiful</span>
          </h1>
          <p className='mt-2 md:text-7xl text-4xl text-gray-700'>You need time for Perfection</p>
        </div>

        {/* Image Section */}
        <div className='flex justify-center md:w-1/2'>
          <img 
            className='w-full h-[500px] lg:h-[500px]   md:w-full md:h-[519px] rounded-lg' 
            src={header_image} 
            alt="Header Visual" 
          />
        </div>
      </div>

      {/* Button Section */}
      <div className='gap-x-4 md:absolute md:top-[500px] md:left-[76px] mt-3 md:mt-0 flex justify-center items-center '>
        <button className='border px-5 py-4 rounded-lg bg-green-500 text-white border-white hover:bg-white hover:text-green-500 hover:border-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
          Become a member
        </button>
        <button className='ml-2 border px-5 py-4 rounded-lg bg-white text-green-500 border-green-500 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
          See pricing
        </button>
      </div>

    </div>
  );
}

export default Header;