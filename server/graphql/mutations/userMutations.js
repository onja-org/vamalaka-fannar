const userType = require("../types/user");
const usersModel = require("../../models/Users");
const JWT_SECRET = require("../../config").JWT_SECRET;
const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLString = require("graphql").GraphQLString;
const GraphQLList = require("graphql").GraphQLList;
const GraphQLInputObjectType = require("graphql").GraphQLInputObjectType;
const {
  validateRegisterInput,
  validateLoginInput,
} = require("../../utils/validators");
const checkAuth = require("../../utils/check-auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PhotoInput } = require("../types/photoType");

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
  updateUser: {
    type: userType.userType,
    args: {
      photos: {
        type: new GraphQLList(PhotoInput),
      },
      firstName: {
        type: GraphQLString,
      },
      lastName: {
        type: GraphQLString,
      },
      address: {
        type: GraphQLString,
      },
      city: {
        type: GraphQLString,
      },
      state: {
        type: GraphQLString,
      },
      country: {
        type: GraphQLString,
      },
      phone: {
        type: GraphQLString,
      },
      bio: {
        type: GraphQLString,
      },
    },
    resolve: async (root, args, context) => {
      const errors = {};
      const user = checkAuth(context);
      if (!user) {
        const errNotAuthenticated = "You are not authenticated";
        errors.errNotAuthenticated = errNotAuthenticated;
        throw new Error(errNotValid);
      }

      console.log("updateUSER:::::", user);

      const updatedUser = await usersModel.findByIdAndUpdate(user.id, args, {
        new: true,
      });

      if (!updatedUser) {
        throw new Error("Error no user found for update");
      }
      return updatedUser;
    },
  },
};
