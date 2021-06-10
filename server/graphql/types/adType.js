var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLID = require("graphql").GraphQLID;
var GraphQLString = require("graphql").GraphQLString;
var commentType = require("../types/commentType");
var GraphQLList = require("graphql").GraphQLList;

exports.adType = new GraphQLObjectType({
  name: "ad",
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      title: {
        type: GraphQLString,
      },
      body: {
        type: GraphQLString,
      },
      username: {
        type: GraphQLString,
      },
      createdAt: {
        type: GraphQLString,
      },
      categoryid: {
        type: new GraphQLNonNull(GraphQLID),
      },
      comments: {
        // type: GraphQLString,
        type: new GraphQLList(commentType.commentType),
      },
    };
  },
});
