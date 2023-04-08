import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
(
    <React.StrictMode>
        <Metatags />
        <App />
    </React.StrictMode>
);

function Metatags(){
    return (
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="내 인생은 몇 등급일까? 나의 자본 계급 측정 테스트" />
            <meta name="author" content="4D1C3H" />
            <link rel="icon" href="favicon.ico" />
            <meta property="og:url" content="https://lifesohard.com" />
            <meta property="og:title" content="인생 난이도 테스트" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="link.jpg" />
            <meta property="og:description" content="내 인생은 몇 등급일까? 나의 자본 계급 측정 테스트" />
        </head>
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
