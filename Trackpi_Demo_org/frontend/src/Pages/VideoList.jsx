// const VideoList = ({ course, onVideoSelect, activeIndex, setActiveIndex }) => {
//   return (
//     <div className="w-[29.5vw] h-[87vh] absolute top-[12.18vh] left-[2.8vw] gap-[2vw]">
//       <div className="w-[28vw] h-[3.05vh] flex items-center justify-between ">
//         <div className="w-[9.22vw] h-[3.06vh]  font-bold text-[1.46vw] text-center text-white font-['Roboto']">
//           {course.courseName}
//         </div>
//         <div className="w-[2.71vw] h-[2.13vh] font-semibold text-[1.04vw] text-center text-white font-['Roboto'] pt-[0.5vh] pl-[0.7vh]">
//           {activeIndex + 1} / {course.videoDetails.length}
//         </div>
//       </div>

//       <div className="w-[29.5vw] h-[82.83vh] gap-[0.48vw] flex flex-col">
//         <div className="h-[82.83vh] flex flex-col p-4 overflow-y-auto">
//           {course.videoDetails.map((video, index) => (
//             <div
//               key={index}
//               onClick={() => {
//                 setActiveIndex(index);
//                onVideoSelect(course.videoDetails[index]);
//               }}
//               className={`cursor-pointer w-full h-[13.11vh] border rounded-[15px] flex p-[0.78vw] mb-3 ${
//                 activeIndex === index ? "border-yellow-400" : "border-white"
//               }`}
//             >
//               <div className="w-[7.62vw] h-[10.53vh] bg-[url('./assets/thumbnailBackground.png')] bg-cover bg-no-repeat rounded-[8px]" />
//               <div className="flex flex-col justify-center ml-3">
//                 <h4 className="text-white text-[1.04vw] font-medium">{video.title}</h4>
//                 <p className="text-white text-[0.83vw]">{video.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoList;

import React from "react";
import backgroundImage from "../assets/thumbnailBackground.png"
const VideoList = ({ course, onVideoSelect, activeIndex, setActiveIndex }) => {

  return (
<div
  className="
    absolute 
    top-14 left-5
    w-[90%] max-w-[374px]
    h-[85%] max-h-[858px]
    gap-4 sm:gap-6
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
             pr-2
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
