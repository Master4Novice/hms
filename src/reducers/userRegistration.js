const initialState = {
    name: '',
    username: '',
    password: '',
    emailId: '',
    contactNumber: ''
};

const userRegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER_FORM_UPDATE":
            return Object.assign({}, state, { [action.key]: action.value });
        case "GET_USER_DATA":
            return state;
        default:
            return state;
    }
}

export default userRegistrationReducer;