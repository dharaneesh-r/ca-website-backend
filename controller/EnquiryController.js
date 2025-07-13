const Enquiry = require("../models/enquiryModel");

// GET METHOD FOR TEH ENQUIRY MODEL

const getEnquiry = async (req, res) => {
  try {
    const data = await Enquiry.find({});
    res.status(200).json({
      status: "success",
      message: "Enquiry fetched successfully",
      length: data.length,
      data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const postEnquiry = async (req, res) => {
  try {
    const data = await Enquiry.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Enquiry Created Successfully",
      data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const findByPhoneNumber = async (req, res) => {
  try {
    const { phonenumber } = req.params;

    // Basic validation
    if (!phonenumber) {
      return res.status(400).json({
        status: "fail",
        message: "Phone number is required",
      });
    }

    const data = await Enquiry.find({ phonenumber });

    if (data.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No enquiries found with that phone number",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Data fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching data",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
};
const deleteEnquiry = async (req, res) => {
  try {
    const data = await Enquiry.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Data Deleted Successfully",
      data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = { getEnquiry, postEnquiry, deleteEnquiry, findByPhoneNumber };
