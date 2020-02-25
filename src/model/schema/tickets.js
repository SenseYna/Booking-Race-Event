var mongoose = require("mongoose");

var tickets = new mongoose.Schema(
  {
    email: {
      type: String
    },
    fullname: {
      type: String
    },
    numberphone: {
      type: String
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isHaveKit:{
      type: Boolean,
      default:false
    },
    ticketId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ticketCategories"
    },
    quanlity: {
      type: Number,
      default: 1
    }
  },
  { timestamps: true }
);

module.exports = tickets;
