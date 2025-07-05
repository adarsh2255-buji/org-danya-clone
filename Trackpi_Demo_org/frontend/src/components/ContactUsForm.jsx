import React, { useState } from "react";
import axios from "axios";
import facebookLogo from "../assets/contactfb.png";
import youtubeLogo from "../assets/contactyoutube.png";
import instagramLogo from "../assets/contactinsta.png";
import linkedinLogo from "../assets/contactlinkedin.png";
import MLogo from "../assets/contactmedium.png";
import searchLogo from "../assets/contactsearch.png";
import blogLogo from "../assets/contactblog.png";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    location: "",
    hearAboutUs: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", formData);
      alert(response.data.message);
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        location: "",
        hearAboutUs: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  const socialIcons = [
    { src: facebookLogo, alt: "Facebook", padding: "p-[4px]" },
    { src: youtubeLogo, alt: "YouTube" },
    { src: instagramLogo, alt: "Instagram" },
    { src: MLogo, alt: "Medium" },
    { src: linkedinLogo, alt: "LinkedIn" },
    { src: searchLogo, alt: "Search" },
    { src: blogLogo, alt: "Blog" },
  ];

  return (
    <div className="w-full overflow-hidden min-h-screen bg-gradient-to-r from-[#141021] to-[#5e3d1f] text-white py-10 md:pt- px-4">
      <div className="w-full max-w-[1728px] mx-auto flex flex-col md:flex-row pb-10 gap-[30px] md:gap-[60px]">
        {/* LEFT COLUMN */}
        <div className="w-[660px] md:w-[50%] flex flex-col justify-between gap-10 pl-[31px] md:pl-[100px] overflow-hidden">
          {/* Description */}
          <div className="max-w-[442px]">
            <p className="font-urbanist font-semibold text-[12px] md:text-[24px] leading-[100%] text-left">
              For inquiries about our services,
            </p>
            <p className="font-urbanist font-semibold text-[12px] md:text-[24px] leading-[100%] text-left">
              Please fill your details or email us directly.
            </p>
          </div>

          {/* Address, Phone, Email section */}
          <div className="flex flex-col gap-[10px] md:gap-[60px]">
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
                className={`w-[32px] h-[32px] md:w-[70px] md:h-[70px] rounded-[17.5px] flex items-center justify-center ${
                  icon.padding || ""
                }`}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-[802px] flex flex-col justify-center items-center gap-[20px] md:gap-[40px] px-4 md:pr-[100px]">
          {/* Heading + Description */}
          <div className="max-w-[802px] text-center flex flex-col gap-[10px] md:gap-[20px]">
            <h2 className="font-libre font-bold text-[#FFC100] text-[18px] md:text-[50px] leading-[100%] tracking-[0.02em] text-center w-full md:w-auto whitespace-nowrap">
              You’re ready to take the next step
            </h2>
            <p className="font-urbanist font-semibold text-[12px] md:text-[24px] leading-[16px] md:leading-[32px]">
              We’re all wrestling with complexity. Every company, work function,
              and team now faces a tall order: to be more adaptive, strategic,
              effective, human, and equitable amidst growing uncertainty.
            </p>
          </div>

          {/* Form */}
          <div className="w-full max-w-[712px] flex flex-col items-center gap-[15px]">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-[8.9px] font-urbanist"
            >
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                type="text"
                className="w-full h-[32px] md:h-[52px] px-[20px] py-[10px] text-black rounded-[8.9px] text-[10px] md:text-[18px] placeholder:text-[#0A0A0ACC] shadow-[2px_2px_4px_0px_#0A0A0A33,_-2px_1px_4px_0px_#0A0A0A33,_0px_-2px_4px_0px_#0A0A0A33]"
              />
              <input
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Contact Number"
                type="text"
                className="w-full h-[32px] md:h-[52px] px-[20px] py-[10px] text-black rounded-[8.9px] text-[10px] md:text-[18px] placeholder:text-[#0A0A0ACC] shadow-[2px_2px_4px_0px_#0A0A0A33,_-2px_1px_4px_0px_#0A0A0A33,_0px_-2px_4px_0px_#0A0A0A33]"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                type="email"
                className="w-full h-[32px] md:h-[52px] px-[20px] py-[10px] text-black rounded-[8.9px] text-[10px] md:text-[18px] placeholder:text-[#0A0A0ACC] shadow-[2px_2px_4px_0px_#0A0A0A33,_-2px_1px_4px_0px_#0A0A0A33,_0px_-2px_4px_0px_#0A0A0A33]"
              />
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Where Are You Located"
                type="text"
                className="w-full h-[32px] md:h-[52px] px-[20px] py-[10px] text-black rounded-[8.9px] text-[10px] md:text-[18px] placeholder:text-[#0A0A0ACC] shadow-[2px_2px_4px_0px_#0A0A0A33,_-2px_1px_4px_0px_#0A0A0A33,_0px_-2px_4px_0px_#0A0A0A33]"
              />

              <select
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleChange}
                className="w-full h-[32px] md:h-[52px] px-[20px] py-[10px] text-black rounded-[8.9px] text-[10px] md:text-[18px] shadow-[2px_2px_4px_0px_#0A0A0A33,_-2px_1px_4px_0px_#0A0A0A33,_0px_-2px_4px_0px_#0A0A0A33]"
              >
                <option value="">How Did You Hear About Us?</option>
                <option value="Google">Google</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full h-[107px] md:h-[178px] px-[20px] py-[10px] text-black rounded-[8.9px] text-[10px] md:text-[18px] placeholder:text-[#0A0A0ACC] shadow-[2px_2px_4px_0px_#0A0A0A33,_-2px_1px_4px_0px_#0A0A0A33,_0px_-2px_4px_0px_#0A0A0A33]"
              />

              <button
                type="submit"
                className="mt-2 mx-auto w-[139px] h-[38px] lg:w-[200px] lg:h-[48px] bg-yellow-400 text-black font-urbanist text-[12px] lg:text-[20px] font-semibold px-[50px] py-[12px] rounded-[10px] border-[2px] border-transparent hover:bg-yellow-300"
              >
                Submit
              </button>
            </form>

            <p className="w-full max-w-[322px] md:max-w-[800px] text-[12px] md:text-[20px] font-urbanist font-medium text-center">
              Or email{" "}
              <span className="text-yellow-400">hello@trackpi.com</span> to get
              in touch with our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
