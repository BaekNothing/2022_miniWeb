import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect } from 'react';


//https://velog.io/@autumndr3ams/210802-React-Node.jsexpress-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0

function App() {
    const callApi = async () => {
        axios.get("http://localhost:8080").then((res) => { console.log(res) });
        axios.get("/api").then((res) => { console.log(res) });
    };

    useEffect(() => {
        callApi();
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
