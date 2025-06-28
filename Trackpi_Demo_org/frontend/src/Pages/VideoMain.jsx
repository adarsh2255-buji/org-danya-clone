import React, { useState } from 'react';
import thumbnail from '../assets/thumbnailBackground.png';
import SearchBox from '../components/SearchBox';
import VideoBox from '../components/VideoBox';
import VideoList from '../components/VideoList';

const videos = Array(6).fill({
  title: 'Introduction Video',
  description: 'Introduction Video for the section of course',
  thumbnail,
  duration: '02:00',
  currentTime: '00:40',
});

export default function NewPage() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <>
      {/* Background Effects */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#0A0A0A',
          overflow: 'hidden',
          zIndex: -1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-30%',
            width: '180%',
            height: '180%',
            borderRadius: '30%',
            WebkitBackdropFilter: 'blur(80px)',
            backdropFilter: 'blur(80px)',
            background:
              'linear-gradient(225.01deg, #FF9D0066 0%, #000E4D4D 55%, #000E4DFF 100%)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row min-h-screen text-white p-4 md:p-10">
        {/* VideoBox: First on mobile, second on desktop */}
        <div className="w-full md:w-[980px] flex flex-col items-end gap-6 ml-auto order-1 md:order-2">
          <SearchBox />
          <VideoBox video={selectedVideo} />
        </div>

        {/* VideoList: Second on mobile, first on desktop */}
        <VideoList
          videos={videos}
          onVideoSelect={setSelectedVideo}
          className="order-2 md:order-1"
        />
      </div>
    </>
  );
}
