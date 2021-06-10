var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLID = require("graphql").GraphQLID;
var GraphQLString = require("graphql").GraphQLString;

exports.commentType = new GraphQLObjectType({
  name: "comment",
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      body: {
        type: GraphQLString,
      },
      username: {
        type: new GraphQLNonNull(GraphQLString),
      },
      createdAt: {
        type: new GraphQLNonNull(GraphQLString),
      },
    };
  },
});
