import React from 'react';
import logo1 from '/IIDM.png';
import logo2 from '/Luminar.png';
import logo3 from '/Techmindz.png';
import logo4 from '/trademaxacademy.png';
import img1 from '../assets/image1.png'; 
import img2 from '../assets/image2.png'; 

import circle from '../assets/circle1.png';

const QuestionCard = () => {
  const cards = [
    {
      title: 'What is TrackPi?',
      desc: '“TrackPi is a platform that helps freelancers manage their projects. Our goal is to make freelancing seamless and profitable for everyone.”',
    },
    {
      title: 'What is Freelancing?',
      desc: '“Freelancing is a way of working where individuals offer their skills and services on a project basis rather than being employed full-time by a single company. It allows for flexibility, independence, and diverse work opportunities.”',
    },
    {
      title: 'Why Join TrackPi’s Freelancer Community?',
      desc: 'Access to high-quality projects from verified clients. A supportive network of like-minded freelancers. Free training courses to upskill and grow. Secure and timely payments for your work.',
    },
    {
      title: 'How It Works?',
      desc: 'Gain essential freelancing knowledge by Complete Training. Unlock the Freelancer Marketplace – Start receiving project offers. Work & Get Paid – Deliver quality work and earn.',
    },
  ];

  const Card = ({ width, data }) => (
    <div
      className="rounded-[20px] p-6 md:p-[50px] text-white flex flex-col justify-between relative z-10"
      style={{
        backgroundColor: '#000000',
        width: width,
        minHeight: '350px',
      }}
    >
      <p className="text-white font-semibold text-[20px] md:text-[28px] tracking-wide leading-[1.2]">
        {data.desc}
      </p>
      <p className="mt-6 text-[#FFC727] text-[26px] md:text-[38px] font-extrabold leading-[1.2] w-fit px-3 py-1 rounded">
        {data.title}
      </p>
    </div>
  );

  return (
    <>
      {/* Logo Row */}
      <div className="w-screen bg-gradient-to-r from-[#FFC100] to-[#FF9D00] py-[10px]">
        <div className="flex px-12 gap-6 md:hidden">
          {[logo1, logo2, logo3].map((logo, index) => (
            <div
              key={`mobile-logo-${index}`}
              className="w-[102px] px-1 h-[45px] bg-white bg-opacity-80 flex items-center justify-center"
            >
              <img src={logo} alt={`logo-${index}`} className="max-h-[60px] object-contain" />
            </div>
          ))}
        </div>

        <div className="hidden md:flex flex-wrap justify-center gap-[10px] px-[-15px]">
          {[logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4].map((logo, index) => (
            <div
              key={`desktop-logo-${index}`}
              className="w-[170px] h-[80px] bg-white bg-opacity-80 flex items-center justify-center"
            >
              <img src={logo} alt={`logo-${index}`} className="max-h-[60px] object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Card Section (Keep existing gradient background) */}
      <div className="relative w-full py-2 px-4 md:px-12 overflow-hidden">
        {/* Decorative Circles (behind cards)
        <img src={circle} alt="circle" className="absolute top-[340px] left-[10px] w-[187px] opacity-40 z-0" />
        <img src={circle} alt="circle" className="absolute bottom-[1120px] left-[5px] w-[136px] opacity-40 z-0" />
        <img src={circle} alt="circle" className="absolute bottom-[860px] left-[10px] w-[187px] opacity-40 z-0" />
        <img src={circle} alt="circle" className="absolute bottom-[1040px] left-[190px] w-[168px] opacity-40 z-0" /> */}

{/* //warning:dont touch circle code it shift position sm:desktop */}
        {/* Circle 1 */}
<img
  src={circle}
  alt="circle"
  className="absolute top-[280px] sm:top-[340px] left-[5px] w-[120px] sm:w-[187px] opacity-40 z-0"
/>

{/* Circle 2 */}
<img
  src={circle}
  alt="circle"
  className="absolute top-[1460px] sm:top-[940px] left-[5px] w-[90px] sm:w-[136px] opacity-40 z-0"//leftbottom
/>

{/* Circle 3 */}
<img
  src={circle}
  alt="circle"
  className="absolute top-[1490px] sm:top-[800px] sm:left-[20px] left-[100px] w-[136px] sm:w-[120px] opacity-40 z-0"//left top
/>

{/* Circle 4 */}
<img
  src={circle}
  alt="circle"
  className="absolute top-[1580px] sm:top-[820px] left-[-10px] sm:left-[170px] w-[110px] sm:w-[118px] opacity-40 z-0"//right end
/>

        {/* Desktop Cards */}
        <div className="hidden md:flex flex-col gap-6 items-center max-w-[1600px] mx-auto mt-6 relative z-10">
          <div className="flex justify-between w-full gap-6">
            <Card width="580px" data={cards[0]} />
            <Card width="1000px" data={cards[1]} />
          </div>
          <div className="flex justify-between w-full gap-6">
            <Card width="1000px" data={cards[2]} />
            <Card width="580px" data={cards[3]} />
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="flex flex-col gap-6 md:hidden items-center mt-6 relative z-10">
          {cards.map((card, index) => (
            <Card key={index} width="100%" data={card} />
          ))}
        </div>

        {/* Bottom portion */}

        
<div className="w-full px-4 py-10 font-[Urbanist]">
  {/* Title */}
  <h2 className="text-center text-3xl font-semibold text-white mb-10 font-[Libre Franklin]">
    High Resolution Benefits
  </h2>

  {/* Content Container */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
    <div className="max-w-6xl mx-auto space-y-12">

      {/* Row 1 */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
        {/* Column 1: Text */}
        <div className="w-full sm:w-[900px] space-y-6">
          <h1 className="text-3xl font-semibold text-white font-libre">Who We Are?</h1>
          <p className="text-[24px] font-normal leading-[36px] text-justify text-white">
            We’re here to change how the world works—from business as usual to brave new work.
            It takes an unusual person to disrupt decades of tradition and guide hundreds or thousands 
            of people through an experience that demands their bravery, vulnerability, and curiosity. 
            It takes conviction to join a decentralized, self-managing, public benefit corporation where 
            reputation matters more than position.
          </p>
        </div>

        {/* Column 2: Image */}
        <div className="w-full sm:w-[450px] h-auto">
          <img
            src={img1}
            alt="Who We Are"
            className="w-full h-[360px] rounded-[10px] object-cover"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
        {/* Column 1: Image */}
        <div className="w-full sm:w-[450px] h-auto">
          <img
            src={img2}
            alt="Our People"
            className="w-full h-[360px] rounded-[10px] object-cover"
          />
        </div>

        {/* Column 2: Text */}
        <div className="w-full sm:w-[900px] space-y-6">
          <h1 className="text-3xl font-semibold text-white">Who We Are?</h1>
          <p className="text-[24px] font-normal leading-[36px] text-justify text-white">
            The people who make up The Ready are specialists in the ways of organizational culture 
            and transformation. Yet within that world we are generalists drawing freely from the 
            principles and practices of dozens of theories and hundreds of iconoclastic firms. 
            We are coaches, facilitators, academics, psychologists, technologists, and corporate 
            veterans who have found each other in our quest to make work better. Our backgrounds are 
            varied but our ambition is united.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>

       
        {/* add code here dont change circle position */}

      </div>
      
    </>
  );
};

export default QuestionCard;
