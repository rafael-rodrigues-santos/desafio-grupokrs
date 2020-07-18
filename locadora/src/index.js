import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Menu from '../src/components/menu/menu.jsx';
import Add from '../src/components/add/add.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Menu />
    <Add />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
