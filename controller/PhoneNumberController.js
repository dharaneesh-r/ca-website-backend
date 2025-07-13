const PhoneNumber = require("../models/PhoneNumberModel");

// GET METHOD FOR PHONE NUMBER

const GetPhoneNumber = async (req, res) => {
  try {
    const data = await PhoneNumber.find({});
    res.status(200).json({
      status: "success",
      message: "Phone number fetched successfully",
      length: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// POST METHOD FOR PHONE NUMBER

const PostPhoneNumber = async (req, res) => {
  try {
    const data = await PhoneNumber.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Phone number created successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

//DELETE METHOD FOR PHONE NUMBER

const deletePhoneNumber = async (req, res) => {
  try {
    const data = await PhoneNumber.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Phone number deleted successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// EXPORTS

module.exports = {
  GetPhoneNumber,
  PostPhoneNumber,
  deletePhoneNumber,
};
