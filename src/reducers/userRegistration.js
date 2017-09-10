const initialState = {
    name: '',
    username: '',
    password: '',
    emailId: '',
    contactNumber: '',
    user:{
        name:'',
        username:'',
        password:'',
        emailId:'',
        contactNumber:''
    },
    users:[],
    status:''
};

const userRegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER_FORM_UPDATE":
            return Object.assign({}, state, { [action.key]: action.value });
        case "GET_USER_DATA":
            return { ...state, users: action.payload };
        case "SAVE_USER_DATA":
            return { ...state, status: action.payload };
        case "DELETE_USER_DATA":
            return { ...state, status: action.payload };
        case "UPDATE_USER_DATA":
            return { ...state, status: action.payload };
        case "NEW_USER_DATA":
            return state;       
        default:
            return state;
    }
}

export default userRegistrationReducer;