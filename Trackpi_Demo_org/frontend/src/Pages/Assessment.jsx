import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample questions data with 2 questions initially
const questionsData = [
  {
    question: "What tool is used to identify strengths, weaknesses, opportunities, and threats?",
    options: ["SWOT Analysis", "PEST Analysis", "Five Forces", "Benchmarking"],
  },
  {
    question: "Which of these is NOT a programming language?",
    options: ["Python", "HTML", "Java", "C++"],
  },
];

// Duplicate questions until total length is 30 (for demo/testing)
while (questionsData.length < 30) {
  questionsData.push(...questionsData);
}
questionsData.length = 30; // Cut off exactly at 30

const Assessment = ({ currentPage, setCurrentPage }) => {
  // State to keep track of which option user selected
  const [selectedOption, setSelectedOption] = useState('');
  // For navigation to other routes/pages
  const navigate = useNavigate();
  // State to keep track of remaining time in seconds (1 hour = 3600 seconds)
  const [timeLeft, setTimeLeft] = useState(60 * 60);

  // Timer effect - runs on mount, updates every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect user when time is up
          navigate("/AssessmentTimupPopup");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Clean up interval when component unmounts
    return () => clearInterval(timer);
  }, [navigate]);

  // Format seconds into HH : MM : SS string for display
  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs} : ${mins} : ${secs}`;
  };

  // Get current question index (zero-based)
  const currentQuestionIndex = currentPage - 1;
  // Get current question object
  const currentQuestion = questionsData[currentQuestionIndex];

  // When an option is clicked, update selectedOption state
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='text-white font-inter w-screen h-auto max-[768px]:mt-[60px]'>
      
      {/* Header: Question number out of total & timer display */}
      <div className="absolute w-[88.6vw] h-[3.89vh] top-[33.87vh] left-[4vw] right-[4vw] flex justify-between max-[768px]:text-[14px]">
        <div className="w-[18.33vw] h-[3.89vh] text-white font-roboto font-semibold text-[1.25vw] leading-[1] tracking-[0.014vw] max-[768px]:text-[14px] max-[768px]:w-auto">
          Out of {currentPage} / 30 Questions
        </div>
        <div className="w-[16.41vw] h-[3.89vh] text-white font-roboto font-semibold text-[1.25vw] leading-[1] tracking-[0.014vw] max-[768px]:text-[14px] max-[768px]:w-auto">
          Time Remaining: {formatTime(timeLeft)}
        </div>
      </div>

      {/* Question and options container */}
      <div className="absolute w-[88.6vw] h-[42.78vh] top-[45.36vh] left-[4vw] right-[4vw] flex gap-[2.6vw] max-[768px]:flex-col max-[768px]:gap-[16px]">
        <div className="w-full h-[3.89vh] text-white font-roboto font-semibold text-[1.25vw] leading-[1] tracking-[0.014vw] max-[768px]:text-[16px]">
          {/* Display current question number and text */}
          {currentPage}) {currentQuestion.question}

          {/* Options list */}
          <div className="w-full h-auto px-[0.25vw] flex flex-wrap gap-y-[2vh] gap-x-[12vw] mt-[2vh] ml-[0.01vw] max-[768px]:flex-col max-[768px]:gap-[16px] max-[768px]:mt-[16px]">
            {currentQuestion.options.map((option, idx) => {
              // Convert option index to label (A, B, C, D)
              const optionLabel = String.fromCharCode(65 + idx);
              // Check if this option is currently selected
              const isSelected = selectedOption === option;
              return (
                <div
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  className="w-[33.85vw] h-[10.89vh] flex items-center gap-[1.56vw] rounded-[0.5vw] px-[1vw] text-white text-[1.11vw] font-roboto font-medium cursor-pointer max-[768px]:w-full max-[768px]:text-[15px] max-[768px]:h-auto"
                >
                  {/* Radio button style indicator */}
                  <button
                    className={`w-[1.5vw] h-[3.1vh] rounded-full border-[3px] transition-colors duration-200
                      ${isSelected ? 'border-yellow-500 bg-yellow-500' : 'border-white bg-transparent'}
                      max-[768px]:w-[20px] max-[768px]:h-[20px]`}
                    aria-pressed={isSelected}
                  ></button>

                  {/* Option label and text */}
                  <div className="w-[10.64vw] h-[3.61vh] text-white font-roboto font-semibold text-[1.15vw] leading-[100%] tracking-[0px] max-[768px]:text-[15px] max-[768px]:w-auto">
                    <p>{optionLabel})&nbsp;&nbsp;{option}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation buttons: Previous and Next */}
      <div className="w-[27.92vw] h-[6.25vh] absolute top-[83.51vh] left-[36.42vw] flex gap-[1.56vw] max-[768px]:w-[90vw] max-[768px]:left-[5vw] max-[768px]:gap-[12px] max-[768px]:top-[90vh]">
        {/* Previous button disables going before question 1 */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="w-[13.18vw] h-[4.35vh] flex items-center justify-center gap-[0.52vw] rounded-[2.08vw] border border-white px-[1.56vw] py-[1.11vh] text-white font-roboto max-[768px]:w-[40vw] max-[768px]:h-[40px]"
        >
          <span className="text-[0.94vw] font-medium text-center max-[768px]:text-[14px]">
            Previous
          </span>
        </button>

        {/* Next button disables going beyond question 30 */}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 30))}
          style={{ backgroundColor: "#FF9D00" }}
          className="w-[13.18vw] h-[4.35vh] flex items-center justify-center gap-[0.52vw] rounded-[2.08vw] border border-white px-[1.56vw] py-[1.11vh] text-white font-roboto max-[768px]:w-[40vw] max-[768px]:h-[40px]"
        >
          <span className="text-[0.94vw] font-medium text-center max-[768px]:text-[14px]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default Assessment;
