import React, { useState } from 'react';

const CourseDetailsModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    if (!isOpen) {
        return (
            <button
                onClick={openModal}
                className="px-8 py-3 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
                Courses
            </button>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Background Overlay */}
            <div
                className="absolute inset-0 bg-opacity-60"
                onClick={closeModal}
            ></div>

            {/* Modal */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 rounded-2xl shadow-2xl w-full max-w-3xl mx-4 p-5 border border-gray-600/30">
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-6 right-6 text-gray-300 hover:text-white transition-colors duration-200 p-1 hover:bg-white/10 rounded-full"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="text-1xl font-bold text-white">
                        Course Details
                    </h2>
                </div>

                {/* Form Fields - Left Aligned */}
                <div className="space-y-4 mb-8">
                    {/* Course Name */}
                    <div className="text-left">
                        <label className="text-white font-medium text-base">
                            Course Name
                        </label>
                    </div>

                    {/* Course Sections (Dropdown) */}
                    <div className="text-left">
                        <div className="flex items-center gap-3">
                            <label className="text-white font-medium text-base">
                                Course Sections
                            </label>
                            <div className="relative">
                                <select className="bg-gray-700/50 text-white px-3 py-1 rounded border border-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 pr-8 min-w-[120px]">
                                    <option>Section 1</option>
                                    <option>Section 2</option>
                                    <option>Section 3</option>
                                    <option>Section 4</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Course Duration */}
                    <div className="text-left">
                        <label className="text-white font-medium text-base">
                            Course Duration
                        </label>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                    <p className="text-sm text-gray-300 leading-relaxed text-left">
                        A course description provides prospective students with an overview of a course, including its content, objectives, learning methods, and requirements, helping them decide if it aligns with their interests and goals.
                    </p>
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                    <button
                        onClick={closeModal}
                        className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        Ok, Got it
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsModal;