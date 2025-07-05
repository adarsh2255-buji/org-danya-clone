import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import SearchBox from '../components/SearchBox';
import VideoBox from '../components/VideoBox';
import VideoList from '../components/VideoList';

export default function NewPage() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');
  const [watchedIndex, setWatchedIndex] = useState(-1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const videoRefs = useRef([]);
  const { user } = useContext(AuthContext);

  // Fetch course
  useEffect(() => {
    const fetchCourse = async () => {
      if (!user?.token) {
        setError('No token found. Please log in.');
        return;
      }
      try {
        const res = await axios.get(`http://localhost:5000/api/user/get-course-section-by-id/${courseId}`, {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        setCourse(res.data);
      } catch (err) {
        setError('Failed to fetch course');
      }
    };
    fetchCourse();
  }, [courseId, user]);

  // Fetch watched videos
  useEffect(() => {
    if (!course) return;
    const fetchWatched = async () => {
      if (!user?.token || !courseId) return;
      try {
        const res = await axios.get(`http://localhost:5000/api/user/watched-videos/${courseId}`, {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        const data = res.data;
        setWatchedIndex(data.videoIndex);
        if (data.videoIndex >= course.videos.length - 1) {
          setCurrentIndex(course.videos.length - 1);
        } else {
          setCurrentIndex(data.videoIndex + 1);
        }
      } catch (err) {
        // If 404, treat as no progress yet
        if (err.response && err.response.status === 404) {
          setWatchedIndex(-1);
          setCurrentIndex(0);
        }
        // Optionally handle other errors
      }
    };
    fetchWatched();
  }, [courseId, course, user]);

  // Handle video end
  const handleEnded = () => {
    setShowButton(true);
  };

  // Play next video
  const handlePlayNext = async () => {
    const nextIndex = currentIndex + 1;
    setShowButton(false);
    setCurrentIndex(nextIndex);
    setWatchedIndex(currentIndex);
    if (!user?.token) return;
    await axios.post('http://localhost:5000/api/user/update-watched-videos', {
      courseId,
      videoIndex: currentIndex
    }, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    if (videoRefs.current[nextIndex]) {
      videoRefs.current[nextIndex].play();
    }
  };

  // Play again
  const handlePlayAgain = () => {
    setShowButton(false);
    if (videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex].currentTime = 0;
      videoRefs.current[currentIndex].play();
    }
  };

  if (error) return <div>{error}</div>;
  if (!course) return <div>Loading...</div>;

  return (
    <>
      




      <div className='px-5'>
        <section className='container-search mt-5 w-full'>
          <div className='flex justify-end w-full'>
            <div className='relative w-full md:w-[350px]'>
              <i className='fa fa-search text-[#B3B6B6] text-[18px] absolute left-3 top-1/2 transform -translate-y-1/2'></i>
              <input 
                  type="search" 
                  name="search" 
                  id="search" 
                  placeholder='Search...'
                  className='rounded-[15px] w-full px-13.5 py-1.5 text-3 font-medium bg-transparent text-white roboto' />
            </div>
          </div>
        </section>

        {/* Responsive layout: stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col-reverse md:flex-row gap-8 mt-5">
          {/* Video List (Left on desktop, below on mobile) */}
          <div className="w-full md:w-[350px]">
            <div className='mb-2'>
              <div className='flex justify-between'>
                <span className='text-sm font-bold text-white/60 roboto'>Section Name</span>
                <span className='text-sm font-bold text-white/60 roboto'>2/10</span>
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-5'>
              {course.videos.map((video, index) => {
                const isWatched = index <= watchedIndex;
                const isNext = index === watchedIndex + 1;
                const isLocked = index > watchedIndex + 1;
                const isCurrent = index === currentIndex;
                return (
                  <div
                    key={index}
                    className={`flex justify-between cursor-pointer border border-white p-3 rounded-[12px] mb-3 ${isCurrent ? 'bg-yellow-100/10' : ''}`}
                    style={{
                      opacity: isLocked ? 0.4 : 1,
                      pointerEvents: isLocked ? 'none' : 'auto',
                      filter: isLocked ? 'blur(.5px)' : 'none'
                    }}
                    onClick={() => {
                      if (!isLocked) setCurrentIndex(index);
                    }}
                  >
                    <div className='flex items-center justify-between gap-2 w-full'>
                      {/* video image on the left */}
                      <div className='w-[100px] h-[77px] rounded-[7px] overflow-hidden flex-shrink-0'>
                        <img src={video.thumbnail} alt={video.title} className='w-full h-full object-cover' />
                      </div>
                      {/* video title and description on the right */}
                      <div className='flex flex-col p-4 gap-3 items-end text-right flex-1'>
                        <span className='text-[17px] font-bold text-white/60 roboto ' style={{lineHeight: '100%'}}>{video.title}</span>
                        <span className='text-sm font-bold text-white/60 roboto' style={{lineHeight: '100%'}}>{video.description}</span>
                        <span className={`text-xs font-bold ${isWatched ? 'text-green-400' : isNext ? 'text-yellow-400' : 'text-gray-400'}`}>
                          {isWatched ? 'Watched' : isNext ? 'Next' : 'Locked'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Video Player and Info (Right on desktop, top on mobile) */}
          <div
            className="w-full md:max-w-[1080px] md:h-[500px] flex flex-col"
            style={{
              
              borderRadius: '16px',
              boxShadow: '0 4px 32px 0 rgba(0,0,0,0.12)',
              margin: '0 auto',
            }}
          >
            <div className="w-full h-[219px] md:h-[459px] rounded-[7px] flex items-center justify-center relative">
              <video
                ref={el => videoRefs.current[currentIndex] = el}
                src={course.videos[currentIndex].url}
                className={`w-full h-full object-cover rounded-2xl transition-all duration-300 ${showButton ? 'blur-sm' : ''}`}
                controls={true}
                onEnded={handleEnded}
                style={{ background: '#222' }}
              />
              {/* <iframe
  src={`https://player.vimeo.com/video/${course.videos[currentIndex].url.split('/video/')[1]}`}
  width="200%"
  height="100%"
  frameBorder="0"
  allow="autoplay; fullscreen"
  allowFullScreen
  className="rounded-2xl"
/> */}

              {/* Overlay Buttons */}
              {showButton && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center z-20"
                  style={{
                    background: 'rgba(0,0,0,0.5)', // semi-transparent overlay
                    borderRadius: 'inherit',
                  }}
                >
                  <span className="text-white text-[16px] font-medium roboto text-center mb-6">
                    Would you like to continue to the next video<br />
                    or watch this one once more?
                  </span>
                  <div className="flex justify-center gap-4">
                    {currentIndex < course.videos.length - 1 && (
                      <button className="border border-white text-white px-7.5 py-3 rounded-[40px] text-[18px] font-medium roboto w-[208px] h-[50px] cursor-pointer" onClick={handlePlayNext}>Play Next</button>
                    )}
                    <button className="bg-[#FF9D00] text-white px-7.5 py-3 rounded-[40px] text-[18px] font-medium roboto w-[208px] h-[50px] cursor-pointer" onClick={handlePlayAgain}>Play Again</button>
                  </div>
                </div>
              )}
            </div>
            {/* about video */}
            <div className="mt-5 px-4">
              <p className="text-white text-[20px] font-semibold roboto">{course.videos[currentIndex].title}</p>
              <p className="text-white text-[16px] font-semibold roboto">{course.videos[currentIndex].description}</p>
            </div>
          </div>
        </div>



      </div>
    </>
  );
}