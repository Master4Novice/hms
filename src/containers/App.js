import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from '../component/Home';
import Navbar from '../component/Navbar';
import UserForm from '../component/UserRegistrationForm';
//import Template from '../component/Template';
import dashboard from '../component/dashboard';
import Doctor from '../component/doctor';

class App extends Component {
  render() {
    return (
      <div className="container">
         <Navbar context={this.context}/>
         <br/>
         <div className="row">
             <Route exact path="/" component={Home}/>
             <Route exact path="/users/registration" component={UserForm}/>
             <Route exact path="/help" component={dashboard}/>
             <Route exact path="/doctor/profile" component={Doctor}/>
         </div>
      </div>
    );
  }
}

export default App;
