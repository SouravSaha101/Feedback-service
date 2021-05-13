const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");

class Mailer extends sgMail {}

module.exports = Mailer;
