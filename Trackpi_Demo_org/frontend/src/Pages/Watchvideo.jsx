import React, { useState, useEffect } from 'react'; 
import { useLocation } from 'react-router-dom'; 
import VideoList from './VideoList'; 
import Searchbox from './Searchbox'; 
import VideoBox from './VideoBox'; 
import './css/watchvideo.css'; // Import the external CSS file

const WatchvideoSection = () => { 
  const location = useLocation(); 
  const course = location.state?.course; 
  const [activeIndex, setActiveIndex] = useState(0); 
  const [selectedVideo, setSelectedVideo] = useState(course?.videoDetails[0] || null); 

  // Debug session 
  useEffect(() => { 
    console.log("Selected Video:", selectedVideo); 
  }, [selectedVideo]); 

  useEffect(() => { 
    if (course?.videoDetails?.length > 0) { 
      setSelectedVideo(course.videoDetails[0]); 
      setActiveIndex(0); 
    } 
  }, [course]); 

  const handleNextVideo = () => { 
    const nextIndex = activeIndex + 1; 
    if (nextIndex < course.videoDetails.length) { 
      setActiveIndex(nextIndex); 
      setSelectedVideo(course.videoDetails[nextIndex]); 
    } 
  }; 

  return ( 
    <div className="watchvideo-container">
      <div className="watchvideo-main">
        {/* Video List - First component */}
        <div className="video-list-container">
          <VideoList 
            course={course} 
            activeIndex={activeIndex} 
            setActiveIndex={setActiveIndex} 
            onVideoSelect={(video) => { 
              setSelectedVideo(video); 
            }} 
          /> 
        </div>

        {/* Search Box - Second component */}
         <div className="searchbox-container">
          <Searchbox /> 
        </div>

        {/* Video Box - Third component */}
         {selectedVideo && ( 
          <div className="videobox-container">
            <VideoBox 
              videoUrl={selectedVideo.videoUrl} 
              title={selectedVideo.title} 
              description={selectedVideo.description} 
              activeIndex={activeIndex} 
              onNextVideo={handleNextVideo}  
              isLastVideo={activeIndex === course.videoDetails.length - 1} 
            /> 
          </div>
        )}  
      </div>
    </div> 
  ); 
}; 

export default WatchvideoSection;