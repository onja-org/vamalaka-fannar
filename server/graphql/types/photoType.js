const GraphQLObjectType = require("graphql").GraphQLObjectType;
const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLString = require("graphql").GraphQLString;
const GraphQLBoolean = require("graphql").GraphQLBoolean;
const GraphQLInputObjectType = require("graphql").GraphQLInputObjectType;

const photoDef = {
  url: {
    type: new GraphQLNonNull(GraphQLString),
  },
  info: { type: GraphQLString },
  isPrimary: {
    type: GraphQLBoolean,
  },
};

exports.PhotoType = new GraphQLObjectType({
  name: "photo",
  fields: () => {
    return photoDef;
  },
});

exports.PhotoInput = new GraphQLInputObjectType({
  name: "PhotoInput",
  fields: photoDef,
});
