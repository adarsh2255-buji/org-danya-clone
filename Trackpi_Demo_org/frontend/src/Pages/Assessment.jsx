import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questionsData = [
  {
    question: "What tool is used to identify strengths, weaknesses, opportunities, and threats?",
    options: [
      "SWOT Analysis",
      "PEST Analysis",
      " Five Forces",
      "Benchmarking"
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    options: [
      "Python",
      "HTML",
      "Java",
      "C++"
    ],
  },
  // ... add more questions up to 30 if needed
];

// For demo, repeat questionsData or expand to 30 questions as needed
while (questionsData.length < 30) {
  questionsData.push(...questionsData);
}
questionsData.length = 30; // limit exactly 30

const Assessment = ({ currentPage, setCurrentPage }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/AssessmentTimupPopup"); // Navigate to time-up page
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs} : ${mins} : ${secs}`;
  };

  const currentQuestionIndex = currentPage - 1;
  const currentQuestion = questionsData[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='text-white font-inter w-screen h-auto'>
      <div className="absolute w-[88.6vw] h-[3.89vh] top-[33.87vh] left-[4vw] right-[4vw] flex justify-between ">
        {/* Left-aligned inner content */}
        <div className="w-[18.33vw] h-[3.89vh] text-white font-roboto font-semibold text-[1.25vw] leading-[1] tracking-[0.014vw]">
          Out of {currentPage} / 30 Questions
        </div>
        {/* Right Side Text */}
        <div className="w-[16.41vw] h-[3.89vh] text-white font-roboto font-semibold text-[1.25vw] leading-[1] tracking-[0.014vw]">
          Time Remaining: {formatTime(timeLeft)}
        </div>
      </div>

      {/* Question Form */}
      <div className="absolute w-[88.6vw] h-[42.78vh] top-[45.36vh] left-[4vw] right-[4vw] flex gap-[2.6vw]">
        <div className="w-full h-[3.89vh] text-white font-roboto font-semibold text-[1.25vw] leading-[1] tracking-[0.014vw]">
          {currentPage} {currentQuestion.question}
          {/* Options Container */}
          <div className="w-full h-[28.94vh] px-[0.25vw] flex flex-wrap gap-y-[2vh] gap-x-[4vw] mt-[2vh] ml-[0.01vw]">
            {currentQuestion.options.map((option, idx) => {
              const optionLabel = String.fromCharCode(65 + idx); // A, B, C, D
              const isSelected = selectedOption === option;
              return (
                <div
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  className="w-[33.85vw] h-[10.89vh] flex items-center gap-[1.56vw] rounded-[0.5vw] px-[1vw] text-white text-[1.11vw] font-roboto font-medium cursor-pointer"
                >
                  {/* Select Button (circle) */}
                  <button
                    className={`w-[1.5vw] h-[3.1vh] rounded-[50%] border-[3px] transition-colors duration-200
                      ${isSelected ? 'border-yellow-500 bg-yellow-500' : 'border-white bg-transparent'}`}
                    aria-pressed={isSelected}
                  ></button>

                  {/* Option Text */}
                  <div className="w-[10.64vw] h-[3.61vh] text-white font-roboto font-semibold text-[1.15vw] leading-[100%] tracking-[0px] ">
                    <p>{optionLabel})&nbsp;&nbsp; {option}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-[27.92vw] h-[6.25vh] absolute top-[83.51vh] left-[36.42vw] flex gap-[1.56vw] ">
        {/* previous button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="w-[13.18vw] h-[4.35vh] flex items-center justify-center gap-[0.52vw] rounded-[2.08vw] border border-white px-[1.56vw] py-[1.11vh] text-white font-roboto"
        >
          <span className="w-[3.69vw] h-[2.92vh] mt-[0.8vh] text-white text-[0.94vw] justify-center font-roboto font-medium leading-[100%] text-center">
            Previous
          </span>
        </button>

        {/* next button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 30))}
          style={{ backgroundColor: "#FF9D00" }}
          className="w-[13.18vw] h-[4.35vh] flex items-center justify-center gap-[0.52vw] rounded-[2.08vw] border border-white px-[1.56vw] py-[1.11vh] text-white font-roboto"
        >
          <span className="w-[3.69vw] h-[2.92vh] mt-[0.8vh] text-white text-[0.94vw] justify-center font-roboto font-medium leading-[100%] text-center">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default Assessment;
