//PACKAGES

const express = require("express");
const app = express();
const cors = require("cors");
const dotenvx = require("@dotenvx/dotenvx");
const mongoose = require("mongoose");
const PhoneNumberRouter = require("./view/PhoneNumberRoutes");
const ArticleRouter = require("./view/ArticleContentRoutes");
const EnquiryRouter = require("./view/EnquiryView");
dotenvx.config();

// MIDDLEWARES

app.use(cors());
app.use(express.json());

//MONGOOSE CONNECTION

const MONGODB_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/?retryWrites=true&w=majority&appName=auditing`;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err.message);
  });

//ROUTES

app.use("/", (req, res) => {
  res.send("Welcome to the CA Website Backend");
});
app.use("/", PhoneNumberRouter);
app.use("/", ArticleRouter);
app.use("/", EnquiryRouter);

//PORT DETAILS

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is Running on PORT", PORT);
});
