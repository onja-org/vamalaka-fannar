var userRoles = require("../graphql/types/user").userRoles;
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
    errors.username = "Username must not be empty";
  }
  if (!userRoles.some((possibleRole) => possibleRole === role)) {
    errors.role = "passed role does not match any possible roles";
  }
  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

    console.log(email.match(regEx), "email.match(regEx)");

    if (!email.match(regEx)) {
      errors.email = "Email must be a valid email address";
    }
  }
  if (password === "") {
    errors.password = "Password must not empty";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
