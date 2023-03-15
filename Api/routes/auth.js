const express = require("express");
const router = express.Router();

const authController = require("../controllers/userController.js");

/* const { userSignupValidator } = require("../validator/index"); */

/* GET users listing. */
router.post("/signup", authController.register);
router.post("/login", authController.login);
/* router.post("/login", authController.login);

router.post("/googlelogin", authController.googlelogin);
router.post("/facebooklogin", authController.facebooklogin); */

module.exports = router;
