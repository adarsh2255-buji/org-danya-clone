import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ style }) => {
  return (
    <div
      className="flex items-center mb-6 text-white rounded-[15px] px-4 py-2 w-full max-w-[369px] md:ml-auto border border-[#4a3827]"
      style={style}
    >
      <FaSearch className="mr-2 text-[#c2b59b]" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full outline-none bg-transparent text-[#c2b59b] placeholder-[#c2b59b]"
      />
    </div>
  );
};

export default SearchBox;
