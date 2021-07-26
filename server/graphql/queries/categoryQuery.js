const GraphQLObjectType = require("graphql").GraphQLObjectType;
const GraphQLList = require("graphql").GraphQLList;
const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLID = require("graphql").GraphQLID;
const CategoryModel = require("../../models/category");
const categoryType = require("../types/categoryType").categoryType;
const { getErrorForCode, ERROR_CODES } = require("../../utils/errorCodes");
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
              throw new Error(getErrorForCode(ERROR_CODES.EA3));
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
              throw new Error(getErrorForCode(ERROR_CODES.EA2));
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
