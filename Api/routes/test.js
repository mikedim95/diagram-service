const express = require("express");
const router = express.Router();
const passport = require("passport");
const DBFunctions = require("../controllers/DB.js");
/* const passport = require("passport");
const authController = require("../controllers/userController.js"); */

/* const { userSignupValidator } = require("../validator/index"); */

/* GET users listing. */
/* router.post("/signup", authController.register);
router.post("/login", authController.login); */
/* router.get("/google", passport.authenticate("google"), (req, res) =>
  res.send(200)
);
router.get("/google/redirect", passport.authenticate("google"), (req, res) =>
  res.send(200)
);
 */
router.get("/user", DBFunctions.findUser, (req, res) => {
  res.send(200);
});
router.post("/user", DBFunctions.userRegister, (req, res) => {
  res.send(200);
});

router.get("/customer", DBFunctions.findCustomer, (req, res) => {
  res.send(200);
});
router.post("/customer", DBFunctions.customerRegister, (req, res) => {
  res.send(200);
});
router.get("/success", (req, res) => {
  res.send("success");
});
router.get("/failure", (req, res) => {
  res.send("failure");
});
/* router.post(
  "/test32",
  asyncHandler(async (req, res) => {
    const name = req.body.name;
    console.log(name);
    const apantisi = await user.create({
      name: "req.body.questionnaireID2",
      password: "req.body.questionasdasdasdnaireTitle2",
       keywords: req.body.keywords,
      questions: req.body.questions,
    });
    res.status(200).json({
      message: `questionnaire with id ${req.body} upoaded succesfully`,
    });
  })
); */
module.exports = router;
