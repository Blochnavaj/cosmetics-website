import React from 'react';
import { motion } from 'framer-motion';
import luxury_cosmetic from '../assets/luxury_cosmetics.jpg';

const images = [
  luxury_cosmetic,
  luxury_cosmetic,
  luxury_cosmetic,
  luxury_cosmetic,
];

function Gallery() {
  return (
    <section className="p-8 bg-gradient-to-tr from-pink-200 to-purple-300">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Our Stunning Gallery</h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }}
      >
        {images.map((img, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.15, rotate: 2 }} 
            transition={{ duration: 0.5 }} 
            className="overflow-hidden rounded-xl shadow-2xl"
          >
            <img 
              src={img} 
              alt={`Luxury Cosmetic ${index + 1}`} 
              className="w-full h-auto transform hover:scale-105 transition duration-300" 
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Gallery;