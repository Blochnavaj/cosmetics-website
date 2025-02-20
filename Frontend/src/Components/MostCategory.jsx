import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';
 
function MostCategory() {
  return (
    <div className="flex flex-wrap items-center justify-around gap-6 p-6 mt-4">
      {/* Nature Gallery */}
      <div className="bg-pink-200 shadow-lg rounded-lg p-4 w-96">
        <h2 className="text-xl font-bold mb-4 text-gray-400">Nature Gallery</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/product" className="hover:scale-105 transition-transform duration-300">
            <img src={assets.pro11} alt="Beautiful Lake" className="w-full h-36 object-cover rounded-md" />
            <p className="text-sm mt-2 text-center">Beautiful Lake</p>
          </Link>
          <Link to="/product" className="hover:scale-105 transition-transform duration-300">
            <img src={assets.pro12} alt="Beautiful Lake" className="w-full h-36 object-cover rounded-md" />
            <p className="text-sm mt-2 text-center">Beautiful Lake</p>
          </Link>
          <Link to="/product" className="hover:scale-105 transition-transform duration-300">
            <img src={assets.pro13} alt="Beautiful Lake" className="w-full h-36 object-cover rounded-md" />
            <p className="text-sm mt-2 text-center">Beautiful Lake</p>
          </Link>
          <Link to="/product" className="hover:scale-105 transition-transform duration-300">
            <img src={ assets.pro14} alt="Beautiful Lake" className="w-full h-36 object-cover rounded-md" />
            <p className="text-sm mt-2 text-center">Beautiful Lake</p>
          </Link>
        </div>
      </div>

      {/* City Life */}
      <div className="bg-green-300 shadow-lg rounded-lg p-4 w-96">
        <h2 className="text-xl font-bold mb-4 text-gray-400">City Life</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/product" className="hover:scale-105 transition-transform duration-300">
            <img src={ assets.pro15} alt="City View" className="w-full h-36 object-cover rounded-md" />
            <p className="text-sm mt-2 text-center">City View</p>
          </Link>
          <Link to="/product" className="hover:scale-105 transition-transform duration-300">
            <img src={assets.pro16} alt="City View" className="w-full h-36 object-cover rounded-md" />
            <p className="text-sm mt-2 text-center">City View</p>
          </Link>
          <Link to="/product" className="hover:scale-105 transition-transform duration-300">
            <img src={ assets.pro17} alt="City View" className="w-full h-36 object-cover rounded-md" />
            <p className="text-sm mt-2 text-center">City View</p>
          </Link>
          <Link to="/product" className="hover:scale-105 transition-transform duration-300">
            <img src={ assets.pro18} alt="City View" className="w-full h-36 object-cover rounded-md" />
            <p className="text-sm mt-2 text-center">City View</p>
          </Link>
        </div>
      </div>

      {/* Space Wonders */}
      <div className="bg-lime-300 shadow-lg rounded-lg p-4 w-96">
        <h2 className="text-xl font-bold mb-4 text-gray-400">Space Wonders</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/product" className="hover:scale-105 transition-transform duration-300">
            <img src={assets.pro18} alt="Galaxy View" className="w-full h-36 object-cover rounded-md" />
            <p className="text-sm mt-2 text-center">Galaxy View</p>
          </Link>
          <Link to="/product" className="hover:scale-105 transition-transform duration-300">
            <img src={assets.pro18} alt="Galaxy View" className="w-full h-36 object-cover rounded-md" />
            <p className="text-sm mt-2 text-center">Galaxy View</p>
          </Link>
          <Link to="/product" className="hover:scale-105 transition-transform duration-300">
            <img src={assets.pro18} alt="Galaxy View" className="w-full h-36 object-cover rounded-md" />
            <p className="text-sm mt-2 text-center">Galaxy View</p>
          </Link>
          <Link to="/product" className="hover:scale-105 transition-transform duration-300">
            <img src={assets.pro18} alt="Galaxy View" className="w-full h-36 object-cover rounded-md" />
            <p className="text-sm mt-2 text-center">Galaxy View</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MostCategory;