import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
    container: {}
};

const Home = (props) => <div>
            <Typography variant="h5" component="h3">
                Welcome
            </Typography>
            <br /><br />
            <Typography component="p">
                Welcome to the hospital management system. Thank you for using the Web application.
            </Typography>
</div>

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);