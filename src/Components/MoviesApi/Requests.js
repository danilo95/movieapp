import BackendApi from './MoviesApi';


export const newUser = (userEmail,userPassword) => {
  let result = BackendApi.post('api/register', {
    email: userEmail,
    password: userPassword
  }).then(response => {
      console.log(response.data)
      return response.data;
    })
    .catch(error => {
      console.log('errror',error)
      return error;
    });

  return result;
};

export const login = (userEmail,userPassword) => { 
  let result = BackendApi.post('/api/login', {
    email: userEmail,
    password: userPassword,
    headers: {
      'Content-Type': 'application/json',
  }
  }).then(response => {
      
      return response.data;
    })
    .catch(error => {
    
      return handleError(error)
    });

  return result;
};

const handleError = errorHttp => {
  switch (errorHttp.response.status) {
    case 400:
      return {status:400,message:"We dont found the information,please Try Again"};
    default:
      return {status:500,message:"Something Goes Wrong!! Pleaste try later"};
  }
};