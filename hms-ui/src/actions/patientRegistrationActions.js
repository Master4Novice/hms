import axios from "axios";
//import querystring from "querystring";

export function fetchPatient(){


    return function(dispatch){

        const config = {
            method: 'get',
            url: 'http://localhost:6060/rest/getallpatients'
           /* headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
            }*/
        };
       // axios.request("http://localhost:8080/SpringRestExample/rest/emp/dummy",{
        /*axios.request("http://localhost:8080/SpringRestExample/rest/emp/dummy",{
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:8080',
                'Access-Control-Request-Method': 'POST, GET, OPTIONS',
                'crossdomain': true
            }
        })*/
        axios.request(config)
            .then((response) => {
                console.log("rohit");
                console.log(response.data);
                dispatch({type:"FETCH_PATIENT_FULFILLED", payload:response.data})
            })
            .catch((err) =>{
                dispatch({type:"FETCH_PATIENT_REJECTED", payload:err})
            })
    }
}

export function savePatient(patientId,name,fatherName,address,contactNo,emailId,age,gender,bloodGroup,remarks) {
    return function (dispatch) {
     /*   console.log("This name is", name);
        const querystring = require('querystring');
        //const dt = JSON.stringify({"data":{"value":"gdfg1df2g2121dgfdg"}});
        const dt = JSON.stringify({
            "data": {
                "patientId": 1,
                "name": "lksajdkasd",
                "fatherName": "fdsdfsd",
                "address": "vvvv",
                "contactNo": "234324",
                "emailId": "",
                "age": "",
                "gender": "",
                "bloodGroup": "",
                "remarks": ""
            }
        });
        const config = {
            method: 'post',
            url: 'http://localhost:8085/SpringRestExample/rest/savepatient',
            *//*data:{
             stringify("patientId":1,"name": "lksajdkasd","fatherName":"fdsdfsd","address":"vvvv","contactNo":"234324","emailId":"","age":"","gender":"","bloodGroup":"","remarks":"")
             },*//*
            "Content-Type": "application/x-www-form-urlencoded"

        }*/

        /* headers: {
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
         }*/

        /* axios.post(config,dt)
         .then((response) => {
         dispatch({type:"SAVE_PATIENT_FULFILLED", payload:response.data})
         })
         .catch((err) =>{
         dispatch({type:"SAVE_PATIENT_REJECTED", payload:err})
         })
         };*/

        axios({
            method: 'post',
            url: 'http://localhost:6060/rest/savepatient',
            data: {
                patientId: patientId,
                name: name,
                fatherName: fatherName,
                address: address,
                contactNo: contactNo,
                emailId: emailId,
                age: age,
                gender: gender,
                bloodGroup: bloodGroup,
                remarks: remarks
            }
            /*headers: {
             'Access-Control-Allow-Origin':'*',
             'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
             'Access-Control-Allow-Headers':'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
             }*/
        }).then((response) => {
            console.log("the response is:", response.data)
            dispatch({type: "SAVE_PATIENT_FULFILLED", payload: response.data})
        })
            .catch((err) => {
                dispatch({type: "SAVE_PATIENT_REJECTED", payload: err})
            })

        /*axios.request(config)
         .then((response) => {
         dispatch({type:"SAVE_PATIENT_FULFILLED", payload:response.data})
         })
         .catch((err) =>{
         dispatch({type:"SAVE_PATIENT_REJECTED", payload:err})
         })*/
        //const axios = require('axios');
        //axios.post('http://localhost:8080/SpringRestExample/rest/savepatient',querystring.stringify({patientId:'',name: '',fatherName:'',address:'',contactNo:'',emailId:'',age:'',gender:'',bloodGroup:'',remarks:''}))
        //axios.post('http://localhost:8080/SpringRestExample/rest/savepatient',{"patientId":1,"name": "lksajdkasd","fatherName":"fdsdfsd","address":"vvvv","contactNo":"234324","emailId":"","age":"","gender":"","bloodGroup":"","remarks":""})
        // axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        //axios.post('http://localhost:8080/SpringRestExample/rest/savepatient',querystring.stringify({"patientId":1,"name": "lksajdkasd","fatherName":"fdsdfsd","address":"vvvv","contactNo":"234324","emailId":"","age":"","gender":"","bloodGroup":"","remarks":""}),{headers: {


    }
}


export function deletePatient(id){
    return function(dispatch){

        //const config = {
        //    method: 'get',
        //    url: 'http://localhost:6060/rest/deletepatient',
         //   data:{
         //       'Id':id
         //   }
            /* headers: {
             'Access-Control-Allow-Origin': '*',
             'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
             }*/
       // };

        axios.get('http://localhost:6060/rest/deletepatient?Id=' + id)
            .then((response) => {
                dispatch({type:"DELETE_PATIENT_FULFILLED", payload:response.data})
            })
            .catch((err) =>{
                dispatch({type:"DELETE_PATIENT_REJECTED", payload:err})
            })
    }
}

export function updatePatient(patientId,name,fatherName,address,contactNo,emailId,age,gender,bloodGroup,remarks){
    return function(dispatch){

        console.log("This name is update");
        axios({
            method: 'post',
            url: 'http://localhost:6060/rest/updatepatient',
            data: {
                patientId: patientId,
                name: name,
                fatherName: fatherName,
                address: address,
                contactNo: contactNo,
                emailId: emailId,
                age: age,
                gender: gender,
                bloodGroup: bloodGroup,
                remarks: remarks
            }
            /*headers: {
             'Access-Control-Allow-Origin':'*',
             'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
             'Access-Control-Allow-Headers':'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
             }*/
        }).then((response) => {
            console.log("the response is:", response.data)
            dispatch({type: "UPDATE_PATIENT_FULFILLED", payload: response.data})
        })
            .catch((err) => {
                dispatch({type: "SAVE_PATIENT_REJECTED", payload: err})
            })


       /* const config = {
            method: 'get',
            url: 'http://localhost:8085/SpringRestExample/rest/updatepatient',
            data: id
            *//* headers: {
             'Access-Control-Allow-Origin': '*',
             'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
             }*//*
        };

        axios.post(config)
            .then((response) => {
                dispatch({type:"FETCH_PATIENT_FULFILLED", payload:response.data})
            })
            .catch((err) =>{
                dispatch({type:"FETCH_PATIENT_REJECTED", payload:err})
            })*/
    }
}

