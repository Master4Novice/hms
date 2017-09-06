import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import Navbar from '../component/Navbar';
import Template from '../component/Template';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Navbar />
         <br/>
         <Template />
      </div>
    );
  }
}

export default App;
