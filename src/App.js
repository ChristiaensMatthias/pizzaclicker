import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cookie from './components/Cookie';
import Shop from './components/Shop';

//GLOBAL STATS
let cName = "cookie";
let expirationAmount = 365;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Shop cookieName={cName} expirationDate={expirationAmount}/>
        <Cookie cookieName={cName} expirationDate={expirationAmount}/>

      </div>
    );
  }
}

export default App;
