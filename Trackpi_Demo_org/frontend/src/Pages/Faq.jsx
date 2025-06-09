import React from 'react';
import faqIcon from '../assets/faq-icon.png';
import { accordionData } from './accordionData';
import './css/faq.css';
const Faq = () => {
  return (
    <>
    <div className='hidden lg:block'>
    <h1 className='text-white font-bold text-3xl leading-[100%] px-16 mt-5'>FAQ</h1>
    <div className="w-full min-h-screen flex gap-4 justify-between px-16 py-10">
      <div className="w-[660px]">
        
        <h2 className="text-white text-2xl mb-8 text-center">
          Here are some of the frequently asked questions
        </h2>

        <div className="flex">
          {/* Sidebar with icons */}
            <div className="flex flex-col gap-[30px] items-center w-[100px] ">
            {[1, 2, 3, 4].map((_, idx) => (
              <div key={idx} className="flex flex-col items-center gap-[18px] mt-11">
                <img src={faqIcon} alt="faq icon" className="w-[60px] h-[60px]" />
                <div className="w-[100px] border-2 border-[#FF9D00] rotate-90 mt-12"></div>
              </div>
            ))}
          </div>

          {/* Questions */}
          <div className="ml-8 flex flex-col gap-[50px]">
            {[
              "Is this work from home?",
              "Do I need a laptop?",
              "Can I work here along with my daily work?",
              "How can I manage my time effectively as a freelancer?",
            ].map((q, i) => (
              <div key={i} className="flex flex-col gap-[10px]">
                <h5 className="text-white font-semibold text-[18px] tracking-[0.27px]">
                  {q}
                </h5>
                <p className="text-white text-base leading-[30px] tracking-[0.27px] text-justify">
                  As a freelancer, managing your time effectively is crucial to deliver quality
                  work, meet deadlines, and maintain a healthy work-life balance. To achieve this,
                  start by creating a schedule that outlines your work hours, breaks, and personal
                  time.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search Box */}
      <div className='w-[650px]'>
        {/* <input
          type="search"
          placeholder="Search"
          className="w-full h-[50px] rounded-2xl border px-[15px] py-[6px] bg-white"
        /> */}
        
<form class="">   
    <label for="default-search" class="mb-2 text-sm font-medium sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full py-1.5 px-3.75 ps-10 text-sm  rounded-[15px] " placeholder="Search..." required />
        {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    </div>
</form>


        {/* accordion */}
        <div id="accordion-collapse" data-accordion="collapse">
          {accordionData.map((item) => (
            <div key={item.id} className='border-b border-white'>
              <h2 id={`accordion-collapse-heading-${item.id}`}>
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white gap-3"
                    data-accordion-target={`#accordion-collapse-body-${item.id}`}
                    aria-expanded="false"
                    aria-controls={`accordion-collapse-body-${item.id}`}
                 >
                    <span className="text-white">{item.question}</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                 </button>
                 </h2>
                  <div
                    id={`accordion-collapse-body-${item.id}`}
                    className="hidden"
                    aria-labelledby={`accordion-collapse-heading-${item.id}`}
                  >
                    <div className="p-5 border-b border-white">
                      <p className="mb-2 text-white">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>        
      </div>
    </div>
</div>


{/* mobile view */}
<div className='block lg:hidden'>
  <h1 className='text-white font-bold text-[18px] leading-[100%] px-8 mt-5'>FAQ</h1>
  <div className='mt-3 px-7'>
    <form >   
    <label for="default-search" class="mb-2 text-sm font-medium sr-only dark:text-white">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full py-1.5 px-3.75 ps-10 text-sm  rounded-[15px] " placeholder="Search..." required />
        {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
      </div>
    </form>

    <div id="accordion-collapse" data-accordion="collapse">
          {accordionData.map((item) => (
            <div key={item.id} className='border-b border-white'>
              <h2 id={`accordion-collapse-heading-${item.id}`}>
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-left text-white gap-3"
                    data-accordion-target={`#accordion-collapse-body-${item.id}`}
                    aria-expanded="false"
                    aria-controls={`accordion-collapse-body-${item.id}`}
                 >
                    <span className="text-white">{item.question}</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                 </button>
                 </h2>
                  <div
                    id={`accordion-collapse-body-${item.id}`}
                    className="hidden"
                    aria-labelledby={`accordion-collapse-heading-${item.id}`}
                  >
                    <div className="p-5 border-b border-white">
                      <p className="mb-2 text-white">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div>
            <h1 className='text-white text-[14px] my-8 text-center'>Here are some of the frequently asked questions</h1>
            <div className="flex">
          {/* Sidebar with icons */}
            <div className="flex flex-col gap-10 items-center w-[100px] ">
            {[1, 2, 3, 4].map((_, idx) => (
              <div key={idx} className="flex flex-col items-center gap-15 mt-">
                <img src={faqIcon} alt="faq icon" className="w-10 h-10" />
                <div className="w-12.5 border-2 border-[#FF9D00] rotate-90 mt-"></div>
              </div>
            ))}
          </div>

          {/* Questions */}
          <div className="ml-8 flex flex-col gap-2.5">
            {[
              "Is this work from home?",
              "Do I need a laptop?",
              "Can I work here along with my daily work?",
              "How can I manage my time effectively as a freelancer?",
            ].map((q, i) => (
              <div key={i} className="flex flex-col gap-[10px]">
                <h5 className="text-white font-semibold text-3 tracking-[0.27px]">
                  {q}
                </h5>
                <p className="text-white text-2.5 leading-[17px] tracking-[0.27px] text-justify">
                  As a freelancer, managing your time effectively is crucial to deliver quality
                  work, meet deadlines, and maintain a healthy work-life balance. To achieve this,
                  start by creating a schedule that outlines your work hours, breaks, and personal
                  time.
                </p>
              </div>
            ))}
          </div>
        </div>
            

          </div>



    


  </div>
</div>

    
    
    </>
  );
};

export default Faq;
