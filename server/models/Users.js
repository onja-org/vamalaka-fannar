// const { model, Schema } = require("mongoose");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true },
  role: { type: String, require: true },
  createdAt: { type: String },
});

var UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
