import BackendApi from "./MoviesApi";

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

const handleError = errorHttp => {
  switch (errorHttp.response.status) {
    case 400:
      return { status: 400, message: errorHttp.response.data.error };
    default:
      return { status: 500, message: errorHttp.response.data.error };
  }
};
