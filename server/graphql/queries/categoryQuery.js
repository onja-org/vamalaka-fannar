var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLList = require("graphql").GraphQLList;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLID = require("graphql").GraphQLID;
var CategoryModel = require("../../models/category");
var categoryType = require("../types/categoryType").categoryType;

// Query
exports.CategoryQuery = new GraphQLObjectType({
  name: "Query",
  fields: () => {
    return {
      categories: {
        type: new GraphQLList(categoryType),
        resolve: async () => {
          try {
            const categories = await CategoryModel.find();
            if (!categories) {
              throw new Error("error while fetching data");
            }
            return categories;
          } catch (error) {
            throw new Error(errro);
          }
        },
      },
      getcategory: {
        type: categoryType,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLID),
          },
        },
        resolve: async (_, { id }) => {
          try {
            const category = await CategoryModel.findById(id);
            if (!category) {
              throw new Error("category not found data");
            }
            return category;
          } catch (error) {
            throw new Error(errro);
          }
        },
      },
    };
  },
});
