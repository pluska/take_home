import React, { useEffect, useState } from 'react';
import './App.scss';

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
  console.log(commits)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {commits ? commits[0] : ''}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
