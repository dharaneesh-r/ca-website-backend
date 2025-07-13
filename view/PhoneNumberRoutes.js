const express = require("express");
const app = express();
const cors = require("cors");
const PhoneNumberRouter = express.Router();

app.use(cors());
app.use(express.json());

const {
  GetPhoneNumber,
  PostPhoneNumber,
  deletePhoneNumber,
} = require("../controller/PhoneNumberController");

PhoneNumberRouter.get("/phonenumber", GetPhoneNumber);
PhoneNumberRouter.post("/phonenumber", PostPhoneNumber);
PhoneNumberRouter.delete("/phonenumber/:id", deletePhoneNumber);

module.exports = PhoneNumberRouter;
