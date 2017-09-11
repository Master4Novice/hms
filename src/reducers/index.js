import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import {reducer as modalReducer} from 'react-redux-modal'

import userRegistrationReducer from "./userRegistration";
import AuthReducer from './auth_reducer';
/**
 *Rohit Doctor Reducer
 **/
import {doctorReducer} from './doctorReducer';

const appReducer = combineReducers({
    userRegistration: userRegistrationReducer,
    router: routerReducer,
    auth: AuthReducer,
    modals: modalReducer,
    doctor:doctorReducer
});

const reducers = (state, action) => {
    if (action.type === 'NEW_USER_DATA'){
        state = undefined
      }
    return appReducer(state, action)
};

export default reducers;