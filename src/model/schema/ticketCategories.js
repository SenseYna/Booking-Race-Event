var mongoose = require("mongoose");

var ticketCategories = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String
    },
    prices: {
      type: String
    },
     types: {
      type: String
    },
    time: {
      type: Number,
      default: 1
    }
  },
  { timestamps: true }
);

module.exports = ticketCategories;
