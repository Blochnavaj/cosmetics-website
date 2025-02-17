import React, { useState, useEffect } from 'react';
import Banner_1 from '../assets/Banner_1.jpg'
import Banner_2 from '../assets/Banner_2.jpg'
import Banner_3 from '../assets/Banner_3.jpg'
import Banner_4 from '../assets/Banner_4.jpg'
import Banner_5 from '../assets/Banner_5.jpg'
import Banner_6 from '../assets/Banner_6.jpg'

function Slider() {
  const banners = [
     Banner_1,
     Banner_2,
     Banner_3,
     Banner_4,
     Banner_5,
     Banner_6
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto sliding every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  
  return (
    <div className="relative mt-[8rem]">
   

      {/* Banner Images */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="w-full   flex-shrink-0 px-6 ">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="   md:w-full sm:w-[1000px] h-[200px] sm:h-[150px] md:h-[300px] lg:h-[400px] object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
