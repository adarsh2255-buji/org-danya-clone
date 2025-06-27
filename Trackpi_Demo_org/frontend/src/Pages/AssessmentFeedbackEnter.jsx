import React from "react";

function AssessmentFeedbackEnter() {
    return (
        <div
            className="fixed top-[35vh] left-[20vw] w-[60vw] h-[30vh] rounded-[30px] p-10 flex flex-col items-center justify-center text-white"
            style={{
                background:
                    "linear-gradient(262.57deg, #3F280D 0.01%, #070B20 100.01%)",
            }}
        >
            <p className="w-[552px] h-[86px] text-center font-medium text-[24px] leading-[180%] tracking-[-0.011em] font-inter">
                Before you start the next Course,<br />
                we would like to get some feedback from you 😊
            </p>
            <button
                className="mt-6 w-[196px] h-[43px] px-[30px] py-[9px] rounded-full border border-transparent bg-[#FF9D00] text-white font-medium font-inter hover:bg-[#e68c00] transition"
            >
                Start
            </button>
        </div>
    );
}

export default AssessmentFeedbackEnter;
