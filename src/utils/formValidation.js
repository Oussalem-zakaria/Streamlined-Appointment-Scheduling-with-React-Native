const validateForm = (userData) => {
  if (
    userData.username === "" ||
    userData.password === "" ||
    userData.firstName === "" ||
    userData.lastName === "" ||
    userData.phoneNumber === ""
  ) {
    return false;
  }
  return true;
};

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validatePhoneNumber = (phoneNumber) => {
  const re = /^[0-9]{10}$/;
  return re.test(phoneNumber);
};

const validatePassword = (password) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  return re.test(password);
};

export { validateForm, validateEmail, validatePhoneNumber, validatePassword };