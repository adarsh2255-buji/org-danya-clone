import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import userAvatar from '../assets/userAvatar.png';
import followersAvatar from '../assets/followersAvatar.png'
import arrowDown from '../assets/arrow down.png'
import arrowRight from '../assets/arrow.png'
import arrowLeft from '../assets/arrow left.png'
import ProgressBubble from '../components/ProgressBubble';
import curvedArrow from '../assets/curved arrow.png'
import zigzagArrow from '../assets/zigzag arrow.png'
import '../Pages/css/StartCourse.css'
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


const StartCourse2 = () => {
 const {user } = useContext(AuthContext)
  

  return (
    <>
    <div className="w-full min-h-screen px-4 sm:px-5 md:px-10 lg:px-[60px]">

<section className="pt-5">
  {/* Heading */}
  <h1 className="text-white text-2xl font-semibold mb-4 roboto">Welcome,</h1>

  {/* Avatar Section – Responsive Layout */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-[15px]">

    {/* 🔹 Avatar Box */}
    <div
      className="p-[10px] rounded-[8px] flex items-center justify-between flex-grow"
      style={{
        background: 'linear-gradient(90deg, #373535 6.17%, #0A0A0A 72.67%)',
      }}
    >
      {/* Avatar + Name + Role */}
      <div className="flex items-center gap-4 min-w-0">
        {/* Avatar Image */}
        {
          user && (
            <>
            <img
              src={user.avatar}
              alt="User avatar"
              className="w-[49px] h-[49px] rounded-full object-cover shrink-0"
        />
        {/* Name + Role */}
        <div className="text-white truncate">
          <p className="font-medium roboto text-[20px] sm:text-[24px] leading-none truncate">
            {user.name}
          </p>
          <p className="text-white mt-1 roboto text-[14px] leading-none">Freelancer</p>
        </div>
            </>
          )
        }
        

        
      </div>

      {/* Date */}
      <p className="text-white roboto text-[14px] sm:text-[16px] font-medium text-right whitespace-nowrap ml-2 sm:ml-0">
        {new Date().toLocaleDateString('en-GB', {
    // weekday: 'long',
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })}
      </p>
    </div>

    {/* 🔹 Followers */}
    <div className="flex items-center gap-[10px] mt-3 sm:mt-0">
      <img
        src={followersAvatar}
        alt="Followers"
        className="w-[130px] h-[40px] object-contain"
      />
      <p className="text-white font-medium text-[15px] roboto">1000+ Freelancers</p>
    </div>
  </div>
</section>


  {/* avatar section ends */}

  <div className='flex justify-between items-center mt-[50px] mb-[50px]'>
    <p className='font-bold text-[18px] sm:text-3xl leading-[100%] text-white roboto'>24 Hours Cycle</p>
    <button className='bg-[#FF9D00]  border-[#FF9D00]  py-3 px-5 sm:px-7.5 rounded-[40px] font-medium text-[12px] sm:text-base cursor-pointer text-white roboto'>Company Brochure</button>
  </div>

{/* progress section  */}
  <section className="flex flex-col sm:flex-row items-start pt-[1px] sm:pt-0 ">
  {/* Title */}
  <h1
    className="absolute left-1/2 -translate-x-1/2 text-white text-center itim"
    style={{
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '100%',
      letterSpacing: '0%',
    }}
  >
    <span className="sm:text-[26px]">Course Completion Level</span>
  </h1>

  {/* Button + Arrow Section */}

<div className="flex flex-col items-start gap-2 max-sm:mt-[40px] max-sm:hidden sm:mt-0">
  {/* Signup Button Wrapper */}
  <div
    className="rounded-[30px] mx-auto"
    style={{
      padding: '1px',
      background: 'linear-gradient(90deg, #FF9D00 0%, #FFC100 50%, #FFFFFF 100%)',
    }}
  >
    <button
      className="rounded-[30px] text-white font-medium text-base bg-transparent cursor-pointer itim"
      style={{
        padding: '15px 50px',
        backgroundColor: '#0A0A0A',
        border: 'none',
      }}
    >
      Signup
    </button>
  </div>

  {/* Arrow Down Image */}
  <img src={arrowDown} alt="Arrow Down" className="mx-auto" />

  {/* My Course Button Wrapper */}
  <div
    className="rounded-[30px] mx-auto"
    style={{
      padding: '1px',
      background: 'linear-gradient(90deg, #FF9D00 0%, #FFC100 50%, #FFFFFF 100%)',
    }}
  >
    <button
      className="rounded-[30px] text-white font-medium text-base bg-transparent itim cursor-pointer"
      style={{
        padding: '15px 50px',
        backgroundColor: '#0A0A0A',
        border: 'none',
      }}
    >
      My Course
    </button>
  </div>

{/* arrow right */}
  <img
    src={arrowRight}
    alt="Arrow Right"
    className="relative left-46 bottom-11.5"
  />
</div>

{/* ✅ MOBILE ONLY LAYOUT */}
<div className="hidden max-sm:flex justify-between items-center w-full px-4 mt-[40px]">
  {/* Signup */}
  <div
    className="rounded-[30px]"
    style={{
      padding: '1px',
      background: 'linear-gradient(90deg, #FF9D00 0%, #FFC100 50%, #FFFFFF 100%)',
    }}
  >
    <button
      className="rounded-[30px] text-white font-medium text-sm bg-transparent cursor-pointer itim"
      style={{
        padding: '10px 20px',
        backgroundColor: '#0A0A0A',
        border: 'none',
        width: "123px"
      }}
    >
      Signup
    </button>
  </div>

  {/* Arrow → */}
  <img
    src={arrowRight}
    alt="Arrow Right"
    className="w-[70px] "
  />

  {/* My Course */}
  <div
    className="rounded-[30px]"
    style={{
      padding: '1px',
      background: 'linear-gradient(90deg, #FF9D00 0%, #FFC100 50%, #FFFFFF 100%)',
    }}
  >
    <button
      className="rounded-[30px] text-white font-medium text-sm bg-transparent cursor-pointer itim"
      style={{
        padding: '10px 20px',
        backgroundColor: '#0A0A0A',
        border: 'none',
        width:"140px"
      }}
    >
      My Course
    </button>
  </div>
</div>

{/* ✅ Mobile-only: Zigzag container + Vertically Centered Progress Bar */}
{/* ✅ Mobile-only: Zigzag container + Vertically Centered Progress Bar */}
<div className="relative w-full h-[300px] mt-4 max-sm:block sm:hidden">
  {/* Zigzag Arrow at top right */}
  <img
    src={zigzagArrow}
    alt="Zigzag Arrow"
    className="absolute top-0 right-22"
  />

  {/* Vertically rotated Progress Bar */}
  <div className="absolute top-68 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 origin-center">
    <div className="progress-bar-div w-[250px] max-sm:w-[90vw] relative">
      <div
        className="w-[1028px] h-[70px] rounded-[30px] box-border"
        style={{
          background: 'linear-gradient(90deg, #ffffff, #ff9d00)',
          border: '1px solid #E0E0E0',
          padding: '1px',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
      ></div>

      {/* Absolutely positioned ProgressBubble (on top of bar) */}
      <div className=" w-[1028px]">
        <ProgressBubble totalSections={9} completedSections={4} />
      </div>
    </div>
  </div>
</div>









  {/* Keep your existing Progress section unchanged for now */}
  <div className="flex flex-col ml-[120px] gap-4 mt-[80px] hidden sm:block">
    <div className="w-[1090px] px-5 flex justify-between items-center">
      <p className="text-white font-normal itim text-[16px]">Course 1</p>
      <p className="text-white font-normal itim text-[16px] text-center">
        Course <br /> Completion
      </p>
    </div>

    <div className="progress-bar-div w-[1090px]">
      <div
        className="w-full h-[70px] rounded-[30px] box-border"
        style={{
          background: 'linear-gradient(90deg, #ffffff, #ff9d00)',
          border: '1px solid #E0E0E0',
          padding: '1px',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
      ></div>
      <ProgressBubble totalSections={9} completedSections={4} />
    </div>
  </div>
</section>



{/* earn money section */}
<section className='h-[221px] -mt-6 hidden sm:block'>
  <div className='h-full flex items-center' >
     <Link to='/courseSection'
      className="text-white font-semibold text-2xl border border-transparent  rounded-[30px] px-[30px] py-[20px] w-[268px] h-[77px] cursor-pointer k2d"
      style={{
        background: 'linear-gradient(103.71deg, #FF9D00 49.37%, #FFC100 49.39%)',
        borderWidth: '1px',
      }}
    >
      Start Course
    </Link>

    <div className='flex items-center ml-auto h-full'>
    <p className='k2d text-white font-extrabold text-6xl tracking-wider uppercase mt-5'>Earn Money</p>
    <img src={arrowLeft} alt="arrow head towards left" className='mt-5 mr-2' />
<div
  className="relative group mt-6"
  style={{
    width: 'fit-content',
    borderRadius: '30px',
    padding: '1px',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #FFC100 50%, #FF9D00 100%)',
    overflow: 'visible',
  }}
>
  {/* Button */}
  <button
    className="text-white text-lg font-normal cursor-pointer itim"
    style={{
      width: '240px',
      height: '78px',
      padding: '10px 30px',
      backgroundColor: '#0A0A0A',
      borderRadius: '30px',
      border: 'none',
    }}
  >
    Start Onboarding Process
  </button>

  {/* Tooltip with long content */}
  <div
    className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0A0A0A] text-white text-sm rounded px-4 py-3 z-10 text-left shadow-lg"
    style={{
      top: '90px',
      width: '320px',
      border: '1px solid #FF9D00',
    }}
  >
    Begin with pre-boarding activities like sending a welcome email, gathering paperwork, and setting up the workspace, followed by a structured orientation, training, and integration into the team and company culture.
  </div>
</div>




<img src={curvedArrow} alt="" className='absolute mb-35 ml-[630px]'/>

  </div>
  </div>

  <p className='relative ml-auto -mt-12 text-white roboto font-normal text-[20px]  w-[217px] h-[46px] text-center'>Fill in offer letter details and get Approved </p>

  
</section>


</div>
    </>
  )
}

export default StartCourse2