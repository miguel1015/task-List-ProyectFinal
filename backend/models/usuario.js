const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Users = new Schema({
  email: String,
  password: String,
});
module.exports = mongoose.model("usuarios", Users);