require('dotenv').config();
const nodemailer = require('nodemailer');

const options = {
  service: 'Mailgun'
};

module.exports = exports = nodemailer.createTransport(options);
