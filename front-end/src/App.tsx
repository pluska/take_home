import React, { useEffect, useState } from 'react';
import './App.scss';
import Map from './components/Map';


function App() {

  const [commits, setCommits] = useState(null)

  useEffect(() => {
    const getCommits = async () => {
      try {
        const response = await fetch('http://localhost:3000/commits');
        const data = await response.json();
        const points: any = []
        data.forEach((commit:string, index:number) => {
          const x = (index % 2 === 0) ? 17 : 80
          const y = 15 + index * 15
          points.push({
            index,
            title: commit,
            x,
            y,
          })
        });

        setCommits(points);
      } catch (error) {
        console.log(error);
      }
    };
    getCommits()
  }, [])
  return (
    <>
      <div className='title'>
        <h1>Take Home</h1>
      </div>
      <div className='map'>
        <Map points={commits ? commits : []} />
      </div>
    </>
  );
}

export default App;
