import React, { useState } from 'react';

const Moving = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor:'blueviolet',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: position.y - 50, 
          left: position.x - 50, 
          width: '50px',
          height: '50px',
          backgroundColor: '#60A5FA',
          borderRadius: '50%',
          border: '5px solid #3B82F6',
          // pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default Moving;
