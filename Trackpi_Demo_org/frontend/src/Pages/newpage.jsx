
import React from 'react';
import thumbnail from '../assets/thumbnailBackground.png';
import SearchBox from '../components/SearchBox';
import VideoBox from '../components/VideoBox';
import VideoList from '../components/VideoList';

const videos = Array(6).fill({
  title: "Introduction Video",
  description: "Introduction Video for the section of course",
  thumbnail,
});

export default function NewPage() {
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#0A0A0A',
    overflow: 'hidden',
    zIndex: -1,
  };

  const ellipseStyle = {
    position: 'absolute',
    top: '-20%',
    left: '-30%',
    width: '180%',
    height: '180%',
    borderRadius: '30%',
    WebkitBackdropFilter: 'blur(80px)',
    backdropFilter: 'blur(80px)',
    background: 'linear-gradient(225.01deg, #FF9D0066 0%, #000E4D4D 55%, #000E4DFF 100%)',
    
  };

  const sharedGradientStyle = {
    background: 'linear-gradient(225.01deg, #FF9D0066 0%, #000E4D4D 55%, #000E4DFF 100%)',
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={ellipseStyle}></div>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen text-white p-4 md:p-10">
        <div className="w-full md:flex-1 mb-6 md:mb-0 md:order-2">
          <SearchBox  />
          <VideoBox />
        </div>
        <VideoList videos={videos} />
      </div>
    </>
  );
}
