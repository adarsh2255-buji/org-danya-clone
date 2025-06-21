import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/HeroOfHome';
import sectionImage from '../assets/sectionImage.png';
import sectionImage2 from '../assets/bro.png';
import FreelancerLoginPage from '../components/LoginPage';

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="bg-black text-white px-6 md:px-[78px] py-16 flex flex-col gap-20">
        <div className="text-center max-w-[412px] sm:max-w-[600px] md:max-w-7xl mx-auto px-2">
          <h2 className="text-[28px] sm:text-[36px] md:text-[64px] font-extrabold tracking-wide font-['Libre_Franklin'] leading-tight">
            People’s Interest, Our Interest
          </h2>
          <p className="mt-6 text-[16px] sm:text-[20px] md:text-[26px] font-semibold text-justify mx-auto font-['Libre_Franklin']">
            We are building Kerala’s largest freelancer community, a platform where independent professionals can connect, collaborate, and grow together. Whether you're a beginner or an expert, our community offers resources, training, and networking opportunities to help you thrive.
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto gap-12 px-2">
          <div className="flex-1 w-full">
            <h2 className="text-[18px] sm:text-[16px] md:text-[64px] font-bold text-center md:text-left font-['Libre_Franklin']">
              Become a Freelancer in 24 Hours
            </h2>
            <p className="mt-6 text-[16px] sm:text-[22px] md:text-[28px] font-semibold text-justify font-['Libre_Franklin']">
              You can become a freelancer in just 24 hours.
            </p>
            <p className="mt-4 text-[16px] sm:text-[22px] md:text-[28px] font-semibold text-justify font-['Libre_Franklin']">
              Join us to know more.
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center w-full">
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
      <FreelancerLoginPage />
    </>
  );
}

export default Homepage;