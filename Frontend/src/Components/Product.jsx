import React from 'react';
import { motion } from 'framer-motion';

function Product() {
  const product = [
    {
      "id": 1,
      "name": "Matte Lipstick",
      "category": "Makeup",
      "price": 15.99,
      "image": "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png?width=1080&height=1080",
      "description": "A long-lasting matte lipstick with a smooth finish."
    },
    {
      "id": 2,
      "name": "Hydrating Foundation",
      "category": "Makeup",
      "price": 25.49,
      "image": "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png?width=1080&height=1080",
      "description": "A lightweight foundation that provides full coverage."
    },
    {
      "id": 3,
      "name": "Liquid Eyeliner",
      "category": "Makeup",
      "price": 9.99,
      "image": "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png?width=1080&height=1080",
      "description": "Waterproof and smudge-proof liquid eyeliner."
    },
    {
      "id": 4,
      "name": "Moisturizing Face Cream",
      "category": "Skin Care",
      "price": 19.99,
      "image": "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png?width=1080&height=1080",
      "description": "Hydrates and nourishes skin for a radiant glow."
    },
    {
      "id": 5,
      "name": "Anti-Aging Serum",
      "category": "Skin Care",
      "price": 29.99,
      "image": "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png?width=1080&height=1080",
      "description": "Reduces fine lines and wrinkles for a youthful look."
    },
    {
      "id": 6,
      "name": "Herbal Shampoo",
      "category": "Hair Care",
      "price": 12.99,
      "image": "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png?width=1080&height=1080",
      "description": "Strengthens hair and prevents dandruff naturally."
    },
    {
      "id": 7,
      "name": "Argan Oil Hair Serum",
      "category": "Hair Care",
      "price": 17.99,
      "image": "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png?width=1080&height=1080",
      "description": "Nourishes and repairs damaged hair with Argan oil."
    },
    {
      "id": 8,
      "name": "Luxury Perfume",
      "category": "Fragrances",
      "price": 49.99,
      "image": "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png?width=1080&height=1080",
      "description": "A long-lasting, enchanting fragrance for any occasion."
    },
    {
      "id": 9,
      "name": "Coconut Body Lotion",
      "category": "Skin Care",
      "price": 14.99,
      "image": "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png?width=1080&height=1080",
      "description": "Deeply moisturizes and softens skin with coconut oil."
    }
  ];
  
  return (
    <>
      <div className='flex justify-center items-center'>
        <h1 className='font-bold text-6xl mt-12'>Our <span className='text-green-500'>Product</span></h1>
      </div>
      <div id='product' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {product.map((product, index) => (
          <motion.div 
            key={product.id} 
            className="border p-4 rounded-lg shadow-md cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={product.image} alt={product.name} className="w-48 h-48 object-cover rounded-md mx-auto flex justify-center items-center text-center" />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
            <p className="text-gray-500">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Product;
