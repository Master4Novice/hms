export default function reducer(state={
    patients:[],
    saveMsg:'',
    fetching:false,
    fected: false,
    error: null,
},action){
    switch(action.type){
        case "FETCH_PATIENT": {
            return {state, fetching: true}
            break;
        }
        case "FETCH_PATIENT_REJECTED": {
            return {state, fetching: false,  error: action.payload}
            break;
        }
        case "FETCH_PATIENT_FULFILLED":
        {
            return {state, fetching: false, fetched: true, patients: action.payload}
            break;
        }
        case "SAVE_PATIENT_REJECTED": {
            return {state, fetching: false,  error: action.payload}
            break;
        }
        case "SAVE_PATIENT_FULFILLED":
        {
            return {state, fetching: false, fetched: true, patients: action.payload}
            break;
        }
        case "UPDATE_PATIENT_REJECTED": {
            return {state, fetching: false,  error: action.payload}
            break;
        }
        case "UPDATE_PATIENT_FULFILLED":
        {
            return {state, fetching: false, fetched: true, patients: action.payload}
            break;
        }
        case "DELETE_PATIENT_REJECTED": {
            return {state, fetching: false,  error: action.payload}
            break;
        }
        case "DELETE_PATIENT_FULFILLED":
        {
            return {state, fetching: false, fetched: true, patients: action.payload}
            break;
        }

    }

    return state;
}
