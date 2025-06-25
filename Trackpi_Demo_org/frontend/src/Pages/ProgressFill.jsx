
import React, { useState } from 'react';
import LiquidFillGauge from 'react-liquid-gauge';
import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';

const ProgressFill = () => {
   const [value, setValue] = useState(50);

  const startColor = '#6495ed'; // cornflowerblue
  const endColor = '#dc143c';   // crimson

  const interpolate = interpolateRgb(startColor, endColor);
  const fillColor = interpolate(value / 100);

  const gradientStops = [
  {
    key: '0%',
    stopColor: 'rgba(23, 0, 94, 0.7)',
    stopOpacity: 1,
    offset: '4.9%'
  },
  {
    key: '100%',
    stopColor: 'rgba(255, 157, 0, 0.7)',
    stopOpacity: 1,
    offset: '56.52%'
  }
  ];

  const radius = 100;

  return (
    <div>
      <LiquidFillGauge
        style={{ margin: '0 auto',  }}
        width={radius * 2}
        height={radius * 2}
        value={value}
        percent="%"
        textSize={1}
        textOffsetX={0}
        textOffsetY={0}
        textRenderer={(props) => {
          const val = Math.round(props.value);
          const radius = Math.min(props.height / 2, props.width / 2);
          const textPixels = (props.textSize * radius / 2);
          const valueStyle = {
            fontSize: textPixels
          };
          const percentStyle = {
            fontSize: textPixels * 0.6
          };

          return (
            <tspan>
              <tspan className="value" style={valueStyle}>{val}</tspan>
              <tspan style={percentStyle}>{props.percent}</tspan>
            </tspan>
          );
        }}
        riseAnimation
        waveAnimation
        waveFrequency={2}
        waveAmplitude={1}
        gradient
        gradientStops={gradientStops}
        circleStyle={{
          fill: fillColor
        }}
        waveStyle={{ fill: 'url(#gradient)' }} 
        textStyle={{
          fill: color('#444').toString(),
          fontFamily: 'Arial'
        }}
        waveTextStyle={{
          fill: color('#fff').toString(),
          fontFamily: 'Arial'
        }}
        onClick={() => {
          setValue(Math.random() * 100);
        }}
      />
      
    </div>
  );
}

export default ProgressFill