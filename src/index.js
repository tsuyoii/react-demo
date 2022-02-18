import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicRoute from './router/router';
// import store from './store'

ReactDOM.render(
  <BasicRoute/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


//If you want your app to work offline and load faster,you can change
//unregister() to register() below.Note this.comes with some pitfalls.
//Learn more about service workers:http://bit.ly/CRA_PWA
// serviceWorker.unregister()
