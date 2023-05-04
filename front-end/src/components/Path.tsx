import React from 'react';


interface PathProps {
  path:string
}

const Path: React.FC<PathProps> = ({ path }) => {
  return (
    <path d={path} stroke="#fff" fill="none" strokeWidth="25" />
  );
};

export default Path;
