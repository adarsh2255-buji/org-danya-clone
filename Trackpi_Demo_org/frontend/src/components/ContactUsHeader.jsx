import React from "react";
import ContactUsheroImg from "../assets/hero.png";

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
          opacity: 0.4,
        }}
      ></div>

      {/* Heading */}
      <div className="absolute inset-0 z-10 flex justify-center md:items-center items-end pb-4 md:pb-0">
        <h1 className="w-[393px] md:w-[396px] h-[24px] md:h-[82px] text-[20px] md:text-[68px] font-extrabold leading-[100%] tracking-[0.05em] text-white text-center font-libre">
          Contact Us
        </h1>
      </div>
    </div>
  );
};

export default ContactusHeader;
