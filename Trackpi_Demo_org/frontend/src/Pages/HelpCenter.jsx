import React from "react";

const HelpCenter =()=>{
    return(
      <div className="w-screen h-auto px-[3.3vw] py-[6.2vh]">
  
 <div className="w-full flex items-center gap-2 sm:gap-4 md:gap-6 mb-4 sm:mb-6 mt-[-20px] sm:mt-[-28px]">
 <div className="text-white font-roboto font-bold text-base sm:text-lg md:text-xl leading-tight text-center">
    FAQ
  </div>
</div>

 
 {/* Main Container */}
 <div className="w-full max-w-[93vw] min-h-[70vh] flex flex-col md:flex-row justify-between gap-2 px-4 md:px-0 mb-6 ">
  {/* Left Container */}
  <div className="w-full md:w-2/5 flex flex-col sm:gap-4">
    {/* First Element */}
    <div className="w-full max-w-full md:max-w-[90%] mb-6 ">
      <div className="text-white font-roboto font-medium text-base sm:text-lg md:text-[17px] leading-relaxed">
        For inquiries about our services,<br />
        Please fill your details or email us directly.
      </div>
    </div>

    {/* Second Element */}
    <div className="w-full max-w-md sm:max-w-lg md:max-w-[31vw] -mt-4 sm:-mt-4 flex flex-col sm:gap-6">

  <div className="w-full max-w-[31.25vw] sm:max-w-lg md:max-w-xl gap-0.5 sm:gap-1 border-b border-white border-opacity-50 pb-2 flex flex-col">
  <div className="w-full font-roboto font-normal text-xs sm:text-sm md:text-sm leading-snug tracking-normal text-left text-white">
    Our Address
  </div>
  <div className="w-full font-roboto font-medium text-sm sm:text-base md:text-base leading-snug text-left text-white">
    Kakkanad, Kochi, India
  </div>
</div>




{/* third */}

  <div className="w-full max-w-[31.25vw] gap-0.5 border-b border-white border-opacity-50 pb-2 flex flex-col">
  <div className="w-full  h-auto font-roboto font-normal text-xs sm:text-sm md:text-sm leading-snug   md:leading-[4.5vh] tracking-normal text-left text-white">
    Phone
  </div>
  <div className="w-full h-auto font-roboto font-medium text-sm sm:text-base md:text-base leading-snug   md:leading-[4.5vh] text-left text-white">
    +91 8078179646
  </div>
</div>


{/* forth */}

 <div className="w-full max-w-[31.25vw] sm:w-[90vw] sm:max-w-full gap-0.5 border-b border-white border-opacity-50  pb-2 flex flex-col ">
  <div className="font-roboto font-normal text-xs sm:text-sm md:text-sm leading-snug text-left text-white">
    E-mail
  </div>
  <div className="font-roboto font-medium text-sm sm:text-base md:text-base leading-snug text-left text-white break-words">
    operations@trackpi.in
  </div>
</div>


<div className="w-full max-w-[31.25vw] h-10 flex justify-between -mt-3 px-4">
  {/* Content goes here */}
</div>

</div>
</div>

{/* right container */}
<div className="w-full sm:w-[42.97vw] h-auto sm:h-[71.06vh] flex flex-col gap-[2.65vw] rounded-[1.32vw] border border-white/80">
  {/* Content */}
</div>


</div>

</div>

    )
}
 export default  HelpCenter