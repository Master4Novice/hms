const INITIAL_STATE = {
  dataSaved: null,
  validUser: null
};

const userRegistrationReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'IS_USER_DATA_SAVED':
      return { ...state, dataSaved: payload };
    case 'IS_VALID_USER':
      return { ...state, validUser: payload };
    default:
      return state;
  }
};

export default userRegistrationReducer;
