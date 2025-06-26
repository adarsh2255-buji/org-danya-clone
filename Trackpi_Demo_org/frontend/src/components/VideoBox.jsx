import React, { useState, useRef, useEffect } from "react";
import Player from "@vimeo/player";
import { FaPlay, FaSyncAlt, FaExpand } from 'react-icons/fa';
import VideoEndPopUp from "../Pages/VideoEndPopUp";
import StartAssessmentPopUp from "../Pages/StartAssessmentPopUp";

const VideoBox = ({ videoUrl = "", title = "", description = "", onNextVideo, isLastVideo = false }) => {
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
        containerRef.current.innerHTML = "";
        const match = videoUrl.match(/vimeo\.com\/(?:video\/)?(\d+)/);
        const videoId = match?.[1];

        if (!videoId) {
          console.error("Invalid Vimeo URL or ID not found");
          return;
        }

        const player = new Player(containerRef.current, {
          id: videoId,
          responsive: true,
        });

        playerRef.current = player;
        try {
          await player.ready();
          const dur = await player.getDuration();
          setDuration(dur);

          player.on("timeupdate", (data) => setCurrentTime(data.seconds));
          player.on("play", () => setIsPlaying(true));
          player.on("pause", () => setIsPlaying(false));
          player.on("ended", () => {
            setIsPlaying(false);
            setShowEndPopup(true);
          });
          player.on("error", (e) => console.error("Vimeo Player Error:", e));
        } catch (err) {
          console.error("Player setup failed:", err);
        }
      }
    };

    setupPlayer();
    return () => {
      if (playerRef.current) {
        playerRef.current.unload().catch(console.error);
      }
    };
  }, [videoUrl]);

  const handlePlay = () => {
    playerRef.current?.play();
  };

  const handleRestart = () => {
    setShowEndPopup(false);
    playerRef.current?.setCurrentTime(0).then(() => playerRef.current?.play());
  };

  const handleSeek = (e) => {
    const bar = e.currentTarget;
    const x = e.clientX - bar.getBoundingClientRect().left;
    const percentage = x / bar.offsetWidth;
    const newTime = duration * percentage;
    playerRef.current?.setCurrentTime(newTime);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <div className="rounded-xl px-0 py-0 flex flex-col gap-3 w-full max-w-[980px] mx-auto">
      {/* Video Container */}
      <div className="w-full aspect-video rounded-lg bg-black relative">
        <div ref={containerRef} className="w-full h-full rounded-lg overflow-hidden" />

        {/* Play overlay */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-transparent text-white text-4xl cursor-pointer"
            aria-label="Play Video"
          >
            <FaPlay className="w-14 h-14 sm:w-10 sm:h-10" />
          </button>
        )}
      </div>

      {/* Time and progress bar */}
      <div className="flex items-center justify-between w-full px-2 text-white">
        <span>{formatTime(currentTime)}</span>
        <div
          className="flex-1 h-1 bg-white mx-2 relative rounded cursor-pointer"
          onClick={handleSeek}
        >
          <div
            className="absolute top-0 left-0 h-1 bg-orange-500 rounded"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between w-full px-4 mt-1 text-white">
        <button onClick={handleRestart} aria-label="Restart Video">
          <FaSyncAlt className="w-[24px] h-[24px]" />
        </button>
        <button onClick={() => setIsWider(!isWider)} aria-label="Toggle Fullscreen">
          <FaExpand className="w-[24px] h-[24px]" />
        </button>
      </div>

      {/* Title & Description */}
      <div className="text-left w-full px-2 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-base">{description}</p>
      </div>

      {/* Popups */}
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
