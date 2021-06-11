var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
  },
});

var CategoryModel = mongoose.model("category", CategorySchema);
module.exports = CategoryModel;
