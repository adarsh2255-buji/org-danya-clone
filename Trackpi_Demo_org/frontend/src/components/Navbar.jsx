
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo2.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-[80px] px-6 md:px-[60px] py-3 bg-black text-white flex items-center justify-between">
      <div>
         {/* <img src={logo} alt="TrackPi Logo" className="h-10 w-auto object-contain" /> */}
         <img src={logo} alt="TrackPi Logo" className="h-16 w-auto object-contain" />

         

      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-16 text-base font-medium">
        <li className="cursor-pointer hover:text-[#FF9D00] transition-colors">Home</li>
        <li className="cursor-pointer hover:text-[#FF9D00] transition-colors">About</li>
        <li className="cursor-pointer hover:text-[#FF9D00] transition-colors">Connect Us</li>
      </ul>

      {/* Login/Signup Button */}
      <button className="hidden md:block bg-[#FFC100] px-6 py-2 border-2 rounded-full text-sm font-semibold text-black">
        Login / Signup
      </button>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-black text-white flex flex-col items-start gap-5 px-6 py-4 md:hidden z-50">
          <a href="#" className="hover:text-[#FF9D00]">Home</a>
          <a href="#" className="hover:text-[#FF9D00]">About</a>
          <a href="#" className="hover:text-[#FF9D00]">Connect Us</a>
          <button className="bg-[#FFC100] text-black px-6 py-2 rounded-full font-semibold">
            Login / Signup
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
