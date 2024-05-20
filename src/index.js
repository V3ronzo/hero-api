import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Move the Content-Security-Policy meta tag to the head of your HTML file
// <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
