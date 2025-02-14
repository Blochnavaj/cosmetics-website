import React from 'react'
import { motion } from 'framer-motion';


function Newsletter() {
  return (
     <>
     <section className="p-8 bg-gradient-to-br from-purple-200 to-pink-300 text-center">
      <motion.h2 
        className="text-4xl font-extrabold text-green-500 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Subscribe to Our Newsletter
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Get exclusive updates on the latest cosmetics trends and offers!
      </motion.p>
      <motion.form 
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="p-3 rounded-xl shadow-md w-full sm:w-72 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <motion.button 
          type="submit" 
          className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Subscribe
        </motion.button>
      </motion.form>
    </section>
     </>
  )
}

export default Newsletter