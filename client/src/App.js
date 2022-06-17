import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import create from 'zustand';
import PageRender from './PageManager'

const Counter = create((set) => ({
  number : 0,
  setNumber : (number) => set({number})
}))


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NumberCount></NumberCount>
        <SyncCount></SyncCount>
        <StringState></StringState>
        <PageRender></PageRender>
      </header>
    </div>
  );
}

function NumberCount() {
  const {number, setNumber} = Counter();
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  );
}

function SyncCount() {
  const {number, setNumber} = Counter();
  return (
    <div>
      <h1>{number}</h1>
    </div>
  )
}

const stringState = create((set) => ({
  string : "",
  setString : (string) => set({string})
}))

function StringState() {
  
  const {string, setString} = stringState();

  useEffect(() => {
    axios.get('http://localhost:8080')
        .then(function (response) {
          console.log(response);
          console.log(response.data[0].name);
          setString(response.data[0]?.name??"noData");
        })
        .catch(function (error) { console.log(error); })
  }, [setString])

  return (
    <div>
      <h1>{string}</h1>
      {/* <input type="text" value={string} onChange={(e) => setString(e.target.value)} /> */}
    </div>
  )
}

export default App;
