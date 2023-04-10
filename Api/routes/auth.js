const express = require("express");
const router = express.Router();
const passport = require("passport");

/* const authController = require("../controllers/userController.js"); */

/* const { userSignupValidator } = require("../validator/index"); */

/* GET users listing. */
/* router.post("/signup", authController.register);
router.post("/login", authController.login); */
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
  (req, res) => res.send(200)
);
router.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/test/failure" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/test/success");
  }
);

/* router.post("/login", authController.login);

router.post("/googlelogin", authController.googlelogin);
router.post("/facebooklogin", authController.facebooklogin); */

module.exports = router;
