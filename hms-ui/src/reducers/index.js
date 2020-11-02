import { combineReducers } from 'redux';

import userRegistrationReducer from './registration/userRegistrationReducer';
import quickViewReducer from './quick-view/quickViewReducer';

const hmsReducers = combineReducers({
  userRegistration: userRegistrationReducer,
  quickView: quickViewReducer,
});

export default hmsReducers;
