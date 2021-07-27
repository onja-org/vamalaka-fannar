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
            const ads = await AdModel.find().sort({ createdAt: -1 });
            if (!ads) {
              throw new Error(getErrorForCode(ERROR_CODES.EA3));
            }
            return ads;
          } catch (error) {
            throw new Error(errro);
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
            const ad = await AdModel.findById(id);
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
