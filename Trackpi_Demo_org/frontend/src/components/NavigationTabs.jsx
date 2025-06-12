import React from 'react';
import CourseDetailsModal from './CourseDetailsModal';
import LiquidCard from './LiquidCard';

const NavigationTabs = () => {
    const welcomeModules = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        number: i + 1,
        videos: 10,
        duration: 30,
    }));

    return (
        <div className="w-screen h-auto pt-[11.2vh] px-[3.3vw] text-white">
            {/* Top Buttons */}
            <div className="flex justify-end mb-6 pr-6">
                <div className="inline-flex space-x-4">
                    <CourseDetailsModal />
                    <button className="px-6 py-2 border border-yellow-400 text-yellow-400 font-medium rounded-full hover:text-yellow-300 hover:border-yellow-300 transition">
                        Assessment
                    </button>
                </div>
            </div>


            <div className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
                    {welcomeModules.map((module, index) => (
                        <LiquidCard key={index} module={module} />
                    ))}
                </div>
            </div>



        </div>
    );
};

export default NavigationTabs;
