const bcrypt = require("bcryptjs");
const User = require("../models/user");
exports.register = async (req, res) => {
  try {
    if (req.body.password) {
      console.log(req.body.password);

      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({
        name: req.body.name,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(201).json("new user created");
    } else {
      res.status(403).json("plz provide pass");
    }
  } catch (err) {
    res.status(500).json("this is error mesage " + err.message);
  }
};
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      name: req.body.name,
    });

    if (!user) {
      console.log(req.body.password);

      res.status(404).json("no such user");
    }
  } catch (err) {
    res.status(500).json("this is error mesage " + err.message);
  }
};
