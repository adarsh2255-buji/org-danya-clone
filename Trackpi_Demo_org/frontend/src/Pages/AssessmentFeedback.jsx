import React from "react";


function AssessmentFeedback() {
  return (
    <>
      {/* Overlay backdrop */}
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-2">
        {/* Popup container */}
        <div
          className="
            w-[90%]
            sm:w-[1018px]
            h-auto
            sm:h-[576px]
            p-[20px]
            sm:p-[40px]
            rounded-[30px]
            flex
            flex-col
            justify-between
            items-center
            text-white
            [background:linear-gradient(262.57deg,_#3F280D_0.01%,_#070B20_100.01%)]
            shadow-2xl
          "
        >
          {/* Content wrapper */}
          <div className="flex flex-col gap-[20px] sm:gap-[40px] w-full max-w-[700px]">
            {/* Question 1 */}
            <div className="flex flex-col gap-2 text-left">
              <p className="text-base sm:text-lg font-medium">
                1. How would you rate the quality of the course content?
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-gray-400 text-2xl">★</span>
                <span className="text-gray-400 text-2xl">★</span>
                <span className="ml-4 text-base">Good 😊</span>
              </div>
            </div>

            {/* Question 3 */}
            <div className="flex flex-col gap-2 text-left">
              <p className="text-base sm:text-lg font-medium">
                3. Did the platform perform smoothly during the course?
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-gray-400 text-2xl">★</span>
                <span className="text-gray-400 text-2xl">★</span>
                <span className="ml-4 text-base">Good 😊</span>
              </div>
            </div>

            {/* Question 2 */}
            <div className="flex flex-col gap-2 text-left">
              <p className="text-base sm:text-lg font-medium">
                2. How would you rate the instructor’s clarity and teaching style?
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-gray-400 text-2xl">★</span>
                <span className="text-gray-400 text-2xl">★</span>
                <span className="ml-4 text-base">Good 😊</span>
              </div>
            </div>

            {/* Question 4 */}
            <div className="flex flex-col gap-2 text-left">
              <p className="text-base sm:text-lg font-medium">
                4. Can you share your experience
              </p>
              <blockquote
                className="border border-gray-500 bg-gray-700/30 p-4 sm:p-5 rounded text-sm sm:text-base italic"
              >
                “The course was well-structured and easy to follow. I learned a lot
                in a short time and really appreciated the clear explanations!”
              </blockquote>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center w-full mt-4">
            <button
              className="
                px-6
                py-3
                bg-amber-400
                text-black
                font-semibold
                rounded-full
                hover:bg-amber-300
                transition
                w-full
                sm:w-auto
              "
            >
              Unlock Next Course
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssessmentFeedback;
