import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const AssessmentBubble = ({ currentPage, setCurrentPage }) => {
  const totalPages = 30;
  const [isMobile, setIsMobile] = useState(false);
  const visibleCount = isMobile ? 5 : 16;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let start = Math.max(1, currentPage - Math.floor(visibleCount / 2));
  let end = start + visibleCount - 1;
  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - visibleCount + 1);
  }

  const visiblePages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="text-white font-inter w-screen h-auto">
      {/* Title */}
      <div className="flex ml-[3vw] mt-[3vh]">
       <div className="w-[10vw] h-[4.58vh] font-roboto font-medium text-[1.95vw] leading-[1] tracking-normal text-center max-[768px]:text-[4vw]">
           Assessment
        </div>

      </div>

      {/* Bubble Row */}
      <div className="absolute top-[20.6vh] ml-6 w-[95.27vw] h-[7.5vh] flex items-center justify-center">
        <div
          className={`flex items-center ${
            isMobile ? 'justify-between w-full px-[2vw]' : 'gap-[1vw]'
          } md:gap-[1vw] flex-nowrap`}
        >
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`flex items-center justify-center rounded-full 
              ${isMobile ? 'w-[12vw] h-[6vh]' : 'w-[2.8vw] h-[5.6vh]'} border border-white/60`}
          >
            <FontAwesomeIcon icon={faChevronLeft} className={`${isMobile ? 'text-[4vw]' : 'text-[1.2vw]'} text-white`} />
          </button>

          {/* Bubbles */}
          <nav className={`flex ${isMobile ? 'gap-[2vw] flex-1 justify-between' : 'gap-x-[2.5vw]'}`}>
            {visiblePages.map((item) => {
              const isActive = item === currentPage;
              return (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item)}
                  className={`rounded-full border font-medium text-center 
                    ${isMobile ? 'w-[12vw] h-[6vh] text-[4vw]' : 'w-[2.8vw] h-[5.9vh] text-[1.6vh]'}
                    ${isActive ? 'border-yellow-500 text-yellow-500' : 'border-white/40 text-white'}`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center rounded-full 
              ${isMobile ? 'w-[12vw] h-[6vh]' : 'w-[2.8vw] h-[5.6vh]'} border border-white/40`}
          >
            <FontAwesomeIcon icon={faChevronRight} className={`${isMobile ? 'text-[4vw]' : 'text-[1.2vw]'} text-white`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentBubble;
