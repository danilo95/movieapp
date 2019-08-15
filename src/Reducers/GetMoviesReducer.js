const initialState = {
  movies: [],
  moviesError: " "
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "MOVIES":
      return {
        ...state,
        movies: action.payload,
        moviesError: " "
      };
    case "GET_MOVIES_ERRROR":
      return {
        ...state,
        moviesError: action.payload
      };
    default:
      return state;
  }
};
