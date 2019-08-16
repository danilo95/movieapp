const initialState = {
  newUser: null,
  isLogin: false,
  email: null,
  loading: false,
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
        loading: false,
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
        loading: false
      };
    case "DEFAULT_ERROR":
      return {
        ...state,
        loginError: " "
      };
    case "IS_LOADING":
      return {
        ...state,
        loading: action.payload
      };
    case "RESET":
      return initialState;

    default:
      return state;
  }
};
