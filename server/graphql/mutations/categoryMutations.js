const categoryType = require("../types/categoryType");
const CategoryModel = require("../../models/category");
const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLString = require("graphql").GraphQLString;
const checkAuth = require("../../utils/check-auth");
const GraphQLID = require("graphql").GraphQLID;
const { getErrorForCode, ERROR_CODES } = require("../../utils/errorCodes");

module.exports = {
  createCategory: {
    type: categoryType.categoryType,
    args: {
      title: {
        type: new GraphQLNonNull(GraphQLString),
      },
      description: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: async (root, args, context) => {
      const user = checkAuth(context);
      // TODO check if user role is admin
      console.log(user, "user");
      const { title, description } = args;

      const categoryModel = new CategoryModel({
        title,
        description,
        createdAt: new Date().toISOString(),
      });

      const newCategory = await categoryModel.save();
      if (!newCategory) {
        throw new Error(getErrorForCode(ERROR_CODES.ECA1));
      }
      return newCategory;
    },
  },
  updatedeCategory: {
    type: categoryType.categoryType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      title: {
        type: new GraphQLNonNull(GraphQLString),
      },
      description: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: async (root, args) => {
      const updatedCategory = await CategoryModel.findByIdAndUpdate(
        args.id,
        args,
        {
          new: true,
        }
      );
      if (!updatedCategory) {
        throw new Error(getErrorForCode(ERROR_CODES.ECA2));
      }
      return updatedCategory;
    },
  },
  deleteCategory: {
    type: categoryType.categoryType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: async (root, args, context) => {
      console.log(args, "args");
      const user = checkAuth(context);
      //TODO check if there are no ads for category
      const categoryToRemove = await CategoryModel.findByIdAndRemove(args.id);
      try {
        if (user.username === categoryToRemove.username) {
          await categoryToRemove.delete();
          return "Category deleted successfully";
        } else {
          throw new Error(getErrorForCode(ERROR_CODES.EG1));
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
