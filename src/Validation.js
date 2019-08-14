let error;
export const email = value => {
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? (error = "Invalid email address")
    : (error = false);
  return error;
};

export const required = value => {
  !value ? (error = "Required") : (error = false);
  return error;
};

export const emailCheck = (value,preValue) => {
  value===preValue ? (error =false):(error = "the emails are not similar ");
  return error;
};

export const numberValidation=(value)=>{ 
  if (!value) {
    error = 'Required'
  } 
else if (isNaN(Number(value))) {
    error = 'Must be a number'
  } else if (Number(value) <= 8) {
    error = 'probably this is not a valid number....'
  }else{
    error =false
  }
  return error
}