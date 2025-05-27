import React from 'react'

function AssessmentFailedPopup() {
  return (
    <>
    
    <div className="fixed top-[20vh] left-[20vw] w-[60vw] h-[60vh] rounded-[30px] p-10  text-white flex flex-col items-center justify-center gap-10 z-50 shadow-lg"style={{ background: "linear-gradient(262.57deg, #3F280D 0.01%, #070B20 100.01%)" }}>
      <div className="text-center">
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          <span>⚠</span> Assessment Not Passed
        </h2>
        <p className="mt-2">
          Thanks for taking the assessment.<br />
          You didn’t pass this time, but you’re getting closer!
        </p>
      </div>

      <div className="text-center">
        <p className="mb-4 font-semibold">Questions you got wrong:</p>
        <div className="flex justify-center gap-6">
          {[2, 3, 11, 17, 22].map((q) => (
            <div
              key={q}
              className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-lg font-semibold"
            >
              {q}
            </div>
          ))}
        </div>
      </div>

      <p className="text-center max-w-xl">
        Take a moment to review the course content, then try again when you're ready.
      </p>

      <div className="flex gap-6">
        <button className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
          Go to Course
        </button>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-300 transition font-semibold">
          Retake Assessment
        </button>
      </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default AssessmentFailedPopup