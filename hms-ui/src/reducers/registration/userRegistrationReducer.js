const INITIAL_STATE = {
  name: '',
  username: '',
  password: '',
  emailId: '',
  contactNumber: '',
};

const userRegistrationReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'REGISTER_USER':
      return { ...state, payload };
    default:
      return state;
  }
};

export default userRegistrationReducer;
