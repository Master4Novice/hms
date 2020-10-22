/* eslint-disable react/prop-types */
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ReplayIcon from '@material-ui/icons/Replay';
import TextField from '@material-ui/core/TextField';

function UserRegistration({ handleSubmit, isSubmitting }) {
  // eslint-disable-next-line no-console

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="emailId"
                  name="emailId"
                  label="Email ID"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="contactNumber"
                  name="contactNumber"
                  label="Contact Number"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <TextField
                  id="username"
                  name="username"
                  label="User Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  disabled={isSubmitting}
                  endIcon={<AddCircleIcon />}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  endIcon={<ReplayIcon />}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default UserRegistration;
