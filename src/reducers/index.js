import { combineReducers } from "redux";

import userRegistrationReducer from "./userRegistration";
import AuthReducer from './auth_reducer';
/**
 *Rohit Doctor Reducer
 **/
import {doctorReducer} from './doctorReducer';
/**Bhabani Reducer
 * */
import patientReducer from '../reducers/patientRegistration-reducer';

const appReducer = combineReducers({
    userRegistration: userRegistrationReducer,
    auth: AuthReducer,
    doctor:doctorReducer,
    patients:patientReducer
});

const reducers = (state, action) => {
      if (action.type === 'NEW_USER_DATA'){
        state = undefined
      }
    return appReducer(state, action)
};

export default reducers;