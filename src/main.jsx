import React from 'react';
import ReactDOM from 'react-dom'; // Modified this line
import App from './App.jsx';
import './index.css';

ReactDOM.render( // Modified this line
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);