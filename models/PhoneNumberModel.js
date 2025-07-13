const mongoose = require("mongoose");

const PhoneNumberSchema = mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
});

const PhoneNumber = mongoose.model("PersonalDetailsNumbers", PhoneNumberSchema);

module.exports = PhoneNumber;
