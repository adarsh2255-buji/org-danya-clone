import React from 'react'
import  userAvatar  from '../assets/userAvatar.png'
import followersAvatar from '../assets/followersAvatar.png'
import arrowDown from '../assets/arrow down.png'
import arrow from '../assets/arrow.png'
import curvedArrow from '../assets/curved arrow.png'
import arrowLeft from '../assets/arrow left.png'
import '../Pages/css/StartCourse.css'

const StartCourse2 = () => {
  return (
    <>
    <div className='w-full min-h-screen'>
            {/* user avatar div */}
        <div className='flex'>  
            <div className='avatar-div mt-7.5 px-15 flex flex-col justify-between gap-4'>
                <p className='text-white roboto font-bold text-2xl leading-[100%]'>Welcome,</p>
                <div className='w-[1200px] flex justify-between items-center p-2.5 rounded-xl bg-[linear-gradient(90deg,_#373535_6.17%,_#0A0A0A_72.67%)]'>
                    <div className='flex gap-4 items-center '>
                        <img src={userAvatar} alt="user-avatar" className='w-10 h-10 bg-black rounded-full' />
                        <div className='flex flex-col gap-2'>
                            <p className='text-white font-medium text-xl leading-[100%] roboto'>Edward John</p>
                            <p className='text-white font-medium text-sm roboto'>Freelancer</p>
                        </div>
                    </div>
                    <p className='text-white font-medium text-base roboto'>06 December 2024</p>
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
                <img src={arrow} alt="arrow right" className='absolute left-63 top-109' />
            </div>


            <div className='absolute top-90 right-20 w-300 flex justify-between items-end '>
                <p className='text-white font-normal itim text-[16px]'>Course 1</p>
                <div className='flex flex-col items-center'>
                    <p className='text-white/50 font- text-[16px] itim'>course</p>
                    <p className='text-white/50 font- text-[16px] itim'>completion</p>
                </div>     
            </div>

            

            {/* progress bar */}
            <div className=''>
                <div className="outer-div"></div>
            </div>

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
                {/* Start Onboarding Process button */}
                
                
            </div>



            <div className='absolute left-326 top-140  '>
                <div className="p-[1px] rounded-[30px] bg-gradient-to-r from-[#FFFFFF] via-[#FFC100] to-[#FF9D00] inline-block ml-auto  mr-17">
                    <div className="bg-[#0A0A0A] rounded-[30px] ">
                        <button className=" text-white/50 py-2.5 px-7.5 rounded-[30px] text-2xl font-normal itim cursor-pointer">
                            Start Onboarding <br />
                            Process
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex -mt-8 mr-28'>
                <div className='ml-auto flex flex-col items-center '>
                    <p className='text-white roboto font-normal'>Fill in offer letter details </p>
                    <p className='text-white roboto font-normal'>and get Approved </p>          
                </div>
            </div>
        </div>




    </div>

   
    </>
  )
}

export default StartCourse2