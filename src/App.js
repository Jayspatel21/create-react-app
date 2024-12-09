import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setCount(parseInt(storedCount, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You clicked {count} times
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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


