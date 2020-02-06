const mongoose = require("mongoose");
const { pick } = require("lodash");
const { domain } = require("config");
const { Send } = require("services/sendEmail");
const ejs = require("ejs");
const moment = require("moment");


const tickets = async (req, res, next) => {
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
    const ticket = await mongoose.model("ticketCategories").findById(req.body.ticketId);

    let html = await ejs.renderFile("src/app/routes/template/template.ejs", {
      domain,
      ticket: {
        name: ticket.name,
        quanlity: req.body.quanlity,
        prices: parseInt(ticket.prices) * parseInt(req.body.quanlity)
      },
      moment
    });
    Send(newTickets.email, "[Chiến dịch tình nguyện Mảnh ghép mới] - Xác nhận Đăng ký vé và hướng dẫn thanh toán", html);

    const ticketCategories = await mongoose.model("ticketCategories").find();
    return res.render('homepage/index', { ticketCategories, isEarlyBird, isOk: true });
    // return res.redirect("/")
  } catch (err) {
    next(err);
  }
};

module.exports = { tickets };
