const mongoose = require("mongoose");
const { domain } = require("config");
const ejs = require("ejs");
const moment = require("moment");
const { Send } = require("services/sendEmail");

const approve = async (req, res, next) => {
  try {
    const query = {
      _id: req.params.id
    };
    const finalTickets = await mongoose.model("tickets").findOneAndUpdate(query, { isActive: true }).populate("ticketId")
    let html = await ejs.renderFile("src/app/routes/template/confirm.ejs", {
      domain,
      ticket: finalTickets,
      moment
    });

    Send(finalTickets.email, "[Timelapse Music Festival] - Xác nhận hoàn tất mua vé", html);
    return res.send();
  } catch (err) {
    console.log(err)
    next(err);
  }
};

module.exports = { approve };
