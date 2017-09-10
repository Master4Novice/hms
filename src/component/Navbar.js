import React from 'react';
import {connect} from "react-redux";
import { push } from "react-router-redux";

let Navbar = (props) => (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
         <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <a className="navbar-brand" to="/" onClick={props.navigateTo.bind(this, '/')}>Hospital Management System</a>
         <div className="collapse navbar-collapse" id="navbarNavDropdown">
         <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" to="/" onClick={props.navigateTo.bind(this, '/')}>Home</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Master
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" to="/master/ward" onClick={props.navigateTo.bind(this, '/master/ward')}>Ward</a>
                  <a className="dropdown-item" to="/master/room" onClick={props.navigateTo.bind(this, '/master/room')}>Room</a>
                  <a className="dropdown-item" to="/master/nurse" onClick={props.navigateTo.bind(this, '/master/nurse-wardboy')}>Nurse/Wardboy</a>
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Users
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" to="/users/registration" onClick={props.navigateTo.bind(this, '/users/registration')}>Registration</a>
                  <a className="dropdown-item" to="/users/chngpass" onClick={props.navigateTo.bind(this, '/users/chngpass')}>Change Password</a>
                  <a className="dropdown-item" to="/users/logindetails" onClick={props.navigateTo.bind(this, '/users/logindetails')}>Login Details</a>
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Doctor
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" to="/doctor/profile" onClick={props.navigateTo.bind(this, '/doctor/profile')}>Profile Entry</a>
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Patient
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" to="/patient/registration" onClick={props.navigateTo.bind(this, '/patient/registration')}>Registration</a>
                  <a className="dropdown-item" to="/patient/services" onClick={props.navigateTo.bind(this, '/patient/services')}>Services</a>
                  <a className="dropdown-item" to="/patient/admit" onClick={props.navigateTo.bind(this, '/patient/admit')}>Admit</a>
                  <a className="dropdown-item" to="/patient/discharge" onClick={props.navigateTo.bind(this, '/patient/discharge')}>Discharge</a>
                  <a className="dropdown-item" to="/patient/billing" onClick={props.navigateTo.bind(this, '/patient/billing')}>Billing</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" to="/help" onClick={props.navigateTo.bind(this, '/help')}>Help</a>
            </li>
          </ul>
          </div>
    </nav>
)

const state = (state, ownProps = {}) => {
    return {
        location: state.location
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    navigateTo: (location) => {
        dispatch(push(location));
    }
});

export default connect(state, mapDispatchToProps)(Navbar);