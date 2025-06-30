import React from 'react';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/HeroOfHome';
import sectionImage from '../assets/sectionImage.png';
import sectionImage2 from '../assets/bro.png';
import FreelancerLoginPage from '../components/LoginPage';
import HomeFoot from '../components/Homefooter';
import Rectangle3d from '../components/Rectangle3d';
import QuestionCard from '../components/QuestionCard';
import Phone from '../components/Phoneenter';



function Homepage() {
  const loginRef = useRef(null);

  const scrollToLogin = () => {
    loginRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <>
    
    {/*scroll bar has issue?  <div className=" no-scrollbar overflow-y-scroll  h-screen"> */}



      <Navbar onLoginClick = {scrollToLogin}/>
      <Hero />
      
     <div className="w-full bg-gradient-to-b from-[#09060E] via-[#2D1D29] to-[#694230] ">
  <div className="text-white font-['Libre_Franklin'] px-6 md:px-[78px] py-16 flex flex-col gap-20"> 

    {/* Row 1 */}
    <div className="w-full max-w-[1296px] mx-auto px-4 text-center font-libre text-white">
      <h2 className="text-[64px] font-extrabold leading-[100%] tracking-[0.05em]">
        People’s Interest, Our Interest
      </h2>

      <p className="mt-6 text-[26px] leading-[1.2] font-medium text-white text-justify">
        We are building Kerala’s largest freelancer community, a platform where independent professionals can connect, collaborate, and grow together. Whether you're a beginner or an expert, our community offers resources, training, and networking opportunities to help you thrive.
      </p>
    </div>

    {/* Row 2 */}
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between max-w-[1296px] mx-auto gap-16 px-4 md:px-8">
      {/* Col 1 - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
        <h2 className="text-[64px] font-bold leading-[100%] tracking-[0em] text-white text-left">
          Become a Freelancer in 24 Hours
        </h2>

        <p className="text-[24px] text-white text-justify leading-[1.2] max-w-[783px]">
          Are you ready to start your freelancing journey today? Gain control over your career? We make it easy for you to start.
        </p>

        <p className="text-[28px] text-white font-medium text-justify leading-[1.2] max-w-[595px]">
          You can become a freelancer in just 24 hours.
        </p>

        <p className="text-[30px] text-white font-medium text-left leading-[1.2]">
          Join us to know more
        </p>
      </div>

      {/* Col 2 - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
        <div
          className="relative w-full max-w-[509px] aspect-[509/441] rounded-[36px] overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${sectionImage})` }}
        >
          <img
            src={sectionImage2}
            alt="Freelancer"
            className="absolute w-[77%] h-[87%] top-[1.4%] left-[11.7%] rounded-[36px] transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>

  </div>
</div>



      


      <div ref={ loginRef }>
        <Rectangle3d/>
        <QuestionCard/>

        <FreelancerLoginPage />
        {/*use this phone entering window if u want: <Phone/> */}
        <HomeFoot/>
       
      </div>
     
       
{/*scroll bar removing div- </div> */}
      
    </>
  );
}

export default Homepage;