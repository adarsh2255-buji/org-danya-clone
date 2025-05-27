import React from 'react'

function AssessmentPassedPopup() {
  return (
    <>
    {/* #070B20 */}
  <div className="fixed top-[30vh] left-[20vw] w-[60vw] h-[40vh] rounded-[30px] p-10 gap-10 text-white flex flex-col items-center justify-center shadow-lg z-50" style={{ background: "linear-gradient(262.57deg, #3F280D 0.01%, #070B20 100.01%)" }}>
      <h2 className="text-2xl font-bold text-center">
        Congratulations 🎉
      </h2>
      <p className="text-center">
        Congrats, you’ve successfully passed the assessment.<br />
        You’re one step closer to your goal!
      </p>
      <p className="text-center">
        When you are ready to start the next course, just unlock the next course.
      </p>
      <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition">
        Unlock Next Course
      </button>
    </div>

    
    
    
    
    
    </>
  )
}

export default AssessmentPassedPopup