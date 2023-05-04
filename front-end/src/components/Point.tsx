import React from 'react';

interface PointProps {
  title: string;
  x: number;
  y: number;
}

const Point: React.FC<PointProps> = ({ title, x, y }) => {
  return (
    <g style={{ zIndex: 2 }}>
      <circle cx={`${x}%`} cy={`${y}%`} r={10} style={{ fill: '#ff0000', zIndex: 3 }} />
      <text x={`${x}%`} y={`${y - 8}%`} textAnchor="middle" style={{ fill: '#fff', fontWeight: 'bold' }}>
        {title}
      </text>
    </g>
  );
};


export default Point
