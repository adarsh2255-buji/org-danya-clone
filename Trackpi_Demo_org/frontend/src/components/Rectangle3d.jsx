import React from 'react';
import loopCircle from '../assets/circle3d.png';
import stone from '../assets/stone.png';
import cubeset from '../assets/cubeset.png';
import smallcube from '../assets/smallcube.png';
import leftcube from '../assets/leftcube.png';
import rightstone from '../assets/rightstone.png';
import bottombox from '../assets/bottombox.png';

const Rectangle3d = () => {
  return (
   <div className="w-full bg-gradient-to-b from-[#3c1f15] to-black text-white py-10 px-4 flex justify-center  ]">
  <div className="w-full max-w-[1568px]  p-6 sm:p-10 flex flex-row gap-6 sm:gap-10">

       
        <div className="relative flex justify-center flex-shrink-0 min-w-[51px] sm:min-w-[180px] md:min-w-[246px]">
          {/* Yellow Rectangle */}
          <div className="w-[51px] h-[306px] border-[5px] border-[#FFC727] rounded-lg sm:w-[180px] sm:h-[520px] md:w-[246px] md:h-[694px] md:border-[10px] z-10" />
      
          <img 
            src={rightstone} 
            alt="Right Stone"
            className="
              absolute top-1/2 right-[10px] w-[35px] h-[40px] 
              sm:top-[260px] sm:right-[calc(50%-110px)] sm:left-auto sm:w-[89px] sm:h-[102px] sm:rotate-[-20deg]  z-20"
              />
             
          
          <img src={bottombox} alt="Bottom Box"
            className="absolute bottom-[-20px] left-[0px] w-[34px] h-[39px] sm:bottom-[-30px] sm:left-[calc(50%-140px)] sm:w-[51px] sm:h-[58px] sm:rotate-[-10deg]  z-0" />

          <img src={stone} alt="Stone"
            className="absolute top-[10px] left-[-20px] w-[37px] h-[43px] sm:top-[10px] sm:left-[calc(50%-160px)] sm:w-[113px] sm:h-[130px] rotate-[0deg] sm:rotate-[50deg] z-20" />

           

               <img 
                      src={smallcube} 
                      alt="smallcube" 
                      className="
                        absolute top-[260px] left-[10px] w-[62px] h-[71px] rotate-[140deg] 
                        sm:top-[-20px] sm:bottom-auto sm:left-[30px]  sm:right-auto
                        sm:w-[42px] sm:h-[48px] sm:rotate-[60deg] 
                        z-0
                      " 
                    />
            <img src={leftcube} alt="Left Cube"
              className="absolute top-[100px] left-[-5px] w-[32px] h-[33px] sm:top-[50%] sm:right-[calc(50%-110px)] sm:w-[75px] sm:h-[86px] sm:-translate-y-1/2 rotate-[0deg] sm:rotate-[-180deg] z-0"/>
             
            
                   
                    <img 
                      src={cubeset} 
                      alt="Cubeset" 
                      className="
                        absolute top-[260px] left-[10px] w-[62px] h-[71px] rotate-[140deg] 
                        sm:top-auto sm:bottom-[-80px] sm:left-auto sm:right-[-70px] 
                        sm:w-[242px] sm:h-[271px] sm:rotate-[180deg] 
                        z-10
                      " 
                    />


            <img src={loopCircle} alt="Loop Circle" className="absolute top-[-30px] left-[20px] w-[62px] h-[65px] rotate-[80deg] sm:top-[-160px] sm:right-[calc(50%-240px)] sm:left-auto sm:w-[320px] sm:h-[310px] sm:rotate-[75deg]  z-20"
              />
               {/* <img src={rightstone} alt="rightstone" className="absolute top-[-30px] left-[20px] w-[62px] h-[65px] rotate-[80deg] sm:top-[260px] sm:right-[calc(50%-110px)] sm:left-auto sm:w-[89px] sm:h-[102px] sm:rotate-[-20deg]  z-20"
              /> */}


              
              
              
       

        </div>

        {/* === Column 2: Text Sections === */}
        <div className="flex flex-col justify-center gap-4 sm:gap-6 md:gap-10 text-left w-full">
          {/* Heading */}
          <div>
            <h1 className="text-[#FFC727] font-['Libre_Franklin'] font-extrabold text-[18px] sm:text-[24px] md:text-4xl lg:text-5xl xl:text-[60px] leading-tight">
              What is Kerala's Biggest Freelancer Community
            </h1>
          </div>

          {/* Subheading */}
          <div>
            <h2 className="text-white font-['Roboto'] font-semibold text-[16px] sm:text-[20px] md:text-2xl lg:text-4xl xl:text-[38px] leading-tight">
              Welcome to TrackPi Private Limited – Your Strategic Growth Partner.
            </h2>
          </div>

          {/* Paragraph */}
          <div>
            <p className="text-white font-['Libre_Franklin'] text-[12px] sm:text-sm md:text-lg lg:text-xl xl:text-[28px] leading-relaxed">
              We are building Kerala’s largest freelancer community, a platform where independent professionals can connect,
              collaborate, and grow together. It is a thriving network designed to connect, support, and empower freelancers
              across various industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle3d;