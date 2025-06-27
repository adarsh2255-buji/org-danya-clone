import React, { useState } from 'react';
import heroImage from '../assets/hero.png';
import { SpeakerXMarkIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="relative w-full h-screen overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: `url(${heroImage})` }}
  />
  <div className="absolute inset-0 bg-black opacity-40 z-10" />

  {/* Text Content */}
  <div className="relative z-20 flex flex-col justify-center h-full text-white px-6 md:px-[78px] w-full max-w-full sm:max-w-[90%] md:max-w-4xl lg:max-w-5xl">
    <h1 className="font-['Libre_Franklin'] text-[28px] sm:text-[36px] md:text-[68px] font-extrabold leading-[100%] tracking-[0.05em]">
      <div className="text-left whitespace-nowrap">
        Kerala's&nbsp;Biggest&nbsp;Freelancer
      </div>
      <div className="text-center">Community</div>
    </h1>

    <p className="mt-[30px] font-['Roboto'] text-[16px] sm:text-[18px] md:text-[22px] font-semibold leading-[100%] text-center">
      Welcome to TrackPi Private Limited – Your Strategic Growth Partner.
    </p>
  </div>

  {/* Bottom Buttons */}
  <div className="absolute bottom-6 left-0 right-0 z-20 px-6 md:px-[78px] flex justify-between items-center">
    <button className="bg-[#b9b7b780] hover:bg-[#FF9D00] transition-colors px-6 py-2 rounded-md w-[166px] h-[46px] font-semibold text-left text-white">
      Watch Now
    </button>

    <div
      onClick={toggleMute}
      className="bg-white/80 hover:bg-[#FF9D00] cursor-pointer p-3 rounded-full transition-colors"
    >
      {isMuted ? (
        <SpeakerXMarkIcon className="h-5 w-5 text-black" />
      ) : (
        <SpeakerWaveIcon className="h-5 w-5 text-black" />
      )}
    </div>
  </div>
</div>

  );
};

export default HeroSection;
