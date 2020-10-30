/* eslint-disable func-names */
/* eslint-disable no-console */
import axios from 'axios';

axios.defaults.headers = { Pragma: 'no-cache' };

export function validateUsername(username) {
  return function (dispatch) {
    axios({
      method: 'GET',
      url: `/api/validateUsername/${username}`,
      credentials: 'same-origin'
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: 'IS_VALID_USER',
            payload: true,
          });
        } else {
          dispatch({
            type: 'IS_VALID_USER',
            payload: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function saveUserDataAction(user) {
  const userData = {
    userId: user.username,
    userPassword: user.password,
    userFirstName: user.fname,
    userMiddleName: user.mname,
    userSurName: user.sname,
    userEmailId: user.emailId,
    contactNumber: user.contactNumber,
    userStatus: 'A'
  };
  return function (dispatch) {
    axios({
      method: 'POST',
      url: '/api/user/save',
      data: userData,
      credentials: 'same-origin'
    }).then((response) => {
      if (response.status === 200) {
        if (response.data.message === 'User Exist') {
          dispatch({
            type: 'IS_USER_DATA_SAVED',
            payload: false,
          });
        } else {
          dispatch({
            type: 'IS_USER_DATA_SAVED',
            payload: true,
          });
        }
      }
    })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function deleteUserDataAction(username) {
  return function (dispatch) {
    axios({
      url: `http://localhost:6060/user/${username}`,
      method: 'DELETE',
      responseType: 'json',
    }).then((response) => {
      dispatch({
        type: 'DELETE_USER_DATA',
        payload: response.data.message,
      });
    })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updateUserDataAction(user) {
  return function (dispatch) {
    axios({
      url: 'http://localhost:6060/user/',
      data: user,
      method: 'PUT',
      responseType: 'json',
    }).then((response) => {
      dispatch({
        type: 'UPDATE_USER_DATA',
        payload: response.data.message,
      });
    })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function newUserDataAction() {
  return function (dispatch) {
    dispatch({
      type: 'NEW_USER_DATA',
      payload: undefined,
    });
  };
}
