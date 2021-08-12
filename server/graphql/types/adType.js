const GraphQLObjectType = require("graphql").GraphQLObjectType;
const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLID = require("graphql").GraphQLID;
const GraphQLString = require("graphql").GraphQLString;
const GraphQLFloat = require("graphql").GraphQLFloat;
const commentType = require("../types/commentType");
const GraphQLList = require("graphql").GraphQLList;
const { PhotoType } = require("./photoType");
const { userType } = require("./user");
const { categoryType } = require("./categoryType");

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
      photos: {
        type: new GraphQLList(PhotoType),
      },
      currency: {
        type: GraphQLString,
      },
      price: {
        type: GraphQLFloat,
      },
      unit: {
        type: GraphQLString,
      },
      amountOfProduct: {
        type: GraphQLFloat,
      },
      username: {
        type: GraphQLString,
      },
      user: {
        type: userType,
      },
      createdAt: {
        type: GraphQLString,
      },
      category:{
        type: categoryType
      },
      categoryid: {
        type: new GraphQLNonNull(GraphQLID),
      },
      comments: {
        type: new GraphQLList(commentType.commentType),
      },
    };
  },
});
