/* eslint-disable no-console */
/* eslint-disable func-names */
import axios from 'axios';

export function getDataAction() {
  return function (dispatch) {
    axios.get('http://localhost:6060/users')
      .then((response) => {
        dispatch({
          type: 'GET_USER_DATA',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function saveUserDataAction(user) {
  return function (dispatch) {
    axios({
      url: 'http://localhost:6060/user/',
      data: user,
      method: 'POST',
      responseType: 'json',
    }).then((response) => {
      dispatch({
        type: 'SAVE_USER_DATA',
        payload: response.data.message,
      });
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
