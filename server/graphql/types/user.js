var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLID = require("graphql").GraphQLID;
var GraphQLString = require("graphql").GraphQLString;

exports.userRoles = ["buyer", "seller", "admin", "moderator"];

exports.userType = new GraphQLObjectType({
  name: "user",
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      email: {
        type: new GraphQLNonNull(GraphQLString),
      },
      token: {
        type: GraphQLString,
      },
      username: {
        type: new GraphQLNonNull(GraphQLString),
      },
      role: {
        type: new GraphQLNonNull(GraphQLString),
      },
      createdAt: {
        type: new GraphQLNonNull(GraphQLString),
      },
    };
  },
});
