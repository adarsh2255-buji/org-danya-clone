import React from 'react'
import { useNavigate } from 'react-router-dom';





function AssessmentFirstPopup() {
  const navigate = useNavigate();

  return (
    <>
        

    <div class="fixed top-1/2 left-1/2 w-[60vw] h-[65vh] -translate-x-1/2 -translate-y-1/2 rounded-[30px] p-[40px] flex flex-col gap-[40px] bg-[linear-gradient(262.57deg,_#3F280D_0.01%,_#070B20_100.01%)] shadow-lg z-50">
        {/* <!-- Popup Content --> */}
            
            {/* heading */}
                <div class="fixed top-1/2 left-1/2 w-[60vw] h-[65vh] -translate-x-1/2 -translate-y-1/2 rounded-[30px] p-[40px] bg-gradient-to-r from-[#070B20] to-[#3F280D] text-white z-50">
                    {/* <!-- Top-Centered Headings --> */}
                    <div class="w-full flex flex-col items-center gap-[10px] text-center mb-10">
                        <h2 class="text-2xl font-bold">This assessment has a time limit</h2>
                        <p class="text-base">Your answers will automatically be submitted when the time limit is reached</p>
                    </div>

                 {/* <!-- Other popup content can go here --> */}
                    {/* second div */}
               
                <div className="w-full flex flex-col items-center justify-center gap-[3vh]">
      {/* Course Name */}
      <h2 className="text-white text-lg font-semibold text-center">Course Name</h2>

      {/* Info Boxes */}
   <div className="flex justify-between w-full gap-[3vw]">
  {/* Questions */}
  <div className="flex flex-col items-center justify-center gap-[20px] w-[280px] h-[118px] border-[0.5px] border-[#303030] rounded-[10px] px-[40px] py-[15px] text-white">
    <p className="font-medium">Number of Questions</p>
    <p className="text-3xl font-bold">30</p>
  </div>

  {/* Time Allowed */}
  <div className="flex flex-col items-center justify-center gap-[20px] w-[280px] h-[118px] border-[0.5px] border-[#303030] rounded-[10px] px-[40px] py-[15px] text-white">
    <p className="font-medium">Time Allowed</p>
    <p className="text-3xl font-bold">60 <span className="text-base font-medium">Minutes</span></p>
  </div>

  {/* Attempts Left */}
  <div className="flex flex-col items-center justify-center gap-[20px] w-[280px] h-[118px] border-[0.5px] border-[#303030] rounded-[10px] px-[40px] py-[15px] text-white">
    <p className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">Number of attempts left</p>
    <p className="text-3xl font-bold">05</p>
  </div>
</div>


      {/* Instruction */}
      <p className="text-white text-center text-sm mt-2">
        When you are ready to begin the assessment, just click the <strong>“Ok, Start Assessment”</strong> button below
      </p>
    </div>

      {/*  */}
        {/* Centered Button */}
<div className="flex justify-center mt-8">
  
  <button onClick={() => navigate('/MainAssessment')}
    className="text-white font-semibold text-sm rounded-[40px] border border-black w-[217px] h-[43px] px-[30px] py-[12px] bg-[#FF9D00] hover:opacity-90 transition"
  >
    Ok, Start Assessment
  </button>
</div>



                </div>


    </div>


    </>
  )
}

export default AssessmentFirstPopup