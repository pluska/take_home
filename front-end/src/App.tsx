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
        setCommits(data);
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
        <Map/>
      </div>
    </>
  );
}

export default App;
