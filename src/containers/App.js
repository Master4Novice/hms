import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Navbar from '../component/Navbar';

import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));
//import { Route } from 'react-router-dom';
//import Home from '../component/Home';
//import UserForm from '../component/UserRegistrationForm';
//import Template from '../component/Template';
//import dashboard from '../component/dashboard';
//import Doctor from '../component/doctor';
//import PatientRegistration from '../component/PatientRegistration';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          <Navbar />
          <Grid item xs={12}>
            hi
          </Grid>
      </Grid>
    </div>
  );
}

export default App;
