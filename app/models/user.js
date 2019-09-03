var mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  uid: String,
  name: String,
  // firstName: String,
  // age: String,
  // address: String,
  email: String
  // number: String,
});

module.exports = mongoose.model("user", userSchema);
