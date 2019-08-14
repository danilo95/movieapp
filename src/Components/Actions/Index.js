import { newUser, login,getMovies } from "../MoviesApi/Requests";
import History from "../History/History";

export const newUserApi = (user, password) => async dispatch => {
  const response = await newUser(user, password);
  if (response.status) {
    dispatch({ type: "LOGIN_ERRROR", payload: response });
  } else {
    dispatch({ type: "NEW_USER", payload: response });
  }
};

export const loginUser = (user, password) => async dispatch => {
  const response = await login(user, password);
  if (response.status) {
    dispatch({ type: "LOGIN_ERRROR", payload: response });
  } else {
    dispatch({ type: "GET_SESSION_EMAIL", payload: user });
    dispatch({ type: "LOGIN" });
    localStorage.setItem("token", JSON.stringify(response.token));
    History.push("/Homepage/Homepage");
  }
};

export const reset = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({ type: "RESET" });
  History.push("/");
};

export const defaultError = () => dispatch => {
  dispatch({ type: "DEFAULT_ERROR" });
};


export const getPopularMovies = () => async dispatch => {
  const response = await getMovies();
  if (response.status) {
    dispatch({ type: "GET_MOVIES_ERRROR", payload: response });
  } else {
    dispatch({ type: "MOVIES", payload: response });
  }
};
