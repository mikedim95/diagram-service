require("dotenv").config();
/* ----------------- Dependencies ---------------------*/

/* const cookieParser = require("cookie-parser"); */
const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");

/* ------------------- Initialising ------------------------ */

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
/* app.use(cookieParser()); */
app.use(
  session({
    secret: process.env.CLIENT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json());
app.use(passport.initialize());

app.use(passport.session());
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
require("./strategies/google.js");

/* ------------------- Routes ------------------------ */

const privateRoutes = require("./routes/private");
const authRoutes = require("./routes/auth");
const testRoutes = require("./routes/test");

app.use("/auth", authRoutes);
app.use("/private", privateRoutes);
app.use("/test", testRoutes);

/*------------------ DB Connection --------------------*/
app.listen(port, function () {
  console.log("Server listening on port " + port);
});
mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
