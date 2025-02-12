import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { MdPersonOutline, MdOutlineArrowDropDown } from "react-icons/md";
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [productDropdown, setProductDropdown] = useState(false);
  const [mobileProductDropdown, setMobileProductDropdown] = useState(false);  

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const links = [
    { name: "Home", path: "#home" },
    { name: "Product", path: "#product" },
    { name: "About Us", path: "#about" },
    { name: "Contact Us", path: "#contact" },
  ];

  const productItems = ["Makeup", "Skin Care", "Hair Care", "Fragrances"];

  return (
    <>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img className="w-[150px] h-[50px]" src={logo} alt="Logo" />
          </div>

          {/* Menu Icon for Mobile */}
          <div className="md:hidden cursor-pointer text-2xl" onClick={handleToggle}>
            <IoReorderThree />
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-md absolute md:right-1/4 lg:right-1/3">
            {links.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => item.name === "Product" && setProductDropdown(true)}
                onMouseLeave={() => setProductDropdown(false)}
              >
                <Link
                  to={item.path}
                  onClick={() => setActiveLink(item.name)}
                  className={`flex items-center pb-1 cursor-pointer ${
                    activeLink === item.name
                      ? "after:absolute after:w-full after:h-[2px] after:bg-green-600 after:bottom-0 after:left-0"
                      : ""
                  }`}
                >
                  {item.name}
                  {item.name === "Product" && (
                    <MdOutlineArrowDropDown className="ml-1" />
                  )}
                </Link>

                {/* Product Dropdown */}
                {item.name === "Product" && productDropdown && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md border rounded-lg z-10">
                    {productItems.map((product, i) => (
                      <li key={i} className="px-4 py-2 hover:bg-gray-100">
                        <Link to={`#${product.toLowerCase().replace(" ", "")}`}>
                          {product}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <div className="fixed top-0 right-0 w-[80%] h-full bg-white shadow-lg z-50 md:hidden">
            {/* Cancel Button */}
            <div className="flex justify-end p-4">
              <RxCross2 className="text-2xl cursor-pointer" onClick={handleToggle} />
            </div>

            {/* Menu Links */}
            <ul className="flex flex-col gap-4 px-6 py-4">
              {links.map((item, index) => (
                <li key={index}>
                  <div
                    className={`relative flex items-center pb-1 cursor-pointer ${
                      activeLink === item.name
                        ? "after:absolute after:w-full after:h-[2px] after:bg-green-600 after:bottom-0 after:left-0"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveLink(item.name);
                      if (item.name === "Product") {
                        setMobileProductDropdown(!mobileProductDropdown);
                      }
                    }}
                  >
                    {item.name}
                    {item.name === "Product" && (
                      <MdOutlineArrowDropDown className="ml-1" />
                    )}
                  </div>

                  {/* Mobile Dropdown for Product */}
                  {item.name === "Product" && mobileProductDropdown && (
                    <ul className="mt-2 ml-4">
                      {productItems.map((product, i) => (
                        <li key={i} className="px-4 py-2 hover:bg-gray-100">
                          <Link to={`#${product.toLowerCase().replace(" ", "")}`}>
                            {product}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
