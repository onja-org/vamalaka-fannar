module.exports.ERROR_CODES = {
  //   user related
  EU1: "EU1",
  EU2: "EU2",
  EU3: "EU3",
  EU4: "EU4",
  EU5: "EU5",
  EU6: "EU6",
  EU7: "EU7",
  EU8: "EU8",
  EU9: "EU9",
  EU10: "EU10",
  EU11: "EU11",
  EU12: "EU12",
  EU13: "EU13",
  EU14: "EU14",
  EU15: "EU15",
  //   general errors
  EG1: "EG1",
  //   adds related
  EA1: "EA1",
  EA2: "EA2",
  EA3: "EA3",
  //   comments
  ECO1: "ECO1",
  //   categories
  ECA1: "ECA1",
  ECA2: "ECA2",
  //   images
  EI1: "EI1",
};

module.exports.ERROR_MESSAGES = {
  [this.ERROR_CODES.EU1]: "Username must not be empty",
  [this.ERROR_CODES.EU2]: `User name already exists`,
  [this.ERROR_CODES.EU3]: `Error saving user data`,
  [this.ERROR_CODES.EU4]: `Passed role does not match any possible roles`,
  [this.ERROR_CODES.EU5]: "Email must not be empty",
  [this.ERROR_CODES.EU6]: "Email must be a valid email address",
  [this.ERROR_CODES.EU7]: "Password must be at least 8 characters long",
  [this.ERROR_CODES.EU8]: "Passwords must match",
  [this.ERROR_CODES.EU9]: "Invalid/Expired token",
  [this.ERROR_CODES.EU10]: "Authentication token must be 'Bearer [token]",
  [this.ERROR_CODES.EU11]: "Authorization header must be provided",
  [this.ERROR_CODES.EU12]: "User not found",
  [this.ERROR_CODES.EU13]: "Wrong password",
  [this.ERROR_CODES.EU14]: "You are not authenticated",
  [this.ERROR_CODES.EU15]: "Problems updating user",
  [this.ERROR_CODES.EA1]: "Problems saving add to the database",
  [this.ERROR_CODES.EA2]: "Could not find entry for given id",
  [this.ERROR_CODES.EA3]: "Could not find information in DB",
  [this.ERROR_CODES.EG1]: "Action not allowed",
  [this.ERROR_CODES.ECO1]: "Comment body must not be empty",
  [this.ERROR_CODES.ECA1]: "Problems saving category to the database",
  [this.ERROR_CODES.ECA2]:
    "Problems finding and saving category to the database",
  [this.ERROR_CODES.EI1]: "Problems reading the file",
};

module.exports.getErrorForCode = (code) => {
  return `CODE:${code} ${this.ERROR_MESSAGES[code]}`;
};
