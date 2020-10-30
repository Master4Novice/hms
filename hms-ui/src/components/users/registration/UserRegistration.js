/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ReplayIcon from '@material-ui/icons/Replay';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '../../alerts/Alert';
import PMessage from '../../messages/PMessage';
import UMessage from '../../messages/UMessage';

import { validateUsername, saveUserDataAction } from '../../../actions';

function UserRegistration() {
  const {
    register, handleSubmit, errors, reset
  } = useForm();

  const dispatch = useDispatch();
  const { validUser, dataSaved } = useSelector((state) => state.userRegistration);

  const onUserNameChange = (e) => {
    const { value } = e.target;
    if (value && value.length >= 8 && value.length <= 16) {
      dispatch(validateUsername(value));
    }
  };

  const onSubmit = (data) => {
    dispatch(saveUserDataAction(data));
  };

  const handleCloseUserWarn = () => {
    dispatch({
      type: 'IS_VALID_USER',
      payload: !validUser,
    });
  };

  const handleCloseUserSubmitWarn = () => {
    dispatch({
      type: 'IS_USER_DATA_SAVED',
      payload: !dataSaved,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <TextField
                  error={!!errors.fname}
                  id="fname"
                  name="fname"
                  label="First Name"
                  fullWidth
                  inputRef={register({
                    required: { value: true, message: 'First Name is required' },
                    pattern: { value: /^[A-Za-z]+$/i, message: 'Invalid First Name' }
                  })}
                  helperText={errors?.fname?.message}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  error={!!errors.mname}
                  id="mname"
                  name="mname"
                  label="Middle Name (If any)"
                  fullWidth
                  inputRef={register({
                    pattern: { value: /^[A-Za-z]*[\w ]+$/i, message: 'Invalid Middle Name' }
                  })}
                  helperText={errors?.mname?.message}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  error={!!errors.sname}
                  id="sname"
                  name="sname"
                  label="Surname Name"
                  fullWidth
                  inputRef={register({
                    required: { value: true, message: 'Surname Name is required' },
                    pattern: { value: /^[A-Za-z]+$/i, message: 'Invalid Surname Name' }
                  })}
                  helperText={errors?.sname?.message}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <TextField
                  error={!!errors.contactNumber}
                  id="contactNumber"
                  name="contactNumber"
                  label="Contact Number"
                  fullWidth
                  inputRef={register({
                    required: { value: true, message: 'Contact Number is required' },
                    pattern: { value: /^[0-9]+$/i, message: 'Inavlid Contact Number' },
                    minLength: { value: 10, message: 'Less then 10 digits not allowed' },
                    maxLength: { value: 12, message: 'More then 12 digits not allowed' }
                  })}
                  helperText={errors?.contactNumber?.message}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  error={!!errors.emailId}
                  id="emailId"
                  name="emailId"
                  label="Email ID"
                  fullWidth
                  inputRef={register({
                    required: { value: true, message: 'Email ID is required' },
                    pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i, message: 'Invalid Email ID' }
                  })}
                  helperText={errors?.emailId?.message}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <TextField
                  error={!!errors.username}
                  id="username"
                  name="username"
                  label="Username"
                  fullWidth
                  inputRef={register({
                    required: { value: true, message: 'Username is required' },
                    pattern: { value: /^(?=.*\d)(?=.*[_@.])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/, message: 'Invalid Username Taken' }
                  })}
                  onChange={(e) => onUserNameChange(e)}
                  helperText={errors?.username?.message}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  error={!!errors.password}
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  inputRef={register({
                    required: { value: true, message: 'Password is required' },
                    pattern: { value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message: 'Password is not valid' }
                  })}
                  helperText={errors?.password?.message}
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
                  disabled={Object.keys(errors).length !== 0}
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
                  onClick={() => reset()}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3} />
          <Grid item xs={6}>
            { errors?.username ? <div style={{ marginTop: '2em' }}><Alert severity="info"><UMessage /></Alert></div> : '' }
          </Grid>
          <Grid item xs={3} />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3} />
          <Grid item xs={6}>
            { errors?.password ? <div style={{ marginTop: '2em' }}><Alert severity="info"><PMessage /></Alert></div> : '' }
          </Grid>
          <Grid item xs={3} />
        </Grid>
        { validUser && (
        <Snackbar open={validUser} autoHideDuration={6000} onClose={handleCloseUserWarn}>
          <Alert onClose={handleCloseUserWarn} severity="warning">Username Already Taken!</Alert>
        </Snackbar>
        ) }
        { dataSaved && (
        <Snackbar open={dataSaved} autoHideDuration={6000} onClose={handleCloseUserSubmitWarn}>
          <Alert onClose={handleCloseUserSubmitWarn} severity="warning">Username Already Taken!</Alert>
        </Snackbar>
        ) }
      </form>
    </div>
  );
}

export default UserRegistration;
