const mongoose = require("mongoose");
const { photoSchemaDef } = require("./photo");
const Schema = mongoose.Schema;

const AdSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  photos: [photoSchemaDef],
  currency: {
    type: String,
  },
  price: {
    type: Number,
  },
  unit: {
    type: String,
  },
  amountOfProduct: {
    type: Number,
  },
  createdAt: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
  comments: [
    {
      body: { type: String },
      username: { type: String },
      createdAt: { type: String },
    },
  ],
  likes: [
    {
      username: { type: String },
      createdAt: { type: String },
    },
  ],
});

const AdModel = mongoose.model("ad", AdSchema);
module.exports = AdModel;
