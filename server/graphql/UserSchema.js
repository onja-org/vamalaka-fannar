const GraphQLSchema = require("graphql").GraphQLSchema;
const GraphQLObjectType = require("graphql").GraphQLObjectType;
const queryType = require("./queries/userQuery").UserQuery;
const mutations = require("./mutations/userMutations");

exports.UserSchema = new GraphQLSchema({
  query: queryType,
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: mutations,
  }),
});
