const mongoose = require("mongoose");

const recipientSchema = new mongoose.Schema({
  email: String,
  clicked: { type: Boolean, default: false },
});

module.exports = recipientSchema;
