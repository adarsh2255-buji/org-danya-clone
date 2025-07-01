import React from "react";
import facebookLogo from "../assets/contactfb.png";
import youtubeLogo from "../assets/contactyoutube.png";
import instagramLogo from "../assets/contactinsta.png";
import linkedinLogo from "../assets/contactlinkedin.png";
import MLogo from "../assets/contactmedium.png";
import searchLogo from "../assets/contactsearch.png";
import blogLogo from "../assets/contactblog.png";

const ContactUsForm = () => {
  const socialIcons = [
    {
      src: facebookLogo,
      alt: "Facebook",
      padding: "p-[5px]",
      width: "100%",
      height: "100%",
    },
    {
      src: youtubeLogo,
      alt: "YouTube",
      padding: "p-[5px]",
      width: "100%",
      height: "100%",
    },
    {
      src: instagramLogo,
      alt: "Instagram",
      // padding: "p-[5px]",
      width: "100%",
      height: "100%",
    },
    {
      src: MLogo,
      alt: "Medium",
      padding: "p-[5px]",
      width: "100%",
      height: "100%",
    },
    {
      src: linkedinLogo,
      alt: "LinkedIn",
      padding: "p-[5px]",
      width: "100%",
      height: "100%",
    },
    {
      src: searchLogo,
      alt: "Search",
      // padding: "p-[5px]",
      width: "100%",
      height: "100%",
    },
    {
      src: blogLogo,
      alt: "Blog",
      // padding: "p-[5px]",
      width: "100%",
      height: "100%",
    },
  ];

  return (
    <div className="w-full overflow-hidden min-h-screen bg-gradient-to-r from-[#141021] to-[#5e3d1f] text-white px-4 pt-25 flex flex-col space-x-10 md:flex-row md:gap-[60px] relative pb-10">
      {/* LEFT COLUMN */}
      <div className="w-full md:w-[50%] flex flex-col justify-between gap-10 pl-[100px]">
        {/* Description */}
        <div className="max-w-[442px]">
          <p className="font-urbanist font-semibold text-[16px] md:text-[24px] leading-[100%] text-left">
            For inquiries about our services,
            <br />
            Please fill your details or email us directly.
          </p>
        </div>

        {/* Address, Phone, Email section */}
        <div className="flex flex-col gap-[20px] md:gap-[60px]">
          {[
            { label: "Address", value: "Kakkanad, Kochi, India" },
            { label: "Phone Number", value: "+91 8078179646" },
            { label: "E-Mail ID", value: "operations@trackpi.in" },
          ].map((item, i) => (
            <div
              key={i}
              className="border-b border-white/50 pb-[10px] md:pb-[50px]"
            >
              <h3 className="font-urbanist font-extrabold text-[24px] md:text-[42px] leading-[36px] text-left">
                {item.label}
              </h3>
              <p className="font-urbanist font-semibold text-[18px] md:text-[36px] leading-[36px] text-left pt-4">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-[15px] md:gap-[17.5px]">
          {socialIcons.map((icon, i) => (
            <div
              key={i}
              className={`w-[32px] h-[32px] md:w-[70px] md:h-[70px] rounded-[17.5px] flex items-center justify-center ${icon.padding}`}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                style={{ width: icon.width, height: icon.height }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full md:w-[50%]flex flex-col justify-center items-center gap-[30px] md:gap-[40px] pr-[100px] ">
        {/* Heading + Description */}
        <div className="w-full max-w-[802px] text-center flex flex-col gap-[10px] md:gap-[20px]">
          <h2 className="hidden md:block font-libre font-bold text-[50px] text-[#FFC100]">
            You’re ready to take the next step
          </h2>
          <p className="font-urbanist font-semibold text-[12px] md:text-[24px] leading-[16px] md:leading-[32px] pb-10">
            We’re all wrestling with complexity. Every company, work function,
            and team now faces a tall order: to be more adaptive, strategic,
            effective, human, and equitable amidst growing uncertainty.
          </p>
        </div>

        {/* Form */}
        <div className="w-full max-w-[712px] flex flex-col items-center mx-auto gap-[15px]">
          <form className="w-full flex flex-col gap-[8.9px] font-urbanist">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-[32px] md:h-[52px] px-[20px] py-[10px] text-black rounded-[8.9px] text-[10px] md:text-[18px] placeholder:text-[#0A0A0ACC] shadow-[2px_2px_4px_0px_#0A0A0A33,_-2px_1px_4px_0px_#0A0A0A33,_0px_-2px_4px_0px_#0A0A0A33]"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full h-[32px] md:h-[52px] px-[20px] py-[10px] text-black rounded-[8.9px] text-[10px] md:text-[18px] placeholder:text-[#0A0A0ACC] shadow-[2px_2px_4px_0px_#0A0A0A33,_-2px_1px_4px_0px_#0A0A0A33,_0px_-2px_4px_0px_#0A0A0A33]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-[32px] md:h-[52px] px-[20px] py-[10px] text-black rounded-[8.9px] text-[10px] md:text-[18px] placeholder:text-[#0A0A0ACC] shadow-[2px_2px_4px_0px_#0A0A0A33,_-2px_1px_4px_0px_#0A0A0A33,_0px_-2px_4px_0px_#0A0A0A33]"
            />
            <input
              type="text"
              placeholder="Where Are You Located"
              className="w-full h-[32px] md:h-[52px] px-[20px] py-[10px] text-black rounded-[8.9px] text-[10px] md:text-[18px] placeholder:text-[#0A0A0ACC] shadow-[2px_2px_4px_0px_#0A0A0A33,_-2px_1px_4px_0px_#0A0A0A33,_0px_-2px_4px_0px_#0A0A0A33]"
            />
            <select className="w-full h-[32px] md:h-[52px] px-[20px] py-[10px] text-black rounded-[8.9px] text-[10px] md:text-[18px] shadow-[2px_2px_4px_0px_#0A0A0A33,_-2px_1px_4px_0px_#0A0A0A33,_0px_-2px_4px_0px_#0A0A0A33]">
              <option>How Did You Hear About Us?</option>
              <option>Google</option>
              <option>Social Media</option>
              <option>Referral</option>
            </select>
            <textarea
              placeholder="Message"
              className="w-full h-[107px] md:h-[178px] px-[20px] py-[10px] text-black rounded-[8.9px] text-[10px] md:text-[18px] placeholder:text-[#0A0A0ACC] shadow-[2px_2px_4px_0px_#0A0A0A33,_-2px_1px_4px_0px_#0A0A0A33,_0px_-2px_4px_0px_#0A0A0A33]"
            />
          </form>

          <button className="mt-2 w-[139px] h-[38px] md:w-[200px] md:h-[48px] bg-yellow-400 text-black font-urbanist text-[12px] md:text-[20px] font-semibold px-[50px] py-[12px] rounded-[10px] border-[2px] border-transparent hover:bg-yellow-300">
            Submit
          </button>

          <p className="w-full max-w-[322px] md:max-w-[800px] text-[12px] md:text-[20px] font-urbanist font-medium text-center">
            Or email <span className="text-yellow-400">hello@trackpi.com</span>{" "}
            to get in touch with our team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
