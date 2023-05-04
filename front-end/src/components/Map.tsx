import React from 'react';
import Point from './Point';



interface PointsData {
  title: string;
  x: number;
  y: number;
}


type MapProps = {
  points: PointsData[];
};

const Map: React.FC<MapProps> = ({points}) => {
  return (
    <svg width="70%" height="80vh">
      <rect width="100%" height="100%" fill="#03C988" />
      <g>
      {points.map((circle, index) => (
        <Point key={index} title={circle.title} x={circle.x} y={circle.y} />
      ))}
      </g>
    </svg>
  );
}

export default Map;
