export default function reducer(state={
    patients:[],
    saveMsg:'',
    fetching:false,
    fected: false,
    error: null,
},action){
    switch(action.type){
        case "FETCH_PATIENT":
            return {state, fetching: true};
        case "FETCH_PATIENT_REJECTED":
            return {state, fetching: false,  error: action.payload};
        case "FETCH_PATIENT_FULFILLED":
            return {state, fetching: false, fetched: true, patients: action.payload};
        case "SAVE_PATIENT_REJECTED":
            return {state, fetching: false,  error: action.payload};
        case "SAVE_PATIENT_FULFILLED":
            return {state, fetching: false, fetched: true, patients: action.payload};
        case "UPDATE_PATIENT_REJECTED":
            return {state, fetching: false,  error: action.payload};
        case "UPDATE_PATIENT_FULFILLED":
            return {state, fetching: false, fetched: true, patients: action.payload};
        case "DELETE_PATIENT_REJECTED":
            return {state, fetching: false,  error: action.payload};
        case "DELETE_PATIENT_FULFILLED":
            return {state, fetching: false, fetched: true, patients: action.payload};

        default: break;

    }

    return state;
}
