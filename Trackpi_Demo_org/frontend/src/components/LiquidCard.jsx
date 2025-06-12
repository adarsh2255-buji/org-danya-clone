import React from 'react';
import LiquidFillGauge from 'react-liquid-gauge';

const LiquidCard = ({ module }) => {
    const radius = 400; // To create the overflowing water effect
    const fillPercentage = 50;

    const gradientStops = [
        {
            key: '0%',
            stopColor: '#000E4DFF', // purple-600
            stopOpacity: 1,
            offset: '0%',
        },
        {
            key: '50%',
            stopColor: '#000E4D4D', // purple-500
            stopOpacity: 1,
            offset: '50%',
        },
        {
            key: '100%',
            stopColor: '#FF9D0066', // fuchsia-500
            stopOpacity: 1,
            offset: '100%',
        },
    ];



    return (
        <div className="relative w-[250px] h-[150px] rounded-full shadow-xl overflow-hidden bg-black">
            {/* Liquid gauge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 z-0">
                <LiquidFillGauge
                    width={radius}
                    height={radius}
                    value={fillPercentage}
                    percent=""
                    textSize={1}
                    riseAnimation
                    waveAnimation
                    waveFrequency={2}
                    waveAmplitude={1}
                    gradient
                    gradientStops={gradientStops}
                    circleStyle={{ fill: 'transparent' }}
                    waveStyle={{ fill: 'url(#gradient)' }}
                    textStyle={{ fill: 'transparent' }}
                    waveTextStyle={{ fill: 'transparent' }}
                />
            </div>

            {/* Overlay text */}
            <div className="relative inset-0 z-10 flex items-center justify-center px-6 h-full">
                {/* Background Number */}
                <div className="absolute left-4 text-[100px] font-extrabold text-white/10 z-0 leading-none">
                    {module.number}
                </div>

                {/* Foreground Content */}
                <div className="relative z-10 text-center">
                    <p className="text-base font-semibold text-white capitalize">Welcome to TrackPi</p>
                    <div className="text-sm text-white mt-1 flex items-center justify-center gap-2">
                        <span>{module.videos} Videos</span>
                        <span>|</span>
                        <span>{module.duration} Min</span>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default LiquidCard;
