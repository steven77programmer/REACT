import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
//import "https://cdn.jsdelivr.net/npm/react-mde@11.5.0/lib/styles/css/react-mde-all.css";
import './style.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
