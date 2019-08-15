let error;
export const emailValidation = value => {
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? (error = "Invalid email address")
    : (error = false);
  return error;
};

export const required = value => {
  !value ? (error = "Required") : (error = false);
  return error;
};

export const passCheck = (value, preValue) => {
  value === preValue
    ? (error = false)
    : (error = "the passwords are not similar ");
  return error;
};

export const numberValidation = value => {
  if (!value) {
    error = "Required";
  } else if (isNaN(Number(value))) {
    error = "Must be a number";
  } else if (Number(value) <= 8) {
    error = "probably this is not a valid number....";
  } else {
    error = false;
  }
  return error;
};

export const inputValidationLength = value => {
  if (!value) {
    error = "Required";
  } else if (value.length < 4) {
    error = "this value is to short...";
  } else if (value.length > 15) {
    error = "this value is to long...";
  } else {
    error = false;
  }
  return error;
};

export const validURL = str => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );

  if (!str) {
    error = true;
  } else if (!pattern.test(str)) {
    return (error = "Invalid URL");
  }
};

export const birthdayValidation = birthday => {
  if (!birthday) {
    error = "Required";
  } else {
    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 18) {
      error = "You MUST have 18 to continue...";
    } else {
      error = false;
    }
  }
  return error;
};
