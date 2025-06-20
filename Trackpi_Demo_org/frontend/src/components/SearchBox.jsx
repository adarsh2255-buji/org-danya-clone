import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ style }) => {
  return (
    <div
      className="relative mb-6 w-full max-w-[369px] md:ml-auto"
      style={style}
    >
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#c2b59b]" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 rounded-2xl bg-transparent outline-none text-white placeholder-[#c2b59b] border border-[#4a3827]"
      />
    </div>
  );
};

export default SearchBox;
