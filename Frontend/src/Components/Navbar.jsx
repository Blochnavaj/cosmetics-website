import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { MdPersonOutline } from "react-icons/md";
import { IoReorderThree } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const links = [
    { name: "NEW", path: "#home" },
    { name: "MAKE UP", path: "#about" },
    { name: "SKIN CARE", path: "#contact" },
    { name: "Hair Care & Styling", path: "#choose" },
  ];

  return (
    <>
      <nav className="w-full bg-white shadow-md">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center  ">
            <img className="md:w-[150px] md:h-[50px] w-[200px] h-[50px] " src={logo} alt="Logo" />
          </div>

          {/* Menu Icon for Mobile */}
          <div className="md:hidden cursor-pointer text-2xl" onClick={handleToggle}>
            {toggle ? <RxCross2 /> : <IoReorderThree />}
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-md">
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="cursor-pointer hover:underline hover:text-green-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

         
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-gray-50">
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block hover:underline hover:text-green-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
           
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
