import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="mt-auto pt-8 pb-4 px-6 relative">
                <div className="relative flex justify-center">
                    {/* Background nav container with shadow */}
                    <div className="bg-[#1c1c1c] rounded-full px-6 py-2 shadow-[inset_0_0_4px_#333,0_4px_8px_rgba(0,0,0,0.4)] flex items-center">
                        {/* Centered Navigation */}
                        <nav className="flex flex-wrap space-x-6 text-sm font-semibold">
                            <a href="#" className="text-gray-400 hover:text-white transition">Discover Us</a>
                            <a href="#" className="text-gray-400 hover:text-white transition">Help Centre</a>
                            <a href="#" className="text-yellow-500 font-bold">Courses</a>
                            <a href="#" className="text-gray-400 hover:text-white transition">FAQ</a>
                        </nav>
                    </div>
                    {/* Right-Aligned Icon */}
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-gray-800 transition">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </footer>
        </>
    )
}

export default Footer