import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 right-0 p-0.5 bg-[#ffebeb] lg:px-14 lg:py-1">
      <div className="flex justify-between items-center">
        <img src="logo.png" alt="logo" className="w-32" />
        <div className="text-[#644040] p-3 md:hidden">
          <GiHamburgerMenu className="w-6 h-6" />
        </div>

        <div className="sm: hidden lg:hidden md:flex text-[#644040] p-6">
          <ul className="flex gap-4">
            <li className="hover:underline hover:font-bold">
              <a href="#">Product</a>
            </li>
            <li className="hover:underline hover:font-bold">
              <a href="#">Blog</a>
            </li>
            <li className="hover:underline hover:font-bold">
              <a href="#">Sign In</a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex text-[#644040] p-6">
          <ul className="flex gap-4">
            <li className="hover:underline hover:font-bold">
              <a href="#">Product</a>
            </li>
            <li className="hover:underline hover:font-bold">
              <a href="#">Gallery</a>
            </li>
            <li className="hover:underline hover:font-bold">
              <a href="#">Blog</a>
            </li>
            <li className="hover:underline hover:font-bold">
              <a href="#">About us</a>
            </li>
            <li className="hover:underline hover:font-bold">
              <a href="#">Contact us</a>
            </li>
            <li className="hover:underline hover:font-bold">
              <a href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
