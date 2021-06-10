var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLList = require("graphql").GraphQLList;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLID = require("graphql").GraphQLID;
var AdModel = require("../../models/ad");
var adType = require("../types/adType").adType;

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
              throw new Error("error while fetching data");
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
              throw new Error("add not found data");
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
