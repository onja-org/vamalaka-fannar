const GraphQLObjectType = require("graphql").GraphQLObjectType;
const GraphQLList = require("graphql").GraphQLList;
const UserModel = require("../../models/Users");
const userType = require("../types/user").userType;
const { getErrorForCode, ERROR_CODES } = require("../../utils/errorCodes");

// Query
exports.UserQuery = new GraphQLObjectType({
  name: "Query",
  fields: () => {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve: async () => {
          const users = await UserModel.find();
          if (!users) {
            throw new Error(getErrorForCode(ERROR_CODES.EA2));
          }
          return users;
        },
      },
    };
  },
});
