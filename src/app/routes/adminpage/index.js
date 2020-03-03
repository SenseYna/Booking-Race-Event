const router = require('express').Router();
const mongoose = require("mongoose");
const moment = require("moment");
const { approve } = require("./approve")
const { isEmpty, pick } = require("lodash");

router.get("/logout", (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  req.logout();
  req.session.destroy(function (err) {
    if (err) { return next(err); }
    // The response should indicate that the user is no longer authenticated.
    return res.redirect("/");
  });
});



router.get("/activeTickets", async (req, res, next) => {
  try {
  
    return res.status(200).send("A")
  } catch (err) {
    next(err);
  }
})


router.post("/approve/:id", approve)

router.post("/buy", async (req, res, next) => {
  try {
    const insert = {
      ...pick(req.body, [
        "email",
        "fullname",
        "numberphone",
        "quanlity",
        "ticketId"
      ])
    };
    const newTickets = await mongoose.model("tickets").create(insert);
    const input = {
      params: {
        id: newTickets._id
      }
    }
    await approve(input, res, next);
    return res.redirect("/admin")
  } catch (err) {
    next(err);
  }
})



router.delete("/:id", async (req, res, next) => {
  try {
    const tickets = await mongoose.model("tickets").findById(req.params.id);
    if (isEmpty(tickets) || tickets.isActive === true) {
      return res.status(406).send();
    }
    await mongoose.model("tickets").findByIdAndRemove(req.params.id);
    return res.send();
  } catch (err) {
    next(err);
  }
})

router.get('/', async (req, res, next) => {
  const tickets = await mongoose.model("tickets").find().populate("ticketId")
  const ticketCategories = await mongoose.model("ticketCategories").find();
  return res.render("adminpage", { tickets, moment, ticketCategories, isEarlyBird })
});

module.exports = router;
