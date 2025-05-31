
import React from 'react';
import logo from "../assets/trackpiLogo.png";


const Header = () => {
  return (
    
    <header
    
      className="w-full h-16 flex justify-between  border-b border-[#5C5C5C] py-2 px-6 relative overflow-hidden"
      style={{
        bottom:"1px"
     
      }}
    >
      {/* Logo */}
      <div className="flex items-center  relative">
        <img 
          src={logo}
          alt="Trackpi Logo" 
          className="w-45 h-22 -ml-8"
        />
      </div>

      {/* Logout */}
      <div className="flex items-center gap-[40px] z-10 relative ">
        <span className="text-white text-[20px] w-[50px] h-[19px] font-normal leading-none">Logout</span>
      </div>
    </header>
  );
};

export default Header;
