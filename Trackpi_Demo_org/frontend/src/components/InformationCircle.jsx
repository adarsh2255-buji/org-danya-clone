import React from 'react'

const InformationCircle=()=> {
  return (
    <div className="w-[30px] h-[30px]  ">
<button className=" right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-gray-800 transition">
    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        </button>
    </div>

  )
}

export default InformationCircle
