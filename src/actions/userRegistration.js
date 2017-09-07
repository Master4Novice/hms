import axios from 'axios';
//import { TEST_ACTION } from './types';

//const API_URL = 'http://localhost:6060/users';

//export function testAction() {
  //  return function(dispatch) {
   //     axios.get(`${API_URL}`)
    //        .then(response => {
      //          dispatch({
      //              type: TEST_ACTION,
       //             payload: response.data
       //         });
       //     })
       //     .catch((error) => {
        //        console.log(error);
        //    })
  //  }
//}

export function getData(){
    (dispatch) =>{
        dispatch({type:"GET_USER_DATA"})
        axios.get("http://localhost:6060/users")
            .then((response) => {
                dispatch({type:"GET_USER_DATA", payload:response.data})
            })
            .catch((err) =>{
                dispatch({type:"GET_USER_DATA_REJECTED", payload:err})
            })
    };
}

export function saveData(username){
    return{
        type: "SAVE_USER_DATA",
    };
}

export function newData(){
    return{
        type: "NEW_USER_DATA",
    };
}

export function deleteData(username){
    return{
        type: "DELETE_USER_DATA",
        payload: username
    };
}

export function updateData(username){
    return{
        type: "UPDATE_USER_DATA",
        payload: username
    };
}