import React, { useRef } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function AllProductList() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mt-5 mx-auto lg:max-w-screen-xl lg:w-full">
      {/* Large Screens (Full Width) */}
      <div className="hidden lg:flex flex-wrap justify-center bg-slate-300 p-4 border rounded-lg lg:gap-[45px]">
        {[
          { name: "Beauty", img: assets.Beauty },
          { name: "Books", img: assets.Books },
          { name: "Events", img: assets.Events },
          { name: "Fashion", img: assets.Fashion },
          { name: "Herbal", img: assets.Herbal_care },
          { name: "Jewelry", img: assets.Jewelry },
          { name: "Movie", img: assets.Movie },
          { name: "Music", img: assets.Music },
        ].map((item, index) => (
          <Link to='/collection'
            key={index}
            className="border px-3 py-2 mx-2 rounded-lg border-black bg-white cursor-pointer flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-500 "
          >
            <img src={item.img} className="w-16" alt={item.name} />
            <p className="mt-2 font-semibold text-lg">{item.name}</p>
          </Link>
        ))}
      </div>

      {/* Medium Screens (Scrollable) */}
      <div
        ref={scrollRef}
        className="md:flex hidden lg:hidden items-center justify-start overflow-x-hidden whitespace-nowrap bg-slate-300 p-4 border rounded-lg scrollbar-hide"
      >
        {[
          { name: "Beauty", img: assets.Beauty },
          { name: "Books", img: assets.Books },
          { name: "Events", img: assets.Events },
          { name: "Fashion", img: assets.Fashion },
          { name: "Herbal", img: assets.Herbal_care },
          { name: "Jewelry", img: assets.Jewelry },
          { name: "Movie", img: assets.Movie },
          { name: "Music", img: assets.Music },
        ].map((item, index) => (
          <Link to='/collection'
            key={index}
            className="border px-3 py-2 mx-2 rounded-lg border-black bg-white cursor-pointer flex flex-col items-center "
          >
            <img src={item.img} className="w-16" alt={item.name} />
            <p className="mt-2 font-semibold text-lg">{item.name}</p>
          </Link>
        ))}
      </div>

      {/* Left Arrow (Only on md screens) */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md md:flex hidden lg:hidden"
      >
        <FaArrowLeft />
      </button>

      {/* Right Arrow (Only on md screens) */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md md:flex hidden lg:hidden"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default AllProductList;
