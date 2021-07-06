var userType = require("../types/user");
var usersModel = require("../../models/Users");
var JWT_SECRET = require("../../config").JWT_SECRET;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
var GraphQLInputObjectType = require("graphql").GraphQLInputObjectType;
const {
  validateRegisterInput,
  validateLoginInput,
} = require("../../utils/validators");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const RegisterInput = new GraphQLInputObjectType({
  name: "RegisterInput",
  fields: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: new GraphQLNonNull(GraphQLString) },
    confirmPassword: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, username: user.username },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
};

module.exports = {
  register: {
    type: userType.userType,
    args: {
      registerInput: {
        type: RegisterInput,
      },
    },
    resolve: async (root, args) => {
      console.log(args, "register USER-----------------");
      const {
        registerInput: { password, username, confirmPassword, email, role },
      } = args;

      const existingUser = await usersModel.findOne({ username });

      const { errors, valid } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword,
        role
      );

      console.log(valid, "----------valid");

      if (!valid) {
        throw new Error(`Errors ${JSON.stringify(errors)}`);
      }

      console.log(existingUser, "existingUser");
      if (existingUser) {
        throw new Error("user name already exists");
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const uModel = new usersModel({
        password: hashedPassword,
        email,
        username,
        createdAt: new Date().toISOString(),
        role,
      });
      const res = await uModel.save();

      if (!res) {
        throw new Error("error saving data");
      }

      const token = generateToken(res);
      const userData = { ...res._doc, id: res._id, token };
      console.log(userData, "userData ------ - -- ");
      return userData;
    },
  },
  login: {
    type: userType.userType,
    args: {
      username: {
        type: new GraphQLNonNull(GraphQLString),
      },
      password: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: async (root, { username, password }) => {
      console.log(username, password, "login USER-----------------");
      const { errors, valid } = validateLoginInput(username, password);

      const existingUser = await usersModel.findOne({ username });

      if (!valid) {
        const errNotValid = "Invalid input";
        errors.general = errNotValid;
        throw new Error(errNotValid);
      }

      if (!existingUser) {
        const errNoUser = "User not found";
        errors.general = errNoUser;
        throw new Error(errNoUser);
      }

      const match = await bcrypt.compare(password, existingUser.password);

      if (!match) {
        const errNoUser = "Wrong creadentials";
        errors.general = errNoUser;
        throw new Error(errNoUser);
      }
      const token = generateToken(existingUser);

      const userData = { ...existingUser._doc, id: existingUser._id, token };
      console.log(userData, "userData ------ - -- ");
      return userData;
    },
  },
};
