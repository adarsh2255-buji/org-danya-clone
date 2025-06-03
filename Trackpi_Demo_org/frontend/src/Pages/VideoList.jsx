
import React from "react";
import backgroundImage from "../assets/thumbnailBackground.png"
const VideoList = ({ course, onVideoSelect, activeIndex, setActiveIndex }) => {

  return (
<div
  className="
    absolute 
    top-19 left-5
    w-[90%] max-w-[374px]
    h-auto
    gap-2 sm:gap-3
    flex flex-col
  "
>


      {/* Header */}
      <div className="flex justify-between items-center w-full h-[4vh] sm:h-[4.5vh] md:h-[3.05vh]">
        <div
          className="
            font-bold 
            text-white 
            font-['Roboto'] 
            text-[4vw] sm:text-[2.2vw] md:text-[1.46vw] 
            pl-1.5
            w-[45vw] sm:w-[30vw] md:w-[9.22vw]
            truncate
          "
          title={course.courseName}
        >
          {course.courseName}
        </div>
        <div
          className="
            font-semibold 
            text-white 
            font-['Roboto'] 
             pr-1
            text-[3vw] sm:text-[1.3vw] md:text-[1.04vw]
            text-center
            w-[15vw] sm:w-[10vw] md:w-[2.71vw]
            h-[3vh] sm:h-[2.5vh] md:h-[2.13vh]
          "
        >
          {activeIndex + 1} / {course.videoDetails.length}
        </div>
      </div>

      {/* Video List Container */}
      <div
        className="
          flex-1
          overflow-y-auto 
          pt-1
          pr-2
          pl-1
          scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300
        "
        style={{ scrollBehavior: "smooth" }}
      >
        {course.videoDetails.map((video, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveIndex(index);
              onVideoSelect(course.videoDetails[index]);
            }}
            className={`
              cursor-pointer 
              w-full 
              flex 
              p-4 
              mb-4 
              rounded-lg 
              border 
              transition-colors duration-300
              ${
                activeIndex === index
                  ? "border-yellow-400"
                  : "border-white"
              }
              h-[18vh] sm:h-[14vh] md:h-[12vh]

            `}
          >
            <div
              className="
                flex-shrink-0 
                rounded-lg 
                bg-cover bg-no-repeat 
                w-[35vw] sm:w-[20vw] md:w-[7.62vw] 
             h-[10vh] sm:h-[12vh] md:h-[10vh]
                 -mt-.5 sm:-mt-1.5 md:-mt-2.5
                 -ml-1 sm:-ml-2 md:-ml-3
              "
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="ml-4 flex flex-col justify-center flex-1 overflow-hidden">
              <h4 className="text-white font-medium text-[4vw] sm:text-[2vw] md:text-[1.04vw] truncate">
                {video.title}
              </h4>
              <p className="text-white text-[3vw] sm:text-[1.5vw] md:text-[0.83vw] truncate">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
