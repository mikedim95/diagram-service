const User = require("../models/user");
const Customer = require("../models/customer");
exports.userRegister = async (req, res) => {
  try {
    const user = new User({ name: req.body.name, password: req.body.password });
    user
      .save()
      .then(() => {
        console.log("User saved successfully");
        res.send("User saved successfully");
      })
      .catch((error) => {
        console.error(error);
        res.send("Error saving user");
      });
  } catch (err) {
    res.status(500).json("this is error mesage " + err.message);
  }
};
exports.findUser = async (req, res) => {
  try {
    User.find()
      .then((users) => {
        console.log("Users found successfully");
        res.json(users);
      })
      .catch((error) => {
        console.error(error);
        res.send("Error finding users");
      });
  } catch (err) {
    res.status(500).json("this is error mesage " + err.message);
  }
};
exports.customerRegister = async (req, res) => {
  try {
    const customer = new Customer({
      name: req.body.name,
      password: req.body.password,
    });
    customer
      .save()
      .then(() => {
        console.log("User saved successfully");
        res.send("User saved successfully");
      })
      .catch((error) => {
        console.error(error);
        res.send("Error saving user");
      });
  } catch (err) {
    res.status(500).json("this is error mesage " + err.message);
  }
};
exports.findCustomer = async (req, res) => {
  try {
    Customer.find()
      .then((users) => {
        console.log("Users found successfully");
        res.json(users);
      })
      .catch((error) => {
        console.error(error);
        res.send("Error finding users");
      });
  } catch (err) {
    res.status(500).json("this is error mesage " + err.message);
  }
};
