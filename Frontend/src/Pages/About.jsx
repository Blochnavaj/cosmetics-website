import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="bg-gradient-to-r from-pink-200 to-purple-300 min-h-screen flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
        className="max-w-5xl bg-white shadow-2xl rounded-3xl p-10 md:p-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-6">Discover Your Unique Beauty</h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          At our cosmetic brand, we celebrate individuality and self-expression. Every product is designed to enhance your natural beauty with high-quality, cruelty-free ingredients.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.img 
            src="https://source.unsplash.com/450x350/?makeup,beauty" 
            alt="Cosmetics" 
            className="rounded-xl shadow-lg w-full md:w-1/2 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          />
          <div className="text-left flex flex-col gap-4">
            <p className="text-gray-600 text-md md:text-lg leading-relaxed">
              Our commitment is to redefine beauty standards by creating luxurious and sustainable cosmetics that make you feel confident and radiant.
            </p>
            <p className="text-gray-600 text-md md:text-lg leading-relaxed">
              Indulge in our exclusive range of makeup and skincare products crafted with love and innovation. Be bold, be you, be beautiful.
            </p>
          </div>
        </div>
        <motion.div 
          className="mt-8"
          whileHover={{ scale: 1.1 }}
        >
          <a href="/shop" className="bg-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-pink-600 transition duration-300 shadow-lg">
            Explore Our Collection
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;