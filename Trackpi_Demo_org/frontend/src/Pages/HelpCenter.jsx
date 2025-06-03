import React from "react";
import SocialIcon from "../components/SocialIcon";
import Footer from "../components/Footer";
import InformationCircle from "../components/InformationCircle";
const HelpCenter =()=>{
    return(
 <div className="w-full h-auto  py-[0.5vh]">
   <main className="flex-grow">
  <div className="w-full max-w-[1512px] h-[33px]  px-4 sm:px-10 lg:px-0 mx-auto flex justify-start mt-1 ml-8  ">
    <div className="  w-[51px] h-[33px] sm:w-[80px] sm:h-[40px] text-[28px] text-white sm:text-[32px] font-roboto font-bold leading-[100%] tracking-[0%] text-center">
      FAQ
    </div>
  </div>



 
 {/* Main Container */}
 <div className="w-full min-h-[70vh] flex flex-col md:flex-row justify-between gap-16 px-4 md:px-10 mb-6 mt-4">

  {/* Left Container */}
  <div className="w-full md:w-2/5 flex flex-col sm:gap-4">
    {/* First Element */}
    <div className="w-full max-w-full md:max-w-[90%] mb-2  ">
      <div className="text-white font-roboto font-medium text-base sm:text-lg md:text-[17px] leading-relaxed">
        For inquiries about our services,<br />
        Please fill your details or email us directly.
      </div>
    </div>

    {/* Second Element */}
    {/* parent element */}
    <div className=" gap-[14px] flex flex-col ">
    <div className="w-full h-auto sm:h-[102px] gap-2 sm:gap-[10px] border-b-[0.5px] border-white border-opacity-50 pb-5 mb-3.5 flex flex-col sm:flex-row flex-wrap">
  <div className="w-[134px] text-white h-[36px] font-roboto font-semibold text-[24px] leading-[36px] tracking-normal">
    Our Address
  </div>
  <div className="w-full sm:w-full h-[36px]  font-roboto font-medium text-[30px] leading-[36px] tracking-normal text-white ">
    Kakkanad, Kochi, India
  </div>
</div>
  <div className="w-full h-auto sm:h-[102px] gap-2 sm:gap-[10px] border-b-[0.5px] border-white border-opacity-50 pb-5 mb-3.5 flex flex-col sm:flex-row flex-wrap">
  <div className="w-[134px] text-white h-[36px]  font-roboto font-semibold text-[24px] leading-[36px] tracking-normal">
    Phone
  </div>
  <div className="w-full sm:w-full h-[36px]  font-roboto font-medium text-[30px] leading-[36px] tracking-normal text-white ">
    +91 8078179646
  </div>
</div>
  <div className="w-full h-auto sm:h-[102px] gap-2 sm:gap-[10px] border-b-[0.5px] border-white border-opacity-50 pb-5 mb-3.5 flex flex-col sm:flex-row flex-wrap">
  <div className="w-[134px] text-white h-[36px]  font-roboto font-semibold text-[24px] leading-[36px] tracking-normal">
    E-mail
  </div>
  <div className="w-full sm:w-full h-[36px]  font-roboto font-medium text-[30px] leading-[36px] tracking-normal text-white ">
   operations@trackpi.in
  </div>
</div>
{/* Social media icons */}
<SocialIcon/>
</div>



</div>
{/* right container */}

<div className="w-full md:w-3/5 h-auto border rounded-[20px] border-white border-opacity-50 p-4 flex items-center justify-center">
  <div className="w-full text-center font-roboto font-semibold text-[32px] leading-[36px] text-white">
    Coming Soon!
  </div>
</div>




</div>
</main>
{/* Footer */}
<div className="w-full flex items-center "></div>
<div className="-mt-13 ">
<Footer/>
</div>

<div className="fixed bottom-4 right-12 z-50">
  <InformationCircle />
</div>

</div>

    )
}
 export default  HelpCenter