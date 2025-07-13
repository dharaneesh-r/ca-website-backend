const mongoose = require("mongoose");

const enquirySchema = mongoose.Schema({
  name: {
    type: String,
    uppercase: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    trim: true,
  },
  phonenumber: {
    type: String,
    required: true,
    maxLength: 10,
    minLength: 10,
    trim: true,
    unique: true,
  },
});

const Enquiry = mongoose.model("Enquiry", enquirySchema);

module.exports = Enquiry;
