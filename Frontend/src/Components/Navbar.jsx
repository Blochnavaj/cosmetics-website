import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom"; // Renamed Link to RouterLink
import { Link as ScrollLink } from "react-scroll"; // Renamed Link to ScrollLink
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.svg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [productDropdown, setProductDropdown] = useState(false);
  const [mobileProductDropdown, setMobileProductDropdown] = useState(false);

  const { t, i18n } = useTranslation();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
    setMobileProductDropdown(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  const links = [
    { name: t("home"), path: "home" },
    { name: t("product"), path: "product" },
    { name: t("about"), path: "about" },
    { name: t("contact"), path: "contact" },
  ];

  const productItems = [
    { name: t("makeup"), path: "makeup" },
    { name: t("skincare"), path: "skincare" },
    { name: t("haircare"), path: "haircare" },
    { name: t("fragrances"), path: "fragrances" },
  ];

  return (
    <>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center">
            <img className="w-[150px] h-[50px]" src={logo} alt="Logo" />
          </div>

          <ul className="hidden md:flex gap-8 text-md absolute md:right-1/4 lg:right-1/3">
            {links.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => item.path === "product" && setProductDropdown(true)}
                onMouseLeave={() => setProductDropdown(false)}
              >
                <ScrollLink
                  to={item.path}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  className={`flex items-center pb-1 cursor-pointer ${
                    activeLink === item.name ? "text-green-600 font-semibold border-b-2 border-green-600" : ""
                  }`}
                  onClick={() => setActiveLink(item.name)}
                >
                  {item.name}
                  {item.path === "product" && <MdOutlineArrowDropDown className="ml-1" />}
                </ScrollLink>

                {/* Product Dropdown */}
                {item.path === "product" && productDropdown && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md border rounded-lg z-10">
                    {productItems.map((product, i) => (
                      <li key={i} className="px-4 py-2 hover:bg-gray-100">
                        <ScrollLink to={product.path} smooth={true} duration={500}>
                          {product.name}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => changeLanguage("en")} className={`px-3 py-1 rounded ${i18n.language === "en" ? "bg-green-600 text-white" : "bg-gray-200"}`}>
              EN
            </button>
            <button onClick={() => changeLanguage("fr")} className={`px-3 py-1 rounded ${i18n.language === "fr" ? "bg-green-600 text-white" : "bg-gray-200"}`}>
              FR
            </button>
            <RouterLink to="/login">
              <button className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
            </RouterLink>
           <RouterLink to='/register'>
           <button className="px-4 py-2 bg-blue-600 text-white rounded">Register</button>
           </RouterLink>
          </div>

          <div className="md:hidden cursor-pointer text-2xl" onClick={handleToggle}>
            <IoReorderThree />
          </div>
        </div>

        <div className={`fixed top-0 right-0 w-[80%] h-full bg-white shadow-lg z-50 md:hidden transform ${toggle ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
          <div className="flex justify-end p-4">
            <RxCross2 className="text-2xl cursor-pointer" onClick={closeMenu} />
          </div>

          <div className="flex justify-center gap-4 mb-4">
            <button onClick={() => changeLanguage("en")} className={`px-3 py-1 rounded ${i18n.language === "en" ? "bg-green-600 text-white" : "bg-gray-200"}`}>
              EN
            </button>
            <button onClick={() => changeLanguage("fr")} className={`px-3 py-1 rounded ${i18n.language === "fr" ? "bg-green-600 text-white" : "bg-gray-200"}`}>
              FR
            </button>
          </div>

          <ul className="flex flex-col gap-4 px-6 py-4">
            {links.map((item, index) => (
              <li key={index} className="relative">
                {item.path === "product" ? (
                  <div className="flex items-center cursor-pointer" onClick={() => setMobileProductDropdown(!mobileProductDropdown)}>
                    <span>{item.name}</span>
                    <MdOutlineArrowDropDown className={`text-xl transition-transform ${mobileProductDropdown ? "rotate-180" : ""}`} />
                  </div>
                ) : (
                  <RouterLink
                    to={item.path}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    className={`cursor-pointer pb-1 ${activeLink === item.name ? "text-green-600 font-semibold border-b-2 border-green-600" : ""}`}
                    onClick={() => { setActiveLink(item.name); closeMenu(); }}
                  >
                    {item.name}
                  </RouterLink>
                )}

                {item.path === "product" && mobileProductDropdown && (
                  <ul className="mt-2 w-full bg-white shadow-md border rounded-lg">
                    {productItems.map((product, i) => (
                      <li key={i} className="px-4 py-2 hover:bg-gray-100">
                        <RouterLink to={product.path} smooth={true} duration={500} onClick={closeMenu}>
                          {product.name}
                        </RouterLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="px-5">
            <RouterLink to="/login">
              <button className="w-full py-2 bg-blue-600 text-white rounded text-center mb-4">
                Login
              </button>
            </RouterLink>
            <button className="w-full py-2 bg-blue-600 text-white rounded text-center mb-4">Register</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
