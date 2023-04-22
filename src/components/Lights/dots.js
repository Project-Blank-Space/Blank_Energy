import React from 'react';

const Dot = ({ color }) => (
  <div
    className={`h-2 w-2 rounded-full mx-1 ${color}`}
  />
);

const DotRow = ({ dotCount, dotColor,percentage }) => {
  const dots = Array.from(Array(dotCount).keys());

  return (
    <div className="flex items-center">
      {dots.map((dot) => (
        <Dot
          key={dot}
          color={dot <= dotCount / 10 * (percentage/10) - 1 ? 'bg-white' : dotColor}
        />
      ))}
    </div>
  );
};

export default DotRow;



