import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClassComponent from './ClassComponent';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* 숫자를 중괄호.. 놓쳤다 */}
    {/* 태그 사이에 문자를 children으로 보낼 수 있다 */}
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
