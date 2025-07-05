import React from "react";
import ContactUsheroImg from "../assets/hero.png";
import muteIcon from "../assets/muteiconcontactus.png"; 

const ContactusHeader = () => {
  return (
    <div className="w-full h-[223px] md:h-[720px] relative">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${ContactUsheroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
        }}
      ></div>

      {/* Heading */}
      <div className="absolute inset-0 z-10 flex justify-center md:items-center items-end pb-4 md:pb-0">
        <h1 className="w-[393px] md:w-[396px] h-[24px] md:h-[82px] text-[20px] md:text-[68px] font-extrabold leading-[100%] tracking-[0.05em] text-[#FFFFFF] text-center font-libre">
          Contact Us
        </h1>
      </div>

      {/* Mute Icon - Bottom Right */}
      <div className="absolute bottom-4 right-4 w-[20px] h-[20px] rounded-[30px] p-[4px] bg-[#492F30] z-20 flex items-center justify-center md:hidden">
        <img
          src={muteIcon}
          alt="Mute"
          className="w-[10px] h-[10px] object-contain rounded-full"
        />
      </div>
    </div>
  );
};

export default ContactusHeader;
