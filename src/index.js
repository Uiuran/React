import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//const rootRedirect = document.getElementById('redirect-button');
//const rootButtonRedirect = ReactDOM.createRoot(rootRedirect);
//rootButtonRedirect.render(React.createElement(RedirectButton));

//const rootNode = document.getElementById('like-button-root');
//const rootButton = ReactDOM.createRoot(rootNode);
//rootButton.render(React.createElement(LikeButton));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App></App>
    </ BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
