import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Navbar from '../component/header/Navbar';
import Home from '../component/home/Home';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  mainContents: {}
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    secondary: { main: '#11cb5f' },
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <ThemeProvider theme={theme}>
          <Navbar />
          <Grid item xs={12} classes={classes.mainContents}>
            <Home />
          </Grid>
      </ThemeProvider>    
      </Grid>
    </div>
  );
}

export default App;
