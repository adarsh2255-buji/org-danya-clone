import React from 'react';

const Background = () => {
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    overflow: 'hidden',
  };

  const ellipseStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #4C3030 0%, #7A4D2E 50%, #4E3130 100%)',
    zIndex: -1,
  };

  return (
    <div style={containerStyle}>
      <div style={ellipseStyle}></div>
    </div>
  );
};

export default Background;