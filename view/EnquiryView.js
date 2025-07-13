const express = require("express");
const app = express();
const cors = require("cors");
const EnquiryRouter = express.Router();

app.use(cors());
app.use(express.json());

const {
  getEnquiry,
  postEnquiry,
  findByPhoneNumber,
  deleteEnquiry,
} = require("../controller/EnquiryController");

EnquiryRouter.get("/enquiry", getEnquiry);
EnquiryRouter.post("/enquiry", postEnquiry);
EnquiryRouter.get("/enquiry/phonenumber/:phonenumber", findByPhoneNumber);
EnquiryRouter.delete("/enquiry/:id", deleteEnquiry);

module.exports = EnquiryRouter;
