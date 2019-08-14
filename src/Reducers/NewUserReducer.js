const initialState = {
  newUser: null,
  isLogin: false,
  email: null,
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
        isLogin: true,
        loginError: " "
      };
    case "GET_SESSION_EMAIL":
      return {
        ...state,
        email: action.payload
      };
    case "LOGIN_ERRROR":
      return {
        ...state,
        loginError: action.payload
      };
      case "RESET":
      return initialState;
      
    default:
      return state;
  }
};
