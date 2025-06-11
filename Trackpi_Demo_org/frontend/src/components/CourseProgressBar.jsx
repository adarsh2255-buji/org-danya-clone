import React from 'react'
import '../components/styles/CourseProgressBar.css'

const CourseProgressBar = ({ totalSteps, completedSteps }) => {
  return (
    <>
    <div className='hidden lg:block'>
     <div className="custom-div">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`circle-gradient-border ${index < completedSteps ? "completed" : ""}`}
          ></div>
          {index < totalSteps - 1 && (
            <div
              className={`line ${
                index < completedSteps - 1 ? "completed" : ""
              }`}
            >
              <div className="inner-circle"></div>
              <div className="inner-circle"></div>
              <div className="inner-circle"></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
    </div>

    {/* mobile view */}
    <div className='block lg:hidden'>
      <div className="custom-div-mobile">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`circle-gradient-border ${index < completedSteps ? "completed" : ""}`}
          ></div>
          {index < totalSteps - 1 && (
            <div
              className={`line ${
                index < completedSteps - 1 ? "completed" : ""
              }`}
            >
              <div className="inner-circle"></div>
              <div className="inner-circle"></div>
              <div className="inner-circle"></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
    </div>
    </>
  )
}

export default CourseProgressBar