import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import NewUserReducer from "./NewUserReducer";
import GetMoviesReducer from "./GetMoviesReducer";
export default combineReducers({
  form: formReducer,
  newUser: NewUserReducer,
  movies: GetMoviesReducer
});
