import axios from 'axios';
import { success, info, warning, error } from '../quick-view/quickViewAction';

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
          dispatch(info(`${username} is already taken`));
        } else {
          dispatch(info(`${username} is available`));
        }
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
        dispatch(error('Error In Validating Username'));
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
          dispatch(warning('User Already Exist'));
        } else {
          dispatch(success('User Registered Successfully'));
        }
      }
    })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
        dispatch(error('Error While Saving Data'));
      });
  };
}
