const GraphQLObjectType = require("graphql").GraphQLObjectType;
const GraphQLList = require("graphql").GraphQLList;
const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLID = require("graphql").GraphQLID;
const AdModel = require("../../models/ad");
const adType = require("../types/adType").adType;
const { getErrorForCode, ERROR_CODES } = require("../../utils/errorCodes");

// Query
exports.AdQuery = new GraphQLObjectType({
  name: "Query",
  fields: () => {
    return {
      ads: {
        type: new GraphQLList(adType),
        resolve: async () => {
          try {
            const ads = await AdModel.find()
              .populate("user")
              .populate("category")
              .sort({ createdAt: -1 });

            if (!ads) {
              throw new Error(getErrorForCode(ERROR_CODES.EA3));
            }
            return ads;
          } catch (error) {
            throw new Error(errro);
          }
        },
      },
      getUserAds: {
        type: new GraphQLList(adType),
        args: {
          userId: {
            type: new GraphQLNonNull(GraphQLID),
          },
        },
        resolve: async (_, { userId }) => {
          try {
            const ads = await AdModel.find({ user: userId })
              .populate("user")
              .populate("category")
              .sort({ createdAt: -1 });

            console.log({ ads });
            if (!ads) {
              throw new Error(getErrorForCode(ERROR_CODES.EA3));
            }
            return ads;
          } catch (error) {
            throw new Error(error);
          }
        },
      },
      getCategoryAds: {
        type: new GraphQLList(adType),
        args: {
          categoryId: {
            type: new GraphQLNonNull(GraphQLID),
          },
        },
        resolve: async (_, { categoryId }) => {
          try {
            const ads = await AdModel.find({ category: categoryId })
              .populate("user")
              .populate("category")
              .sort({ createdAt: -1 });

            console.log({ ads });
            if (!ads) {
              throw new Error(getErrorForCode(ERROR_CODES.EA3));
            }
            return ads;
          } catch (error) {
            throw new Error(error);
          }
        },
      },
      getad: {
        type: adType,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLID),
          },
        },
        resolve: async (_, { id }) => {
          try {
            const ad = await AdModel.findById(id)
              .populate("user")
              .populate("category");
            if (!ad) {
              throw new Error(getErrorForCode(ERROR_CODES.EA2));
            }
            return ad;
          } catch (error) {
            throw new Error(errro);
          }
        },
      },
    };
  },
});
