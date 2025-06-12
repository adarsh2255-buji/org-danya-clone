import React from 'react'
import  userAvatar  from '../assets/userAvatar.png'
import followersAvatar from '../assets/followersAvatar.png'
import arrowDown from '../assets/arrow down.png'
import arrow from '../assets/arrow.png'
import curvedArrow from '../assets/curved arrow.png'
import zigzagArrow from '../assets/zigzag arrow.png'
import '../Pages/css/StartCourse.css'
import CourseProgressBar from '../components/CourseProgressBar'


const StartCourse2 = () => {
  return (
    <>
    <div className='w-full min-h-screen StartCourse2 hidden lg:block'>
            {/* user avatar div */}
        <div className='flex '>  
            <div className='avatar-div mt-7.5 px-15 flex flex-col justify-between gap-4'>
                <p className='text-white roboto font-bold text-2xl leading-[100%]'>Welcome,</p>
                <div className='w-[348px] sm:w-[1052px] flex justify-between items-center p-2.5  rounded-[8px] sm:rounded-2xl bg-[linear-gradient(90deg,_#373535_6.17%,_#0A0A0A_72.67%)]'>
                    <div className='flex gap-4 items-center '>
                        <img src={userAvatar} alt="user-avatar" className='w-10 h-10 bg-black rounded-full' />
                        <div className='flex flex-col gap-2'>
                            <p className='text-white font-medium text-[18px] sm:text-xl leading-[100%] roboto'>Edward John</p>
                            <p className='text-white font-medium text-[12px] sm:text-sm roboto'>Freelancer</p>
                        </div>
                    </div>
                    <p className='text-white font-medium text-[12px] sm:text-base roboto'>06 December 2024</p>
                </div>
            </div>

            {/* followers avatar */}
            <div className='flex items-center gap-3.5 mt-15 '>
                <img src={followersAvatar} alt="followers-avatar" className='h-12 mt-2' />
                <p className='font-bold text-white roboto'>1000+ Freelancers</p>
            </div>
        </div>


        <div className='flex justify-between mt-13 px-15'>
            <p className='font-bold text-3xl leading-[100%] text-white roboto'>24 Hours Cycle</p>
            <button className='bg-[#FF9D00]  border-[#FF9D00] py-3 px-7.5 rounded-[40px] font-medium text-base cursor-pointer text-white'>Company Brochure</button>
        </div>

        {/* course completion level div */}
        <div className='px-15'>
            <h2 className='text-white text-2xl itim font-normal absolute left-[647px]'>Course Completion Level</h2>
            <div className='w-[305px]'>
                <div className='ml-5'>
                    {/* signup button */}
                    <div className="p-[1px] rounded-[30px] bg-gradient-to-r from-[#FF9D00] via-[#FFC100] to-[#FFFFFF] inline-block">
                        <div className="bg-gray-900 rounded-[30px]">
                            <button className="bg-transparent text-white py-4 px-[50px] rounded-[30px] text-xl font-medium itim cursor-pointer">
                                Signup
                            </button>
                        </div>
                    </div>
                </div>
                {/* down arrow */}
                <img src={arrowDown} alt="down arrow" className="ml-22" />

                {/* my course button */}
                <div>
                    <div className="p-[1px] rounded-[30px] bg-gradient-to-r from-[#FFFFFF] via-[#FFC100] to-[#FF9D00] inline-block">
                        <div className="bg-gray-900 rounded-[30px]">
                            <button className=" text-white py-4 px-[50px] rounded-[30px] text-xl font-medium itim cursor-pointer">
                            My Course
                            </button>
                        </div>
                    </div>
                </div>
                {/* right arrow */}
                <img src={arrow} alt="arrow right" className='absolute left-63 top-115' />
            </div>


            <div className='absolute top-95 left-100 w-240 flex justify-between items-end '>
                <p className='text-white font-normal itim text-[16px]'>Course 1</p>
                <div className='flex flex-col items-center'>
                    <p className='text-white/50 font- text-[16px] itim'>course</p>
                    <p className='text-white/50 font- text-[16px] itim'>completion</p>
                </div>     
            </div>

            

            {/* progress bar outer div */}
            <div className=''>
                <div className="outer-div"></div>
            </div>
            {/* course progress bar */}
             <CourseProgressBar totalSteps={8} completedSteps={0} />

            {/* earn money div */}
            <div className='h-[221px] flex'>
                <div className='flex flex-col justify-center'>
                    <div className=''>
                        <div className="p-[1px] rounded-[30px] bg-gradient-to-r from-[#FF9D00] via-[#FFC100] to-[#FFFFFF] inline-block w-[268px]">
                            <div className="rounded-[30px]" style={{ background: "linear-gradient(103.71deg, #FF9D00 49.37%, #FFC100 49.39%)"}}>
                                <button className="bg-transparent text-white py-5 px-7.5 rounded-[30px] text-xl font-medium itim cursor-pointer text-center w-full">
                                    Start Course
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <p className='k2d text-white font-extrabold text-6xl tracking-wider uppercase'>Earn Money</p>
                </div>
                {/* curved arrow */}
                <img src={curvedArrow} alt="curved arrow" className='ml-auto mr-25 mt-0.5 h-[85px]'/>
                
            </div>


            {/* Start Onboarding Process button */}
            <div className='absolute left-286 top-147  '>
                <div className="p-[1px] rounded-[30px] bg-gradient-to-r from-[#FFFFFF] via-[#FFC100] to-[#FF9D00] inline-block ml-auto  mr-17">
                    <div className="bg-[#0A0A0A] rounded-[30px] ">
                        <button className=" text-white/50 py-2.5 px-7.5 rounded-[30px] text-2xl font-normal itim cursor-pointer">
                            Start Onboarding <br />
                            Process
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex -mt-8 mr-26'>
                <div className='ml-auto flex flex-col items-center '>
                    <p className='text-white roboto font-normal'>Fill in offer letter details </p>
                    <p className='text-white roboto font-normal'>and get Approved </p>          
                </div>
            </div>
        </div>
    </div>

{/* mobile view */}
<div className='block lg:hidden overflow-x-hidden w-full relative'>
  {/* Wrapper for entire mobile view */}
  <div className='flex flex-col gap-4 p-5'>
    {/* Dashboard */}
    <p className='text-white roboto font-bold text-2xl'>Welcome,</p>
    
    <div className='w-full flex justify-between items-center p-2.5 rounded-[8px] bg-[linear-gradient(90deg,_#373535_6.17%,_#0A0A0A_72.67%)]'>
      <div className='flex gap-4 items-center'>
        <img src={userAvatar} alt="user-avatar" className='w-10 h-10 bg-black rounded-full' />
        <div className='flex flex-col gap-2'>
          <p className='text-white font-medium text-[18px] leading-[100%] roboto'>Edward John</p>
          <p className='text-white font-medium text-[12px] roboto'>Freelancer</p>
        </div>
      </div>
      <p className='text-white font-medium text-[12px] roboto'>06 December 2024</p>
    </div>

    {/* Followers */}
    <div className='flex items-center gap-3.5'>
      <img src={followersAvatar} alt="followers-avatar" className='h-12 mt-2' />
      <p className='font-bold text-white roboto'>1000+ Freelancers</p>
    </div>

    {/* 24 Hour Cycle Section */}
    <div className='flex justify-between items-center mt-3'>
      <p className='font-bold text-[18px] leading-[100%] text-white roboto'>24 Hours Cycle</p>
      <button className='bg-[#FF9D00] border-[#FF9D00] py-3 px-5 rounded-[40px] font-medium text-[12px] cursor-pointer text-white mt-3 roboto'>
        Company Brochure
      </button>
    </div>
  </div>
  
  {/* signup and my course button */}
 <div className=' flex flex-col items-center gap-'>
  {/* Label */}
  <h2 className='itim font-normal text-white text-[18px] text-center mb-4'>
    Course Completion Level
  </h2>

  {/* Signup → Arrow → My Course */}
  <div className='flex items-center justify-center gap-2 relative'>
    <button className="signup-btn px-6 py-3 border-2 border-[#FF9D00] rounded-full text-white font-bold text-lg">
      Signup
    </button>

    {/* Right Arrow */}
    <img src={arrow} alt="arrow right" className='w-[50px] h-auto' />

    <button className="my-course-btn px-6 py-3 border-2 border-[#FF9D00] rounded-full text-white font-bold text-lg">
      My Course
    </button>

    {/* Zigzag arrow going down from My Course button */}
    <img
      src={zigzagArrow}
      alt="zig zag arrow"
      className='absolute top-[63px] left-38 w-[90px] h-auto'
    />
  </div>
</div>

  {/* mobile progress bar */}
  <div>
    <div className='vertical-gradient-box'></div>
  </div>
  
  {/* progressbar component */}
  <CourseProgressBar  totalSteps={8} completedSteps={4} />

   <p className='text-white font-normal itim text-[12px] relative left-20 top-[100px]'>Course 1</p>
   <div className='flex flex-col items-center relative right-28 top-[1000px]'>
        <p className='text-white/50 font- text-[16px] itim'>course</p>
        <p className='text-white/50 font- text-[16px] itim'>completion</p>
        
    </div>
    {/* down arrow mark */}
    <img src={arrowDown} alt="down arrow mark" className='relative top-260 left-49.5 w-[20px] h-auto'/>

    <div className='relative top-[1040px] flex flex-col items-center gap-2 mt-2'>
        <div className='  '>
                <div className="p-[1px] rounded-[30px] bg-gradient-to-r from-[#FFFFFF] via-[#FFC100] to-[#FF9D00] inline-block ">
                    <div className="bg-[#0A0A0A] rounded-[30px] ">
                        <button className=" text-white/50 py-2.5 px-7.5 rounded-[30px] text-[18px] font-normal itim cursor-pointer">
                            Start Onboarding <br />
                            Process
                        </button>
                    </div>
                </div>
            </div>
            <p className='text-white text-center font-normal text-[14px] roboto'>Fill in offer letter details and get <br /> Approved </p>
            {/* down arrow mark */}
            <img src={arrowDown} alt="down arrow mark" className='w-[20px] h-auto' />
            <p className='k2d text-white font-extrabold text-[35px] tracking-wider uppercase'>Earn Money</p>
            <div className='flex flex-col justify-center mb-5'>
                <div className=''>
                    <div className="p-[1px] rounded-[30px] bg-gradient-to-r from-[#FF9D00] via-[#FFC100] to-[#FFFFFF] inline-block w-[268px]">
                        <div className="rounded-[30px]" style={{ background: "linear-gradient(103.71deg, #FF9D00 49.37%, #FFC100 49.39%)"}}>
                            <button className="bg-transparent text-white py-5 px-7.5 rounded-[30px] text-xl font-medium k2d cursor-pointer text-center w-full">
                                Start Course
                            </button>
                        </div>
                    </div>
                </div>
            </div>      
    </div>
</div>




    </>
  )
}

export default StartCourse2