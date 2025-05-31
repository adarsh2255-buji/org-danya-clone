import React, { useState } from 'react';

const CourseDetailsModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    if (!isOpen) {
        return (
            <button onClick={openModal} className="px-6 py-2 bg-yellow-400 text-black font-medium rounded-full shadow-md">
                Courses
            </button>

        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center min-w-md">
            {/* Transparent Background Overlay */}
            <div
                className="absolute inset-0 bg-none bg-opacity-40"
                onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-gray-800 rounded-xl shadow-2xl max-w-md w-full mx-4 p-8 border border-gray-700">
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Modal Header */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Course Details</h2>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                    {/* Course Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Course Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Enter course name"
                        />
                    </div>

                    {/* Course Sections */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Course Sections
                        </label>
                        <div className="relative">
                            <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none">
                                <option>Select sections</option>
                                <option>Section 1</option>
                                <option>Section 2</option>
                                <option>Section 3</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Course Duration */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Course Duration
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Enter duration"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                    <p className="text-sm text-gray-300 leading-relaxed">
                        A course description provides prospective students with an overview of a course, including its content, objectives, learning methods, and requirements, helping them decide if it aligns with their interests and goals.
                    </p>
                </div>

                {/* Action Button */}
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={closeModal}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                        Ok, Got it
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsModal;