const adType = require("../types/adType");
const adModel = require("../../models/ad");
const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLString = require("graphql").GraphQLString;
const GraphQLFloat = require("graphql").GraphQLFloat;
const GraphQLList = require("graphql").GraphQLList;
const checkAuth = require("../../utils/check-auth");
const GraphQLID = require("graphql").GraphQLID;
const { PhotoInput } = require("../types/photoType");
const { getErrorForCode, ERROR_CODES } = require("../../utils/errorCodes");

module.exports = {
  createAd: {
    type: adType.adType,
    args: {
      title: {
        type: new GraphQLNonNull(GraphQLString),
      },
      body: {
        type: new GraphQLNonNull(GraphQLString),
      },
      photos: {
        type: new GraphQLList(PhotoInput),
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
    },
    resolve: async (root, args, context) => {
      const user = checkAuth(context);
      console.log(user, "user");
      const { title, body, photos, currency, price, unit, amountOfProduct } =
        args;

      const uModel = new adModel({
        title,
        body,
        username: user.username,
        user: user.id,
        photos,
        currency,
        price,
        unit,
        amountOfProduct,
        createdAt: new Date().toISOString(),
      });

      const newAd = await uModel.save();
      if (!newAd) {
        throw new Error(getErrorForCode(ERROR_CODES.EA1));
      }
      return newAd;
    },
  },
  updatead: {
    type: adType.adType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString),
      },
      title: {
        type: GraphQLString,
      },
      body: {
        type: GraphQLString,
      },
      photos: {
        type: new GraphQLList(PhotoInput),
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
    },
    resolve: async (root, args) => {
      const UpdatedAd = await adModel.findByIdAndUpdate(args.id, args, {
        new: true,
      });
      if (!UpdatedAd) {
        throw new Error(getErrorForCode(ERROR_CODES.EA2));
      }
      return UpdatedAd;
    },
  },
  deletead: {
    type: adType.adType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: async (root, args, context) => {
      console.log(args, "args");
      const user = checkAuth(context);
      const adToRemove = await adModel.findByIdAndRemove(args.id);
      if (!adToRemove) {
        throw new Error(getErrorForCode(ERROR_CODES.EA2));
      }

      try {
        if (user.username === adToRemove.username) {
          //TODO add removal of the images ?
          await adToRemove.delete();

          return {
            username: adToRemove.username,
            id: adToRemove._id,
            title: adToRemove.title,
          };
        } else {
          throw new Error(getErrorForCode(ERROR_CODES.EG1));
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  createComment: {
    type: adType.adType,
    args: {
      postId: {
        type: new GraphQLNonNull(GraphQLID),
      },
      body: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: async (root, { postId, body }, context) => {
      console.log(postId, body, "postId, body");
      try {
        const { username } = checkAuth(context);

        if (body.trim() === "") {
          throw new Error(getErrorForCode(ERROR_CODES.ECO1));
        }

        const adToComment = await adModel.findById(postId);

        if (adToComment) {
          adToComment.comments.unshift({
            body,
            username,
            createdAt: new Date().toISOString(),
          });
          await adToComment.save();
          return adToComment;
        } else {
          throw new Error(getErrorForCode(ERROR_CODES.EA2));
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  deleteComment: {
    type: adType.adType,
    args: {
      postId: {
        type: new GraphQLNonNull(GraphQLID),
      },
      commentId: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: async (root, { postId, commentId }, context) => {
      console.log(args, "args");
      try {
        const { username } = checkAuth(context);

        const ad = await adModel.findById(postId);

        if (ad) {
          const commentIndex = ad.comments.findIndex((c) => c.id === commentId);
          if (ad.comments[commentIndex].username === username) {
            ad.comments.splice(commentIndex, 1);
            await ad.save();
            return ad;
          } else {
            throw new Error(getErrorForCode(ERROR_CODES.EG1));
          }
        } else {
          throw new Error(getErrorForCode(ERROR_CODES.EA2));
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
