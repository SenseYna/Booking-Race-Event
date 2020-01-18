var nodemailer = require("nodemailer");

const Send = (sendTo, subject, content) => {
  var mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    SMTPAuth: true,
    SMTPSecure: "tls",
    auth: {
      user: "timelapse.musicfestival@gmail.com",
      pass: "ttoovdelqiklxadg"
    }
  });
  mailOpts = {
    from: "Timelapse Festival Music",
    to: sendTo,
    subject: subject,
    generateTextFromHTML: true,
    html: content
  };
  smtpTrans.sendMail(mailOpts, (err, info) => {
    if (err) {
      console.log(`Gui that bai ${sendTo}`, err);
      console.log("Try to resend");
      Send(sendTo, subject, content);
    } else {
      console.log(`Gui thanh cong ${sendTo}`);
    }
  });
};
module.exports = {
  Send,
  SendWithReplyTo: function (sendTo, subject, content, replyTo) {
    var mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      SMTPAuth: true,
      SMTPSecure: "tls",
      auth: {
        user: "timelapse.musicfestival@gmail.com",
        pass: "ttoovdelqiklxadg"
      }
    });
    mailOpts = {
      from: "Timelapse Festival Music",
      replyTo: replyTo,
      to: sendTo,
      subject: subject,
      generateTextFromHTML: true,
      html: content
    };
    smtpTrans.sendMail(mailOpts, (err, info) => {
      if (err) {
        console.log("Gui that bai");
      } else {
        console.log("Gui thanh cong");
      }
    });
  }
};
