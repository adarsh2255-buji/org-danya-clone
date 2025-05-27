import React from 'react'

function AssesmentTimeUpPopup() {
  return (
    <>
      <div className="fixed top-[250px] left-[180px]  w-[1152px] h-[320px] rounded-[30px] p-[40px] flex flex-col gap-[40px] text-white"
      style={{ background: "linear-gradient(262.57deg, #3F280D 0.01%, #070B20 100.01%)" }}>
      
      <div className="text-center">
        <div className="text-3xl font-bold flex items-center justify-center gap-2">
          <span>⏰</span>
          <span>Time’s Up!</span>
        </div>
        <p className="mt-2 text-lg">Your assessment time has ended.<br />Your answers have been automatically submitted.</p>
      </div>

      <p className="text-center text-sm">You’ll need to take the next attempt or rewatch the video sections before trying again.</p>

      <div className="flex justify-center gap-4">
<button className="text-white font-bold px-10 py-4 border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-black transition duration-300">
  Go to Course
</button>

        <button className="px-6 py-2 rounded-full bg-[#FFA726] text-white font-semibold">Retake Assessment</button>
      </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default AssesmentTimeUpPopup