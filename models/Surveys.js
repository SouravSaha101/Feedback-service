const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [String],
});

mongoose.model("surveys", surveySchema);
