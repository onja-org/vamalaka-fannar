const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { getErrorForCode, ERROR_CODES } = require("./errorCodes");

module.exports = (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    // Bearer ....
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, JWT_SECRET);
        return user;
      } catch (err) {
        throw new Error(getErrorForCode(ERROR_CODES.EU9));
      }
    }
    throw new Error(getErrorForCode(ERROR_CODES.EU10));
  }
  throw new Error(getErrorForCode(ERROR_CODES.EU11));
};
