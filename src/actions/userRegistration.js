import axios from 'axios';
import {modal} from 'react-redux-modal';
import UserDataComponent from '../component/UserDataComponent';
import AlertBox from '../component/AlertBox';

/**
 * our test action
 */
export function getDataAction() {
    return function(dispatch) {
        axios.get('http://localhost:6060/users')
            .then(response => {
                dispatch({
                    type: "GET_USER_DATA",
                    payload: response.data,
                });
                if(response.data===""){
                    dispatch({type:loadAlert("No user exist in our record")});
                }
                else{
                    dispatch({type:loadModal(response.data)});
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function saveUserDataAction(user){
    return function(dispatch) {
        axios({
            url:'http://localhost:6060/user/',
            data:user,
            method:"POST",
            responseType:"json"
        }).then(response => {
                dispatch({
                    type: "SAVE_USER_DATA",
                    payload: response.data.message,
                });
                dispatch({type:loadAlert(response.data.message)});
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function deleteUserDataAction(username){
    return function(dispatch) {
        axios({
            url:'http://localhost:6060/user/'+username,
            method:"DELETE",
            responseType:"json"
        }).then(response => {
            dispatch({
                type: "DELETE_USER_DATA",
                payload: response.data.message,
            });
            dispatch({type:loadAlert(response.data.message)});
        })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function updateUserDataAction(user){
    return function(dispatch) {
        axios({
            url:'http://localhost:6060/user/',
            data:user,
            method:"PUT",
            responseType:"json"
        }).then(response => {
            dispatch({
                type: "UPDATE_USER_DATA",
                payload: response.data.message,
            });
            dispatch({type:loadAlert(response.data.message)});
        })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function newUserDataAction(){
    return function(dispatch) {
        dispatch({
            type: "NEW_USER_DATA",
            payload: undefined,
        });
        dispatch({type:loadAlert("Ready to register new user")});
    }   
}

export function loadModal(users) {
    modal.add(
        UserDataComponent,
        {
            title: 'User Records',size: 'large',
            closeOnOutsideClick: true ,
            hideTitleBar: false ,
            hideCloseButton: false,
            users:users,
        });
    return "ADD_MODAL";
}

export function loadAlert(message) {
    modal.add(
        AlertBox,
        {
            title: 'Information',size: 'small',
            closeOnOutsideClick: true ,
            hideTitleBar: false ,
            hideCloseButton: false,
            message:message,
        });
    return "DISPLAY_ALERT_STATUS";
}