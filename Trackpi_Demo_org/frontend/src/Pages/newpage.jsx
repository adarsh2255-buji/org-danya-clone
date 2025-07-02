import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import SearchBox from '../components/SearchBox';
import VideoBox from '../components/VideoBox';
import VideoList from '../components/VideoList';

export default function NewPage() {
  const { courseId } = useParams();
  const { user } = useContext(AuthContext);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [course, setCourse] = useState(null);
  const [unlockedIndex, setUnlockedIndex] = useState(0);
  const [userProgress, setUserProgress] = useState([]);

  // Fetch course data
  const fetchCourse = async () => {
    if (!courseId) return;
    
    try {
      const res = await fetch(`http://localhost:5000/courses/${courseId}`);
      const data = await res.json();
      setCourse(data);
    } catch (err) {
      console.error("Error fetching course:", err);
    }
  };

  // Fetch user progress and calculate unlocked videos
  const fetchProgress = async () => {
    if (!user?.userId || !courseId) return;
    
    try {
      const res = await fetch(`http://localhost:5000/progress/${user.userId}`);
      const data = await res.json();
      
      if (data.success) {
        setUserProgress(data.progress);
        
        // Find progress for current course
       const courseProgress = data.progress.find(
  p => (p.courseId?._id || p.courseId)?.toString() === courseId
);

        
        if (courseProgress) {
          // Calculate unlocked index based on completed videos
          const completedVideos = courseProgress.videos.filter(v => v.isCompleted);
          const maxUnlockedIndex = completedVideos.length; // Next video after completed ones
          setUnlockedIndex(maxUnlockedIndex);
        } else {
          // No progress yet, only first video unlocked
          setUnlockedIndex(0);
        }
      }
    } catch (err) {
      console.error("Error fetching progress:", err);
    }
  };

  // Update progress when video is completed
  const updateProgress = async (videoId, watchedDuration) => {
    if (!user?.userId || !courseId || !videoId) return;
    
    try {
      const response = await fetch('http://localhost:5000/progress/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.userId,
          courseId,
          videoId,
          watchedDuration: Math.floor(watchedDuration),
        }),
      });

      const result = await response.json();
      if (result.success) {
        console.log("✅ Progress updated successfully");
        // Refresh progress to update unlocked videos
        await fetchProgress();
      } else {
        console.warn("Failed to update progress:", result.message);
      }
    } catch (err) {
      console.error("❌ Error saving progress:", err);
    }
  };

  // Handle video selection from VideoList
  const handleVideoSelect = (video, index) => {
    // Only allow selection if video is unlocked
    if (index <= unlockedIndex) {
      setActiveIndex(index);
    }
  };

  // Handle next video navigation
  const handleNextVideo = async () => {
    const nextIndex = activeIndex + 1;
    if (course && nextIndex < course.videoDetails.length) {
      setUnlockedIndex((prev) => Math.max(prev, nextIndex));
      setActiveIndex(nextIndex);
      // Do NOT call fetchProgress() here; let optimistic UI handle unlocking
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchCourse();
  }, [courseId]);

  // Fetch progress when course is loaded and user is available
  useEffect(() => {
    if (course && user?.userId) {
      fetchProgress();
    }
  }, [course, user?.userId]);

  // Set initial activeIndex when course loads
  useEffect(() => {
    if (course?.videoDetails?.length > 0) {
      setActiveIndex(0);
    }
  }, [course]);

  if (!course) {
    return <div className="text-white p-10">No course data available.</div>;
  }

  const selectedVideo = course?.videoDetails?.[activeIndex];

  // Debug: log the selected video object
  console.log("Selected video:", selectedVideo);

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
              videoId={selectedVideo._id}
              courseId={course._id}
              duration={selectedVideo.duration}
              activeIndex={activeIndex}
              onNextVideo={handleNextVideo}
              isLastVideo={activeIndex === course.videoDetails.length - 1}
              onProgressUpdate={updateProgress}
            />
          )}
        </div>

        {/* Video List */}
        <VideoList
          course={course}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onVideoSelect={handleVideoSelect}
          unlockedIndex={unlockedIndex}
          className="order-2 md:order-1"
        />
      </div>
    </>
  );
}