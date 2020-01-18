var mongoose = require("mongoose");

var users = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      unique: true
    },
    password: {
      type: String
    },
    fullname: {
      required: true,
      type: String
    },
    roles: [{
      type: String
    }],
  },
  { timestamps: true }
);

module.exports = users;
