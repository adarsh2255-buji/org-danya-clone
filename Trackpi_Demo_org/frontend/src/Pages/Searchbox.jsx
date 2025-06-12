import React from 'react';
import searchIcon from '../assets/searchicon.png';

const Searchbox = () => {
  return (
    <div>
      <div
        className="
          relative lg:absolute 
          lg:right-13 

          w-[330px] 
          h-[39px] 
          gap-[13.3px] 
          rounded-[13.3px] 
          border border-[#676464] 
          px-[13.3px] 
          py-[5.32px] 
          bg-[#8D8B8B1A] 
          flex items-center 

          sm:w-[70%] md:w-[50%] 
          lg:w-[17.9vw] lg:h-[4.4vh] lg:px-[1vw] 
          lg:py-[0.6vh] lg:gap-[1.5vw] 
          lg:rounded-[0.6vw]
        "
      >
        <img 
          src={searchIcon} 
          alt="Search"
          className="
            w-4 h-4 
            sm:w-5 sm:h-5 
            md:w-6 md:h-6 
            lg:w-[1.25vw] lg:h-[3.24vh]
          "
        />

        <input
          type="text"
          placeholder="Search..."
          className="
            w-full h-full bg-transparent border-none outline-none text-white
            placeholder:text-[#B3B6B6] placeholder:font-medium
            text-sm sm:text-base md:text-base lg:text-[0.83vw]
            font-['Roboto']
          "
        />
      </div>
    </div>
  );
};

export default Searchbox;
