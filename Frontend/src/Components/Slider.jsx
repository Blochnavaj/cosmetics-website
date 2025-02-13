 
 import React from 'react';
 import { motion } from 'framer-motion';
 
 function Slider() {
   return (
    <div className="w-full max-h-full flex justify-center items-center mt-[10rem] mb-2 " id="home">
    <motion.div 
      className="w-full max-w-7xl" 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full overflow-hidden rounded-lg px-1.5">
        <iframe 
          className="w-full h-[200px] sm:h-[200px] md:h-[450px] lg:h-[550px] object-cover"
          src="https://www.youtube.com/embed/CxZI6R1VKJY?autoplay=1&mute=1&loop=1&playlist=CxZI6R1VKJY"
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  </div>
   );
 }
 
 export default Slider;
 