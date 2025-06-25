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
    className="course-details-popup flex flex-col mx-auto"
    style={{
      background : 'linear-gradient(262.57deg, #3F280D 0.01%, #070B20 100.01%)',
      width: '1152px',
      height: '436px',
      padding: '40px',
      borderRadius:'40px'
    }}>
      <h1 className="text-white text-center font-bold text-3xl Roboto ">Course Details</h1>
      <div className="flex flex-col gap-6">
        <span className="text-white font-semibold text-[18px] roboto">Course Name : </span>
        <span className="text-white font-semibold text-[18px] roboto">Course Sections : </span>
        <span className="text-white font-semibold text-[18px] roboto">Course Duration : </span>

        <p className="text-white font-semibold text-[18px] roboto">A course description provides prospective students with an overview of a course, including its content, objectives, learning methods, and requirements, 
          helping them decide if it aligns with their interests and goals. </p>
      </div>
              <button 
             onClick={onClose}
              className='mx-auto rounded-[40px] mt-5  px-12.5 py-3 bg-[#FF9D00] text-white text-[12px] sm:text-base font-medium cursor-pointer'>
                Ok, Got it</button>
    </section>
    </div>

    </>
  )
}

export default CourseDetailsPopUp