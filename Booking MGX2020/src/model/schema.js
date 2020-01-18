var mongoose = require("mongoose");
var schema = require("./schema/index");

module.exports = {
  users: mongoose.model("users", schema.users),
  tickets: mongoose.model("tickets", schema.tickets),
  ticketCategories: mongoose.model("ticketCategories", schema.ticketCategories),
  earlyBird: mongoose.model("earlyBird", schema.earlyBird)
};
