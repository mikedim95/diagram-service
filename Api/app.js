const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const asyncHandler = require("express-async-handler");
const privateRoutes = require("./routes/private");
const authRoutes = require("./routes/auth");
require("dotenv").config();
/* const bodyParser = require("body-parser");
const asyncHandler = require("express-async-handler");
const _ = require("lodash");
const createError = require("http-errors"); */
const port = process.env.PORT;
const app = express();
const user = require("./models/user");
app.use(cookieParser());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/private", privateRoutes);
app.use(bodyParser.json());
app.listen(port, () => {
  console.log("app listening on port " + port);
});

mongoose.set("strictQuery", true);
const connectDB = require("./dbConnection.js");
connectDB();

app.get("/devtest", async (req, res) => {
  res.download("app.js");
});
app.post(
  "/test32",
  asyncHandler(async (req, res) => {
    const apantisi = await user.create({
      name: "req.body.questionnaireID2",
      hobby: "req.body.questionnaireTitle2",
      /*  keywords: req.body.keywords,
      questions: req.body.questions, */
    });
    res.status(200).json({
      message: `questionnaire with id ${req.body} upoaded succesfully`,
    });
  })
);
