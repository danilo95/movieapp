import { newUser, login } from "../MoviesApi/Requests";
import History from "../History/History";

export const newUserApi = (user, email) => async dispatch => {
  console.log('usuario',user)
  const response = await newUser(user, email);
  dispatch({ type: "NEW_USER", payload: response });
};

export const loginUser = (user, email) => async dispatch => {
  const response = await login(user, email);
  if (response.status) {
    dispatch({ type: "LOGIN_ERRROR", payload: response });
  } else {
    History.push("/Homepage/Homepage");
  }
};
