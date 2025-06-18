import React from 'react';
import { FaPlay } from 'react-icons/fa';

const VideoList = ({ videos, style }) => {
  return (
    <div className="w-full md:w-[374px] md:mr-8 space-y-4 md:order-1">
      <div className="flex justify-between items-center">
        <h2 className="text-[28px] font-bold text-center">Section Name</h2>
        <span className="text-[20px] font-semibold">2 / 10</span>
      </div>

      <div className="space-y-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="flex gap-4 border border-[#4a3827] rounded-[15px] p-3"
            style={style}
          >
            <div className="relative w-[150px] h-[90px] overflow-hidden rounded-md">
              <img
                src={video.thumbnail}
                alt="video thumbnail"
                className="w-full h-full object-top object-cover"
              />
              <FaPlay className="absolute top-[25px] left-[55px] w-[40px] h-[40px] text-white" />
            </div>
            <div className="flex flex-col justify-center text-left w-[180px]">
              <h3 className="text-[20px] font-semibold">{video.title}</h3>
              <p className="text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
