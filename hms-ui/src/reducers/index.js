import { combineReducers } from 'redux';

import userRegistrationReducer from './registration/userRegistrationReducer';

const hmsReducers = combineReducers({
  userRegistration: userRegistrationReducer,
});

export default hmsReducers;
