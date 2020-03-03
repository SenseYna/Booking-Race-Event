const router = require('express').Router();
const { tickets } = require("./tickets")
const mongoose = require('mongoose')

router.post("/tickets", tickets);

/* GET home page. */
router.get('/', async (req, res, next) => {
  const ticketCategories = await mongoose.model("ticketCategories").find();
 
  res.render('homepage/index', {
   ticketCategories, isEarlyBird, vipTicket });
});


module.exports = router;
