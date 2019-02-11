const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  
  // Email checks
  // TODO do this on client
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  // TODO do this on client
  else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  
  // Password checks
  // TODO do this on client
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
