import React from "react";


const CourseDetailsPopUp = ({course, onClose}) => {
  return (
    <>
    <div
     className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex justify-center items-center"
      onClick={onClose}
    >
    <section 
     onClick={(e) => e.stopPropagation()}
    className="course-details-popup flex flex-col mx-auto w-[329px] h-[500px] p-[30px] rounded-[30px] gap-7.5 sm:gap-0 sm:w-[1152px] sm:h-[436px] sm:p-[40px] sm:rounded-[40px]"
    style={{
      background : 'linear-gradient(262.57deg, #3F280D 0.01%, #070B20 100.01%)',
      
    }}>
      <h1 className="text-white text-center font-bold text-base sm:text-3xl roboto ">Course Details</h1>
      <div className="flex flex-col gap-6 mt-3">
        <span className="text-white font-semibold text-sm sm:text-[18px] roboto">Course Name : </span>
        <span className="text-white font-semibold text-sm sm:text-[18px] roboto">Course Sections : </span>
        <span className="text-white font-semibold text-sm sm:text-[18px] roboto">Course Duration : </span>

        <p className="text-white font-semibold text-sm sm:text-[18px] text-[18px] text-justify roboto">A course description provides prospective students with an overview of a course, including its content, objectives, learning methods, and requirements, 
          helping them decide if it aligns with their interests and goals. </p>
      </div>
              <button 
             onClick={onClose}
              className='mx-auto rounded-[40px] sm:mt-5  px-10 py-3  sm:px-12.5 sm:py-3 bg-[#FF9D00] text-white text-[12px] sm:text-base font-medium cursor-pointer'>
                Ok, Got it</button>
    </section>
    </div>

    </>
  )
}

export default CourseDetailsPopUp