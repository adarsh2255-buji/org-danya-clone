import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SearchBox from '../components/SearchBox';
import VideoBox from '../components/VideoBox';
import VideoList from '../components/VideoList';

export default function NewPage() {
  const { courseId } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
const [course, setCourse] = useState(null);


useEffect(() => {
  const fetchCourse = async () => {
    try {
      const res = await fetch(`http://localhost:5000/courses/${courseId}`);
      const data = await res.json();
      setCourse(data);
    } catch (err) {
      console.error("Error fetching course:", err);
    }
  };

  if (courseId) fetchCourse();
}, [courseId]);
useEffect(() => {
  if (course?.videoDetails?.length > 0) {
    setSelectedVideo(course.videoDetails[0]);
    setActiveIndex(0);
  }
}, [course]);
const handleNextVideo = () => {
  const nextIndex = activeIndex + 1;
  if (course && nextIndex < course.videoDetails.length) {
    setActiveIndex(nextIndex);
    setSelectedVideo(course.videoDetails[nextIndex]);
  }
};


  if (!course) {
    return <div className="text-white p-10">No course data available.</div>;
  }

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
        {/* Video + Search */}
        <div className="w-full md:w-[980px] flex flex-col items-end gap-6 ml-auto order-1 md:order-2">
          <SearchBox />
          {selectedVideo && (
            <VideoBox
              videoUrl={selectedVideo.videoUrl}
              title={selectedVideo.title}
              description={selectedVideo.description}
              activeIndex={activeIndex}
              onNextVideo={handleNextVideo}
              isLastVideo={activeIndex === course.videoDetails.length - 1}
            />
          )}
        </div>

        {/* Video List */}
        <VideoList
  course={course}
  activeIndex={activeIndex}
  setActiveIndex={setActiveIndex}
  onVideoSelect={(video) => setSelectedVideo(video)}
  className="order-2 md:order-1"
/>

      </div>
    </>
  );
}
