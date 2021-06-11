const GraphQLSchema = require("graphql").GraphQLSchema;
const GraphQLObjectType = require("graphql").GraphQLObjectType;
const queryType = require("./queries/categoryQuery").CategoryQuery;
const mutations = require("./mutations/categoryMutations");

exports.CategorySchema = new GraphQLSchema({
  query: queryType,
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: mutations,
  }),
});
