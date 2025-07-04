import React, { useEffect, useRef, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import squreLock from '../assets/square-lock-02.png'
import CourseDetailsPopUp from './CourseDetailsPopUp';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';



const CourseSection = () => {
  const scrollRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(null)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  const [courseList, setCourseList] = useState([])
  const [userProgress, setUserProgress] = useState([]);


  const { user } = useContext(AuthContext);

 

  const navigate = useNavigate()

      // adarsh
      useEffect(() => {
        const fetchCourses = async () => {
          try {
          
            const res = await axios.get('http://localhost:5000/api/user/get-all-course-sections', {
              headers: {
                Authorization: `Bearer ${user?.token}` 
              }
            });
            console.log("Response data:", res.data.courseSections);
            setCourseList(res.data.courseSections); 
            
          } catch (error) {
            console.error("Failed to fetch course sections:", error.response?.data || error.message);
          }
        };
      
        
        if (user?.token) {
          fetchCourses();
        }
      }, [user]);

 

  // scroll left and right
  const scroll = (direction) => {
    if(scrollRef.current){
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth"})
    }
  };

  //swipe left and right
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if(!touchStartX) return;
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX;

    if(Math.abs(diff) > 50) {
      if(diff > 0) {
        scroll('right'); //swipe left
      }else {
        scroll('left'); //swipe right
      }
    }
    setTouchStartX(null)




  }

  return (
    <>
    <section className='container-search px-5 '>
        <div className='flex justify-between mt-5'>
        <h1 className='text-white font-bold text-2xl roboto'>Courses</h1>
        <div className='relative  '>
            <i className='fa fa-search text-[#B3B6B6] text-[18px] absolute left-3 top-1/2 transform -translate-y-1/2'></i>
            <input 
                type="search" 
                name="search" 
                id="search" 
                placeholder='Search...'
                className='rounded-[15px] w-50 px-13.5 py-1.5 text-3 font-medium bg-transparent text-white roboto' />
        </div>
    </div>
    </section>

    {/* course list section */}
        <div className="relative mt-8 px-5">
      {/* Left Button */}
      <button
        onClick={() => scroll('left')}
        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-70 text-white p-2 rounded-full"
      >
        <ChevronLeft size={18} />
      </button>
    
    <section 
            ref={scrollRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="courseList  h-[122px] mt-8 flex gap-5 overflow-x-auto no-scrollbar scroll-smooth"
            >
            {courseList.map((course, index) => {
              // Find progress for this course
              const courseProgress = userProgress.find(
                p => (p.courseId?._id || p.courseId) === course._id
              );
              const isCompleted = courseProgress?.isCompleted;

              // The first course is always unlocked, others are unlocked if the previous is completed
              const isFirst = index === 0;
              const prevCourse = courseList[index - 1];
              const prevProgress = userProgress.find(
                p => (p.courseId?._id || p.courseId) === prevCourse?._id
              );
              const prevCompleted = prevProgress?.isCompleted;
              const isLocked = !isFirst && !prevCompleted;

              return(
                <div
                  key={course._id}
                  onClick={() => {
                    if(!isLocked) setSelectedCourse(course);
                  }}
                  className="relative rounded-[10px] border border-[#FF9D00] h-full  min-w-[250px] cursor-pointer"
                  style={{
                          background: 'linear-gradient(180deg, rgba(10, 10, 10, 0) 60%, rgba(10,10,10, 0.94) 85%)',
                          }}
                          >
                      {/* Lock Icon */}
                      {isLocked && (
                        <img
                          src={squreLock}
                          alt="lock"
                          className="absolute inset-0 m-auto w-6 h-6 z-10"
                              />
                      )}
                      {/* Completed checkmark (optional) */}
                      {isCompleted && !isLocked && (
                        <span className="absolute top-2 right-2 text-green-400 font-bold text-lg z-10">✓</span>
                      )}
                      {/* Content */}
                      <div className="flex justify-between items-end h-full px-3 pb-1 z-20">
                          <p className="text-white text-base font-semibold roboto" >{course.courseTitle}</p>
                          <p className="text-white roboto text-[10px] font-medium roboto">{course.courseDuration} hours</p>
                      </div>
              </div>
              )
            })}
          </section>
          {/* Right Button */}
            <button
              onClick={() => scroll('right')}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-70 text-white p-2 rounded-full"
            >
              <ChevronRight size={18} />
            </button>
            {/* course detail popup */}
            {selectedCourse && (
              <CourseDetailsPopUp 
              course={selectedCourse}
              onClose={() => setSelectedCourse(null)}/>
            )}
          </div>

    {/* course list section ends here */}

    <div className='my-5 px-5 flex justify-between gap-5 lg:justify-end '>
        <button className='rounded-[40px] px-12.5 py-3 bg-[#FF9D00] text-white text-[12px] sm:text-base font-medium cursor-pointer roboto'>Courses</button>
        <button className='rounded-[40px] px-12.5 py-3 border border-[#FF9D00]  text-[#FF9D00] font-medium bg-transparent sm:text-base cursor-pointer roboto'>Assessment</button>
    </div>

    {/* course progress section */}
    <section className="course-progress my-5 px-5">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4 py-6">
          {courseList.map((course, i) => (
            <div
            onClick={() => navigate(`/video/${course._id}`)}
             key={course._id}
              className="relative w-full h-[90px] bg-black rounded-[50px] sm:h-[150px] sm:mb-5 sm:w-[260px] sm:rounded-[100px] overflow-hidden text-white font-roboto flex items-center justify-center cursor-pointer"
            >
              {/* Animated Wave SVG */}
              <svg
                className="absolute bottom-0 left-0 w-full"
                height="100%"
                style={{ height: '100%' }} // you can change this to control progress
                viewBox="0 0 260 90"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id={`waveGradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#17005E" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#FF9D00" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
                <path fill={`url(#waveGradient-${i})`}>
                  <animate
                    attributeName="d"
                    dur="4s"
                    repeatCount="indefinite"
                    values="
                      M0,50 C60,80 200,20 260,50 L260,90 L0,90 Z;
                      M0,50 C50,70 210,40 260,50 L260,90 L0,90 Z;
                      M0,50 C70,30 190,70 260,50 L260,90 L0,90 Z;
                      M0,50 C60,80 200,20 260,50 L260,90 L0,90 Z
                    "
                  />
                </path>
              </svg>

              {/* Large background number */}
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[60px] text-white/20 font-bold z-0 itim">
                {i + 1}
              </span>

              {/* Center content */}
              <div className="relative z-10 text-center flex flex-col  justify-center">
                <p className="text-sm font-semibold sm:text-[20px] montserrat">{course.courseTitle}</p>
                <div className="flex justify-center items-center gap-3 text-[10px] font-normal opacity-70">
                  <span className='sm:text-sm sm:font-medium montserrat'>{courseList.length} Videos</span>
                  <span className="text-white sm:text-sm sm:font-medium ">|</span>
                  <span className='sm:text-sm sm:font-medium montserrat'>30 Min</span>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
    </>
  )
}

export default CourseSection