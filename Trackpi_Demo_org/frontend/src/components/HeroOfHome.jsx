import React, { useState } from 'react';
import heroImage from '../assets/hero.png';
import { SpeakerXMarkIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[800px] lg:h-[982px]">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black opacity-40 z-10" />

      <div className="relative z-20 flex flex-col justify-center h-full text-white px-6 md:px-[78px] max-w-[412px] sm:max-w-[600px] md:max-w-3xl">
        <h1 className="text-[28px] sm:text-[36px] md:text-[68px] font-extrabold leading-tight tracking-wide font-['Libre_Franklin'] text-left">
          Kerala's Biggest Freelancer Community
        </h1>
        <p className="mt-4 text-[16px] sm:text-[18px] md:text-[22px] font-semibold font-['Roboto'] text-left">
          Welcome to TrackPi Private Limited – Your Strategic Growth Partner.
        </p>
        <button className="mt-6 bg-[#99999980] px-6 py-2 rounded-md w-[166px] h-[46px] font-semibold text-left">
          Watch Now
        </button>
      </div>

      <div className="absolute bottom-6 right-6 z-20">
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