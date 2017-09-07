import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from '../component/Home';
import Navbar from '../component/Navbar';
import UserForm from '../component/UserRegistrationForm';
import Template from '../component/Template';

class App extends Component {
  render() {
    return (
      <div className="container">
         <Navbar context={this.context}/>
         <br/>
         <div className="row">
             <Route exact path="/" component={Home}/>
             <Route exact path="/users/registration" component={UserForm}/>
         </div>
      </div>
    );
  }
}

export default App;
