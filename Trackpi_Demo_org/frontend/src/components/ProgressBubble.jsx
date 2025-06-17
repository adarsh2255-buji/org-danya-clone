import React from 'react';
import '../components/styles/ProgressBubble.css'; // Ensure you have the correct path to your CSS file

const ProgressBubble = ({ totalSections, completedSections = 0 }) => {
  return (
    <div className="progress-wrapper vertical">
      {Array.from({ length: totalSections }).map((_, index) => (
        <React.Fragment key={index}>
          {/* Large Bubble */}
          <div
            className={`circle-gradient-border ${
              index < completedSections ? 'completed' : ''
            }`}
          ></div>

          {/* Pipe with inner bubbles */}
          {index < totalSections - 1 && (
            <div
              className={`line ${
                index < completedSections - 1 ? 'completed' : ''
              }`}
            >
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="inner-circle"></div>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBubble;
