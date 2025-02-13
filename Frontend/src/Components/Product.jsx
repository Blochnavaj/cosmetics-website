import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";


function Product() {
  const { t } = useTranslation();
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const scrollLeft = (ref) => {
    if (ref.current) ref.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = (ref) => {
    if (ref.current) ref.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const products1 = [
    { id: 1, name: t("Matte Lipstick"), category: t("Makeup"), price: 15.99, image: "https://www.transparentpng.com/download/makeup/sell-cosmetics-brush-and-powder-makeup-png-transparent-free-download-ghOowx.png", description: t("A long-lasting matte lipstick.") },
    { id: 2, name: t("Hydrating Foundation"), category: t("Makeup"), price: 25.49, image: "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png", description: t("Lightweight, full-coverage foundation.") },
    { id: 2, name: t("Hydrating Foundation"), category: t("Makeup"), price: 25.49, image: "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png", description: t("Lightweight, full-coverage foundation.") },
    { id: 2, name: t("Hydrating Foundation"), category: t("Makeup"), price: 25.49, image: "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png", description: t("Lightweight, full-coverage foundation.") },
    { id: 2, name: t("Hydrating Foundation"), category: t("Makeup"), price: 25.49, image: "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png", description: t("Lightweight, full-coverage foundation.") },
    { id: 2, name: t("Hydrating Foundation"), category: t("Makeup"), price: 25.49, image: "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png", description: t("Lightweight, full-coverage foundation.") },
    { id: 2, name: t("Hydrating Foundation"), category: t("Makeup"), price: 25.49, image: "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png", description: t("Lightweight, full-coverage foundation.") },
    { id: 2, name: t("Hydrating Foundation"), category: t("Makeup"), price: 25.49, image: "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png", description: t("Lightweight, full-coverage foundation.") },
    { id: 2, name: t("Hydrating Foundation"), category: t("Makeup"), price: 25.49, image: "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png", description: t("Lightweight, full-coverage foundation.") },
    { id: 2, name: t("Hydrating Foundation"), category: t("Makeup"), price: 25.49, image: "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png", description: t("Lightweight, full-coverage foundation.") },
    { id: 2, name: t("Hydrating Foundation"), category: t("Makeup"), price: 25.49, image: "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png", description: t("Lightweight, full-coverage foundation.") },
    { id: 2, name: t("Hydrating Foundation"), category: t("Makeup"), price: 25.49, image: "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png", description: t("Lightweight, full-coverage foundation.") },
    { id: 2, name: t("Hydrating Foundation"), category: t("Makeup"), price: 25.49, image: "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png", description: t("Lightweight, full-coverage foundation.") },
    { id: 2, name: t("Hydrating Foundation"), category: t("Makeup"), price: 25.49, image: "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png", description: t("Lightweight, full-coverage foundation.") },
    { id: 2, name: t("Hydrating Foundation"), category: t("Makeup"), price: 25.49, image: "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png", description: t("Lightweight, full-coverage foundation.") },
    { id: 2, name: t("Hydrating Foundation"), category: t("Makeup"), price: 25.49, image: "https://sdcdn.io/mac/in/mac_sku_MY3N41_1x1_0.png", description: t("Lightweight, full-coverage foundation.") },
  ];

  const products2 = [
    { id: 8, name: t("BB Cream"), category: t("Makeup"), price: 18.99, image: "https://static.vecteezy.com/system/resources/thumbnails/035/197/725/small_2x/cosmetics-products-transparent-background-fashion-outfit-profucts-png.png", description: t("All-in-one beauty balm.") },
    { id: 8, name: t("BB Cream"), category: t("Makeup"), price: 18.99, image: "https://static.vecteezy.com/system/resources/thumbnails/035/197/725/small_2x/cosmetics-products-transparent-background-fashion-outfit-profucts-png.png", description: t("All-in-one beauty balm.") },
    { id: 8, name: t("BB Cream"), category: t("Makeup"), price: 18.99, image: "https://static.vecteezy.com/system/resources/thumbnails/035/197/725/small_2x/cosmetics-products-transparent-background-fashion-outfit-profucts-png.png", description: t("All-in-one beauty balm.") },
    { id: 8, name: t("BB Cream"), category: t("Makeup"), price: 18.99, image: "https://static.vecteezy.com/system/resources/thumbnails/035/197/725/small_2x/cosmetics-products-transparent-background-fashion-outfit-profucts-png.png", description: t("All-in-one beauty balm.") },
    { id: 8, name: t("BB Cream"), category: t("Makeup"), price: 18.99, image: "https://static.vecteezy.com/system/resources/thumbnails/035/197/725/small_2x/cosmetics-products-transparent-background-fashion-outfit-profucts-png.png", description: t("All-in-one beauty balm.") },
    { id: 8, name: t("BB Cream"), category: t("Makeup"), price: 18.99, image: "https://static.vecteezy.com/system/resources/thumbnails/035/197/725/small_2x/cosmetics-products-transparent-background-fashion-outfit-profucts-png.png", description: t("All-in-one beauty balm.") },
    { id: 8, name: t("BB Cream"), category: t("Makeup"), price: 18.99, image: "https://static.vecteezy.com/system/resources/thumbnails/035/197/725/small_2x/cosmetics-products-transparent-background-fashion-outfit-profucts-png.png", description: t("All-in-one beauty balm.") },
    { id: 8, name: t("BB Cream"), category: t("Makeup"), price: 18.99, image: "https://static.vecteezy.com/system/resources/thumbnails/035/197/725/small_2x/cosmetics-products-transparent-background-fashion-outfit-profucts-png.png", description: t("All-in-one beauty balm.") },
    { id: 8, name: t("BB Cream"), category: t("Makeup"), price: 18.99, image: "https://static.vecteezy.com/system/resources/thumbnails/035/197/725/small_2x/cosmetics-products-transparent-background-fashion-outfit-profucts-png.png", description: t("All-in-one beauty balm.") },
    { id: 8, name: t("BB Cream"), category: t("Makeup"), price: 18.99, image: "https://static.vecteezy.com/system/resources/thumbnails/035/197/725/small_2x/cosmetics-products-transparent-background-fashion-outfit-profucts-png.png", description: t("All-in-one beauty balm.") },
    { id: 8, name: t("BB Cream"), category: t("Makeup"), price: 18.99, image: "https://static.vecteezy.com/system/resources/thumbnails/035/197/725/small_2x/cosmetics-products-transparent-background-fashion-outfit-profucts-png.png", description: t("All-in-one beauty balm.") },
    { id: 8, name: t("BB Cream"), category: t("Makeup"), price: 18.99, image: "https://static.vecteezy.com/system/resources/thumbnails/035/197/725/small_2x/cosmetics-products-transparent-background-fashion-outfit-profucts-png.png", description: t("All-in-one beauty balm.") },
    { id: 8, name: t("BB Cream"), category: t("Makeup"), price: 18.99, image: "https://static.vecteezy.com/system/resources/thumbnails/035/197/725/small_2x/cosmetics-products-transparent-background-fashion-outfit-profucts-png.png", description: t("All-in-one beauty balm.") },
   ];

  return (
    <div className="w-full py-7">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-4xl sm:text-5xl mb-6">
          Our <span className="text-green-500 font-bold">Product </span>
        </h1>
      </div>

      {/* Row 1 */}
      <div className="relative w-full text-center">
        <div ref={scrollRef1} className="flex space-x-6 px-6 py-4 w-full overflow-x-hidden overflow-y-hidden no-scrollbar">
          {products1.map((product) => (
            <motion.div key={product.id} className="border p-4 rounded-lg shadow-md cursor-pointer w-[250px] flex-shrink-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded-md mx-auto" />
              <h2 className="text-lg font-semibold mt-2 text-center">{product.name}</h2>
              <p className="text-gray-600 text-center">{product.category}</p>
              <p className="text-green-600 font-bold text-center">${product.price}</p>
              <p className="text-gray-500 text-sm text-center truncate">{product.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-gray-800 text-white p-2 rounded-full" onClick={() => scrollLeft(scrollRef1)}>
            <FaAngleLeft size={30} />
          </button>
          <button className="bg-gray-800 text-white p-2 rounded-full" onClick={() => scrollRight(scrollRef1)}>
            <FaAngleRight size={30} />
          </button>
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative w-full text-center mt-6">
        <div ref={scrollRef2} className="flex space-x-6 px-6 py-4 w-full overflow-x-hidden overflow-y-hidden no-scrollbar">
          {products2.map((product) => (
            <motion.div key={product.id} className="border p-4 rounded-lg shadow-md cursor-pointer w-[250px] flex-shrink-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded-md mx-auto" />
              <h2 className="text-lg font-semibold mt-2 text-center">{product.name}</h2>
              <p className="text-gray-600 text-center">{product.category}</p>
              <p className="text-green-600 font-bold text-center">${product.price}</p>
              <p className="text-gray-500 text-sm text-center truncate">{product.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-gray-800 text-white p-2 rounded-full" onClick={() => scrollLeft(scrollRef2)}>
            <FaAngleLeft size={30} />
          </button>
          <button className="bg-gray-800 text-white p-2 rounded-full" onClick={() => scrollRight(scrollRef2)}>
            <FaAngleRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;