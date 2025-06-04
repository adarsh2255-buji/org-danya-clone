import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const AssessmentBubble = ({ currentPage, setCurrentPage }) => {
  const totalPages = 30;
  const visibleCount = 16;

  // Calculate visible range
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
      {/* Assessment Title */}
      <div className="flex ml-[3vw] mt-[3vh]">
        <div className="w-[10vw] h-[4.58vh] font-roboto font-medium text-[1.95vw] leading-[1] tracking-normal text-center">
          Assessment
        </div>
      </div>

      {/* Bubbles Container */}
      <div className="absolute flex items-center justify-center w-[95.27vw] h-[7.5vh] top-[20.4vh] gap-[1vw] ml-5">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="flex items-center justify-center rounded-full w-[2.8vw] h-[5.6vh] border border-white/40"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-white text-[1.2vw]" />
        </button>

        {/* Page Bubbles */}
        <nav className="flex gap-x-[2.5vw] flex-nowrap justify-center">
          {visiblePages.map((item) => {
            const isActive = item === currentPage;
            return (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                aria-label={`Page ${item}`}
                className={`flex items-center justify-center rounded-full w-[2.8vw] h-[5.6vh] text-[1.6vh] font-medium border transition-all duration-200
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
          className="flex items-center justify-center rounded-full w-[2.8vw] h-[5.6vh] border border-white/40"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-white text-[1.2vw]" />
        </button>
      </div>
    </div>
  );
};

export default AssessmentBubble;
