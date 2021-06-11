var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLID = require("graphql").GraphQLID;
var GraphQLString = require("graphql").GraphQLString;

exports.categoryType = new GraphQLObjectType({
  name: "category",
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      title: {
        type: new GraphQLNonNull(GraphQLString),
      },
      description: {
        type: new GraphQLNonNull(GraphQLString),
      },
    };
  },
});
