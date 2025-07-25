
import React from "react";
import { FaPlay } from 'react-icons/fa';
import backgroundImage from "../assets/thumbnailBackground.png";

const VideoList = ({ 
  course, 
  onVideoSelect, 
  activeIndex, 
  setActiveIndex, 
  unlockedIndex,
  className = "" 
}) => {
  if (!course || !course.videoDetails) return null;

  const handleVideoClick = (video, index) => {
    // Only allow clicking if video is unlocked (index <= unlockedIndex)
    if (index <= unlockedIndex) {
      setActiveIndex(index);
      onVideoSelect(video, index);
    }
  };

  return (
    <div className={`w-full md:w-[374px] md:mr-8 space-y-4 ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[28px] font-bold text-center" title={course.courseName}>
          {course.courseName}
        </h2>
        <span className="text-[20px] font-semibold">
          {activeIndex + 1} / {course.videoDetails.length}
        </span>
      </div>

      {/* Video List */}
      <div className="space-y-4">
        {course.videoDetails.map((video, index) => {
          const isLocked = index > unlockedIndex;

          return (
            <div
              key={video._id}
              className={`flex gap-4 border ${
                isLocked
                  ? "border-gray-300 cursor-not-allowed opacity-50"
                  : "border-[#4a3827] cursor-pointer"
              } rounded-[15px] p-3 video-list-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleVideoClick(video, index)}
            >
              <div className="relative w-[150px] h-[90px] overflow-hidden rounded-md">
                <img
                  src={backgroundImage}
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
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;