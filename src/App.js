// src/App.js
import React from 'react';
import Stopwatch from './Stopwatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stopwatch</h1>
      </header>
      <main>
        <Stopwatch />
      </main>
    </div>
  );
}

export default App;
