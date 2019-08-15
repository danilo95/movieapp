const initialState = {
  newUser: null,
  isLogin: false,
  email: null,
  loading:true,
  loginError: " "
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "NEW_USER":
      return {
        ...state,
        newUser: action.payload,
        loading:false
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
        loginError: action.payload,
      };
      case "DEFAULT_ERROR":
      return {
        ...state,
        loginError: " "
      };
      case "RESET":
      return initialState;
      
    default:
      return state;
  }
};
