const initialState = {
  newUser: null,
  loginResponse: null,
  loginError: " "
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "NEW_USER":
      return {
        ...state,
        newUser: action.payload
      };
    case "LOGIN":
      return {
        ...state,
        loginResponse: action.payload
      };
    case "LOGIN_ERRROR":
      return {
        ...state,
        loginError: action.payload
      };
    default:
      return state;
  }
};
