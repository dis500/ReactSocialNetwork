import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = [
  {id: 1, name: 'Igor'},
  {id: 2, name: 'Max'},
  {id: 3, name: 'Andrew'},
  {id: 4, name: 'Sam'}
]
ReactDOM.render(
  
  <React.StrictMode>
    <App param={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
