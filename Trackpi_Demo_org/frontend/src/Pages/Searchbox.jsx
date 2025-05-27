// import React from 'react'
// import searchIcon from "../assets/searchicon.png"
// const Searchbox=()=> {
//   return (
//     <div>
//        <div className="search-box-container absolute top-[12vh] right-[2vw] w-[17.9vw] h-[4.4vh] px-[1vw] py-[0.6vh] gap-[1.5vw] rounded-[0.6vw] border border-[#676464] bg-[#8D8B8B1A] flex items-center">
//       <img 
//           src={searchIcon} 
//           alt="Search" 
//           className="w-[1.25vw] h-[3.24vh]"
//         />
//               {/* Search Box Input */}
//               <input
//                 type="text"
//                 placeholder="Search..."
//                className="w-full h-full bg-transparent border-none outline-none text-white 
//            placeholder:text-[#B3B6B6] placeholder:font-medium 
//            placeholder:text-[0.83vw] placeholder:leading-[100%] 
//            font-['Roboto']"
//               />
//             </div>
//     </div>
//   )
// }

// export default Searchbox
import React from 'react';
import searchIcon from '../assets/searchicon.png';

const Searchbox = () => {
  return (
    <div>
      <div className="
  relative lg:absolute 
 lg:right-10 
   
  w-[80%] sm:w-[70%] md:w-[50%] lg:w-[17.9vw]
  h-[42px] sm:h-[44px] md:h-[48px] lg:h-[4.4vh]
  px-3 sm:px-4 lg:px-[1vw]
  py-1 sm:py-1.5 lg:py-[0.6vh]
  gap-2 sm:gap-3 lg:gap-[1.5vw]
  rounded-md lg:rounded-[0.6vw]
  border border-[#676464]
  bg-[#8D8B8B1A]
  flex items-center
">

        <img 
          src={searchIcon} 
          alt="Search"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[1.25vw] lg:h-[3.24vh]"
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
