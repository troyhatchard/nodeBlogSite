import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Splash.css'
import Splash from './Splash';
import Hello from './Hello';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

const navLinks = [
  {name:"Google", link:"google.ca"},
  {name:"Facebook", link:"facebook.com"}
]

ReactDOM.render(
  <React.StrictMode>
    <Splash/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
