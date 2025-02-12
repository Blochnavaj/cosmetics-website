import React from "react";
import { motion } from "framer-motion";
import about_us from '../assets/about_us.jpg'

function About_us() {
  return (
    <motion.div 
      className="bg-pink-50 text-gray-900 py-12 px-6 md:px-20" id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-500 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to <span className="font-semibold">Glow Essence</span>, where beauty meets quality. 
          Our mission is to bring you the finest skincare and cosmetic products, crafted with love and care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.img 
          src={about_us}
          alt="Cosmetics"
          className="rounded-lg shadow-lg w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-green-500 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2020, Glow Essence was born out of a passion for high-quality, cruelty-free cosmetics.
            We believe that beauty should be accessible to all while maintaining ethical and sustainable practices.
          </p>
          <h2 className="text-3xl font-semibold text-green-500 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>🌱 100% Natural Ingredients</li>
            <li>🐰 Cruelty-Free & Vegan</li>
            <li>✨ Dermatologically Tested</li>
            <li>🌍 Sustainable & Eco-Friendly Packaging</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About_us;
