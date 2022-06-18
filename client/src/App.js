import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import PageRender from './PageManager'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <NumberCount></NumberCount>
        <SyncCount></SyncCount>
        <StringState></StringState> */}
        <PageRender></PageRender>
      </header>
    </div>
  );
}

export default App;
