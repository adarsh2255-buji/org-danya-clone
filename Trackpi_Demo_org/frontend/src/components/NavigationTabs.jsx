import React from 'react';
import CourseDetailsModal from './CourseDetailsModal';

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
                    <button><CourseDetailsModal/></button>
                    <button className="px-6 py-2 border border-yellow-400 text-yellow-400 font-medium rounded-full hover:text-yellow-300 hover:border-yellow-300 transition">
                        Assessment
                    </button>
                </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-10">
                {welcomeModules.map((module) => (
                    <div
                        key={module.id}
                        className="group relative flex items-center rounded-full px-4 py-3 w-full h-[90px] hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 shadow-md hover:shadow-yellow-500/30"
                    >
                        <div className="text-2xl font-extrabold text-gray-700 mr-4 w-8 text-left">
                            {module.number}
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-white m-0">welcome to trackpi</p>
                            <div className="text-xs text-gray-400 mt-1 flex items-center gap-2">
                                <span>{module.videos} Videos</span>
                                <span>|</span>
                                <span>{module.duration} Min</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NavigationTabs;
