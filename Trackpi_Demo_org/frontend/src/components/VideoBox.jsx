import React from 'react';
import { FaPlay, FaSyncAlt, FaExpand } from 'react-icons/fa';

const VideoBox = ({ style }) => {
  return (
    <div
      className="rounded-xl px-0 py-0 flex flex-col gap-3 w-full max-w-[980px] mx-auto"
      style={style}
    >
      <div className="w-full aspect-video rounded-lg bg-black relative flex items-center justify-center">
        <FaPlay className="text-white w-[50px] h-[50px]" />
      </div>

      <div className="flex items-center justify-between w-full px-2">
        <span>00:40</span>
        <div className="flex-1 h-1 bg-white mx-2 relative">
          <div className="absolute top-0 left-0 h-1 bg-orange-500 w-[20%]" />
        </div>
        <span>02:00</span>
      </div>

      <div className="flex items-center justify-between w-full px-4 mt-1">
        <FaSyncAlt className="w-[24px] h-[24px] text-white" />
        <FaExpand className="w-[24px] h-[24px] text-white" />
      </div>

      <div className="text-left w-full px-2">
        <h3 className="text-[20px] font-normal">Introduction Video</h3>
        <p className="text-[22px] font-normal">Introduction Video for the section of course</p>
      </div>
    </div>
  );
};

export default VideoBox;