
import React, { useState, useRef, useEffect } from "react";
import Player from "@vimeo/player";
import playButtonIcon from "../assets/playbutton-icon.png";
import VideoEndPopUp from "./VideoEndPopUp";
import StartAssessmentPopUp from "./StartAssessmentPopUp";

const VideoBox = ({ videoUrl = "", title = "", description = "" , onNextVideo, isLastVideo = false }) => {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);
const [showEndPopup, setShowEndPopup] = useState(false);


  const [isWider, setIsWider] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

useEffect(() => {
  const setupPlayer = async () => {
    if (videoUrl && containerRef.current) {
      // Clear previous content (optional but safe)
      containerRef.current.innerHTML = "";

      // Extract Vimeo video ID
      const match = videoUrl.match(/vimeo\.com\/(?:video\/)?(\d+)/);
      const videoId = match?.[1];

      if (!videoId) {
        console.error("Invalid Vimeo URL or ID not found");
        return;
      }

      // Create Vimeo player instance
      const player = new Player(containerRef.current, {
        id: videoId,
        responsive: true,
      });

      playerRef.current = player;
   try {
  await player.ready();
  const dur = await player.getDuration();
  setDuration(dur);

  player.on("timeupdate", (data) => {
    setCurrentTime(data.seconds);
  });

  player.on("play", () => setIsPlaying(true));
  player.on("pause", () => setIsPlaying(false));
  player.on("ended", () => {
  setIsPlaying(false);
  setShowEndPopup(true); // Trigger popup (type depends on isLastVideo)
});

  player.on("error", (e) => console.error("Vimeo Player Error:", e));
} catch (err) {
  console.error("Player setup failed:", err);
}

    }

  };

  setupPlayer();

  // Cleanup on unmount
  return () => {
    if (playerRef.current) {
      playerRef.current.unload().catch(console.error);
    }
  };
}, [videoUrl]); // Removed isLastVideo from dependency array

  const handlePlay = () => {
    playerRef.current?.play();
  };

 const handleRestart = () => {
  setShowEndPopup(false); // Hide popup if user restarts
  playerRef.current?.setCurrentTime(0).then(() => playerRef.current?.play());
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${secs}`;
};
//progress bar handler
const handleSeek = (e) => {
  const bar = e.currentTarget;
  const x = e.clientX - bar.getBoundingClientRect().left;
  const percentage = x / bar.offsetWidth;
  const newTime = duration * percentage;
  playerRef.current?.setCurrentTime(newTime);
};

// is wider logics  
const wrapperClass = isWider
  ? "fixed top-0 left-0 w-[100vw] h-[100vh] z-50 bg-black"
  : "absolute top-[19.73vh] left-[26.4vw]  w-[69.15vw] h-[68.04vh]  ";
  const containerClass = isWider
  ? "w-[100vw] h-[100vh]"
  : "w-[70.39vw] h-[72.04vh]";

const playButtonSize = isWider ? "w-[5vw] h-[5vw] top-[50vh] left[90vh]" : "w-[4.86vw] h-[4.86vw]";

const trackerWidth = isWider ? "w-[95vw] top-[85vh]" : "w-[68.24vw]";

const restartBtnClass = isWider
  ? "w-[3vw] h-[5vh] "
  : "w-[2.08vw] h-[3.33vh] left-[0.5vw]";

const restartBtnPosition = isWider
  ? "bottom-[1vh] top-[89vh] "  // slightly lower in wide screen
  : "bottom-[2vh] ";

const fullscreenBtnPosition = isWider
  ? "left-[95vw] top-[91vh]"
  : "right-[2.3vh] bottom-[2vh] ";
 

/////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className={`${wrapperClass} gap-[1.04vw] transition-all duration-300 ease-in-out`}>
      
      <div className="  h-[68.04vh]  rounded-[1.04vw] bg-[#3A3A3A] relative">
        {/* Vimeo Player container */}
        {/* <div
          ref={containerRef}
          className={`${containerClass} rounded-[1.04vw] overflow-hidden transition-all duration-300`}
        /> */}

        {/* Play button overlay */}
        {!isPlaying && (
          <div  className={`absolute w-full h-full flex items-center justify-center top-0 left-0
      ${isWider ? "transform translate-x-[19vw] translate-y-[9vh]" : ""}`}>
            <button
              onClick={handlePlay}
              className=" bg-transparent border-0 cursor-pointer focus:outline-none hover:opacity-80 transition-opacity duration-300"
              aria-label="Play Video"
            >
              <img
                src={playButtonIcon}
                alt="Play Video"
                className={`${playButtonSize} `}
              />
            </button>
          </div>
        )}
      
{/* video tracking section */}
<div className={`absolute left-[0.5vw] ${trackerWidth} bottom-[5vh]`}>
  <div className="flex justify-between text-white text-[1vw]  font-['Urbanist']">
    <span>{formatTime(currentTime)}</span>
    <span>{formatTime(duration)}</span>
  </div>
  <div
    className="relative h-[0.8vh] w-full bg-gray-400 rounded-full cursor-pointer"
    onClick={handleSeek}
  >
    <div
      id="progress-fill"
      className="absolute top-0 left-0 h-full bg-orange-500 rounded-full transition-all duration-300 ease-in-out"
      style={{
        width: `${(currentTime / duration) * 100}%`,
      }}
    ></div>
  </div>
</div>



        {/* Restart Button */}
        <button
          onClick={handleRestart}
        className={`absolute ${restartBtnPosition} text-white rounded-full ${restartBtnClass}`}
        >
          ⟳
        </button>

        {/* Fullscreen Toggle */}
       <div className={`absolute ${fullscreenBtnPosition} flex items-center justify-center w-[0.9vw] h-[2vh] `}>

          <button
            onClick={() => setIsWider(!isWider)}
            className="w-full h-full flex items-center justify-center bg-transparent focus:outline-none"
            aria-label={isWider ? "Lesser" : "Fullscreen"}
          >
            <div className="relative w-full h-full">
              {isWider ? (
                <>
                  <div className="absolute top-0 left-0 w-1 h-1 border-b-2 border-r-2 border-white"></div>
                  <div className="absolute top-0 right-0 w-1 h-1 border-b-2 border-l-2 border-white"></div>
                  <div className="absolute bottom-0 left-0 w-1 h-1 border-t-2 border-r-2 border-white"></div>
                  <div className="absolute bottom-0 right-0 w-1 h-1 border-t-2 border-l-2 border-white"></div>
                </>
              ) : (
                <>
                  <div className="absolute top-0 left-0 w-1 h-1 border-t-2 border-l-2 border-white"></div>
                  <div className="absolute top-0 right-0 w-1 h-1 border-t-2 border-r-2 border-white"></div>
                  <div className="absolute bottom-0 left-0 w-1 h-1 border-b-2 border-l-2 border-white"></div>
                  <div className="absolute bottom-0 right-0 w-1 h-1 border-b-2 border-r-2 border-white"></div>
                </>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="w-[22.29vw] h-[6.57vh] gap-[0.52vw] mt-[1vh] ">
        <div className="text-white font-['Roboto'] font-medium text-[30px] ml-[0.5vw]">
  <h5>{title}</h5>
</div>
<div className="text-white font-['Roboto'] font-normal text-[22px] ml-[0.5vw]">
  <p>{description}</p>
</div>
      </div>
     
{/* pop up showing session - moved outside description div */}
{showEndPopup && (
  <>
    {isLastVideo ? (
      <StartAssessmentPopUp onClose={() => setShowEndPopup(false)} />
    ) : (
      <VideoEndPopUp
        onClose={() => setShowEndPopup(false)}
        onNext={() => {
          setShowEndPopup(false);
          onNextVideo();
        }}
         onReplay={handleRestart}
      />
    )}
  </>
)}

    </div>
  );
};

export default VideoBox;
