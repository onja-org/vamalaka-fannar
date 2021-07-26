var userRoles = require("../graphql/types/user").userRoles;
const { getErrorForCode, ERROR_CODES } = require("./errorCodes");
module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword,
  role
) => {
  console.log(
    username + ":uname",
    email + ":email",
    password + ":pass",
    confirmPassword + ":cpass",
    role + ":role"
  );
  const errors = {};
  if (username.trim() === "") {
    errors.username = getErrorForCode(ERROR_CODES.EU1);
  }
  if (!userRoles.some((possibleRole) => possibleRole === role)) {
    errors.role = getErrorForCode(ERROR_CODES.EU4);
  }
  if (email.trim() === "") {
    errors.email = getErrorForCode(ERROR_CODES.EU5);
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

    console.log(email.match(regEx), "email.match(regEx)");

    if (!email.match(regEx)) {
      errors.email = getErrorForCode(ERROR_CODES.EU6);
    }
  }

  if (!password || password.length < 8) {
    errors.password = getErrorForCode(ERROR_CODES.EU7);
  } else if (password !== confirmPassword) {
    errors.confirmPassword = getErrorForCode(ERROR_CODES.EU8);
  }
  console.log(
    "!password || password.length < 8",
    password,
    !password || password.length < 8
  );
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = getErrorForCode(ERROR_CODES.EU1);
  }
  if (!password || password.length < 8) {
    errors.password = getErrorForCode(ERROR_CODES.EU7);
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
