import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import PageRender from './PageManager'

function App() {
  return (
    <div className="App">
          <header className="App-header">
              <PageRender></PageRender>
        </header>
    </div>
  );
}

export default App;
