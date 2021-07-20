const GraphQLObjectType = require("graphql").GraphQLObjectType;
const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLID = require("graphql").GraphQLID;
const GraphQLString = require("graphql").GraphQLString;
const GraphQLList = require("graphql").GraphQLList;
const { PhotoType } = require("./photoType");
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
      photos: {
        type: new GraphQLList(PhotoType),
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
      createdAt: {
        type: new GraphQLNonNull(GraphQLString),
      },
    };
  },
});
