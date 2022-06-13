import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import create from 'zustand';

const Counter = create((set) => ({
  number : 0,
  setNumber : (number) => set({number})
}))

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
          console.log(response.data.test); 
          setString(response.data.test);
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
