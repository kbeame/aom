const Router = require('express').Router;
const nodemailer = require('nodemailer');

const emailRouter = module.exports = exports = new Router();

// const transporter = nodemailer.createTransport(options);

const mailOptions = {
  from: '"Kat Beame ?" <katherine.beame@gmail.com>',
  to: 'katherine.beame@gmail.com',
  subject: 'Massage Inquiry ',
  text: 'HEY KAT ?'
};

emailRouter.post('/email', (req, res) => {
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      return console.log(err);
    }
    console.log("message sent" + info.response);
  });
  res.status(200).json({ msg: 'Email Sent (I hope)'});
});
