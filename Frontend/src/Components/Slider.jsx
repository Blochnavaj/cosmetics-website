import React, { useState, useEffect } from 'react';
import photo_1 from '../assets/photo_1.jpg';
import photo_2 from '../assets/photo_2.jpg';
import photo_3 from '../assets/photo_3.jpg';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = [photo_1, photo_2, photo_3];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full overflow-hidden ">  
      <div className="flex justify-center items-center mt-28">
        <div className="relative w-full max-w-7xl">
          <div className="relative w-full overflow-hidden rounded-lg">
            <img 
              src={images[currentIndex]} 
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover"
              alt={`Slide ${currentIndex + 1}`} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;


     {/* Arrows */}
        {/* <div className='flex justify-between items-center absolute top-1/2 w-full px-4 transform -translate-y-1/2'>
          <button onClick={goToPrevious} className='text-3xl text-white bg-gray-700 p-2 rounded-full hover:bg-gray-900'>
            <FaAngleLeft />
          </button>
          <button onClick={goToNext} className='text-3xl text-white bg-gray-700 p-2 rounded-full hover:bg-gray-900'>
            <FaAngleRight />
          </button>
        </div> */}