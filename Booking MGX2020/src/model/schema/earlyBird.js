var mongoose = require("mongoose");

var earlyBird = new mongoose.Schema(
  {
    actived: {
      type: Boolean,
      default: false
    }
}
);

module.exports = earlyBird;
