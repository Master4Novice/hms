import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    container: {}
};

const Home = (props) => <Grid container spacing={3} className={props.classes.container}>
    <Grid item xs={2} />
    <Grid item xs={8}>
        <Paper>
            <Typography variant="h5" component="h3">
                Welcome
            </Typography>
            <br /><br />
            <Typography component="p">
                Welcome to the hospital management system. Thank you for using the application.
            </Typography>
        </Paper>
    </Grid>
    <Grid item xs={2} />
</Grid>

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);