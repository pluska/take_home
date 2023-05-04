import React from 'react';
import Point from './Point';
import Path from './Path';
import * as d3 from "d3";



interface PointsData {
  title: string;
  x: number;
  y: number;
}


type MapProps = {
  points: PointsData[];
};

const Map: React.FC<MapProps> = ({points}) => {
    const map = document.getElementById('map');
    let d;
    if (map) {
      const pointsInPixels = points.map(({ x, y }) => ({
        x: map.clientWidth * (x / 100),
        y: map.clientHeight * (y / 100),
      }));
        d = d3.line<{ x: number; y: number; }>()
      .x(d => d.x)
      .y(d => d.y)
      .curve(d3.curveCardinal)(pointsInPixels);
    }
  return (
    <svg id='map' width="70%" height="80vh">
      <rect width="100%" height="100%" fill="#03C988" />
      <Path path={d ? d : ''}/>
      <g>
      {points.map((circle, index) => (
        <Point key={index} title={circle.title} x={circle.x} y={circle.y} />
      ))}
      </g>

    </svg>
  );
}

export default Map;
