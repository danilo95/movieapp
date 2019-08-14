import BackendApi from "./AuthApi";
import MovieApi from "./MoviesApi";

export const newUser = (userEmail, userPassword) => {
  let result = BackendApi.post("/api/register", {
    email: userEmail,
    password: userPassword,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return handleError(error);
    });

  return result;
};

export const login = (userEmail, userPassword) => {
  let result = BackendApi.post("/api/login", {
    email: userEmail,
    password: userPassword,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return handleError(error);
    });

  return result;
};
export const getMovies = () => {
  let result = MovieApi.get(`/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then(response => {
      console.log(response.data.results)
      return response.data.results;
    })
    .catch(error => {
      return handleError(error);
    });

  return result;
};



const handleError = errorHttp => {
  switch (errorHttp.response.status) {
    case 400:
      return { status: 400, message: errorHttp.response.data.error };
    default:
      return { status: 500, message: errorHttp.response.data.error };
  }
};
