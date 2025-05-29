import React from 'react'
import  userAvatar  from '../assets/userAvatar.png'
import followersAvatar from '../assets/followersAvatar.png'
import arrowDown from '../assets/arrow down.png'
import arrow from '../assets/arrow.png'
import curvedArrow from '../assets/curved arrow.png'
import arrowLeft from '../assets/arrow left.png'
import '../Pages/css/StartCourse.css'
const StartCourse = () => {
  return (
    <div className='w-full min-h-screen  pb-20'>
    <div className=' w-full px-15'>
    <div className="avatar-div  mt-27">
        <p className='font-bold text-2xl leading-[100%] text-white roboto'>Welcome,</p>

         {/* Flex container to hold user-data and followersAvatar side by side */}
      <div className='flex items-center justify-between gap-4'>
        <div className='flex justify-between items-center w-263 p-2.5  mt-3.5
        rounded-lg bg-[linear-gradient(90deg,_#373535_6.17%,_#0A0A0A_72.67%)]'>
            <div className='flex gap-1.25'>
                <img src={userAvatar} alt="user avatar" className='w-10 h-10 bg-black rounded-full'/>
                <div>
                    <p className='text-white font-medium text-xl leading-[100%] roboto'>Edward John</p>
                    <p className='text-white font-medium text-sm roboto'>Freelancer</p>
                </div>
            </div>
        <p className='text-white font-medium text-base roboto'>06 December 2024</p>
        </div>
        {/* folloers avatar image */}
          <img 
          src={followersAvatar} 
          alt="followers avatar" 
          className='h-12 mt-2'/>
          <p className='font-bold text-white roboto'>1000+ Freelancers</p>
      </div>

      <div className='flex justify-between mt-13'>
        <p className='font-bold text-3xl leading-[100%] text-white roboto'>24 Hours Cycle</p>
        <button className='bg-[#FF9D00]  border-[#FF9D00] py-3 px-7.5 rounded-[40px] font-medium text-base cursor-pointer text-white'>Company Brochure</button>
      </div>
    </div>

     

    <div className="relative flex flex-col items-start mt-6">

    {/* Signup Button */}
  <div className="p-[1px] rounded-[30px] bg-gradient-to-r from-[#FF9D00] via-[#FFC100] to-[#FFFFFF] inline-block">
    <div className="bg-gray-900 rounded-[30px]">
      <button className="bg-transparent text-white py-4 px-[50px] rounded-[30px] text-xl font-medium itim cursor-pointer">
       Signup
      </button>
    </div>
  </div>

    <p className='absolute left-[659px] font-normal text-2xl text-white itim'>Course Completion Level</p>

    {/* Down Arrow */}
    <img src={arrowDown} alt="down arrow" className="ml-15" />

    {/* My Course Button */}
    <div className="p-[1px] rounded-[30px] bg-gradient-to-r from-[#FFFFFF] via-[#FFC100] to-[#FF9D00] inline-block">
        <div className="bg-gray-900 rounded-[30px]">
          <button className=" text-white py-4 px-[50px] rounded-[30px] text-xl font-medium itim cursor-pointer">
            My Course
          </button>
        </div>
    </div>
  </div>
  {/* arrow right */}
   <img src={arrow} alt="arrow right" className='absolute left-64 top-[530px]' />

  {/* Course Completion Level */}
  <div className='w-[1028px] h-[123px] absolute left-[370px] top-[450px]'>
    <div className='flex justify-between items-center'>
      <p className='font-normal text-sm text-white ml-6 itim'>Course 1</p>
      <div className='flex flex-col items-center text-white'>
        <p className='font-normal text-sm text-white/50 mr-6 itim'>Course</p>
        <p className='font-normal text-sm text-white/50 mr-6 itim'>Completetion</p>
      </div>

      {/* course completion level */}
      <div className="outer-div">
        
      </div>
      









    </div>
   </div>

   {/* curved arrow */}
   <div className='flex'>
    <img src={curvedArrow} alt="curved arrow" className='ml-auto mr-25'/>
   </div>

   
    {/*Start Onboarding Process button  */}
    
    <div className='flex'>
      <div className="p-[1px] rounded-[30px] bg-gradient-to-r from-[#FFFFFF] via-[#FFC100] to-[#FF9D00] inline-block ml-auto  mr-17">
            <div className="bg-[#0A0A0A] rounded-[30px] ">
              <button className=" text-white/50 py-2.5 px-7.5 rounded-[30px] text-2xl font-normal itim ">
                Start Onboarding <br />
                Process
              </button>
            </div>
        </div>  
    </div>
    <img src={arrowLeft} alt="" className='-mt-13 ml-243' />
    <p className='text-6xl text-white font-extrabold k2d leading[100%] tracking-wide -mt-13 ml-133'>EARN MONEY</p>

    {/* Start course button */}
      <div className='-mt-14'>
          <div className="p-[1px] rounded-[30px] bg-gradient-to-r from-[#FF9D00] via-[#FFC100] to-[#FFFFFF] inline-block w-[268px]">
          <div className="rounded-[30px]" style={{ background: "linear-gradient(103.71deg, #FF9D00 49.37%, #FFC100 49.39%)"}}>
            <button className="bg-transparent text-white py-5 px-7.5 rounded-[30px] text-xl font-medium itim cursor-pointer text-center w-full">
            Start Course
            </button>
          </div>
        </div>
      </div>

      <div className='flex mt-4 mr-28'>
        <div className='ml-auto flex flex-col items-center '>
          <p className='text-white roboto font-normal'>Fill in offer letter details </p>
          <p className='text-white roboto font-normal'>and get Approved </p>          
        </div>
        
      </div>


      
  


  



   
</div>
</div>
  )
}

export default StartCourse