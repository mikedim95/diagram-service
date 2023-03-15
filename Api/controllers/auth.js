/* const User = require("../models/user");
const jwt = require("jsonwebtoken"); //generate signed token
const expressJwt = require("express-jwt"); //for authorization check
const { dberrorHandler } = require("../helpers/dbErrorHandler");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const { cookie } = require("express-validator/check");
const { token } = require("morgan");
const { OAuth2Client } = require("google-auth-library");
const uuid = require("uuid");
const fetch = require("node-fetch");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const client = new OAuth2Client(
  "120255369915-7uu2ta4s119a6btio9m2fcrkfslh2323.apps.googleusercontent.com"
);

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        "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",
    },
    // host: 'mail.demata.gr',
    // secure: true,
    // port: 465,
    // auth: {
    //     user: 'george@demata.gr',
    //     pass: 'MyLittleDani.170919'
    // }
  })
);
 */
exports.signup = (req, res, next) => {
  /*  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: dberrorHandler(err),
      });
    } else {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then((result) => {
          console.log(result);
          res.status(201).json({
            message: "User Created",
          });
          return transporter
            .sendMail({
              from: "george@demata.gr",
              to: req.body.email,
              subject: "Succesfull Signup",
              text: "That was easy!",
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        });
    }
  }); */
  res.json("loooool");
};
/* 
exports.login = (req, res, next) => {
  req.session.isLoggedin = true;
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Authorization Failed",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Authorization Failed",
          });
        }
        if (result) {
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "15m",
          });
          const sessUser = { id: user.id, name: user.name, email: user.email };
          req.session.user = sessUser; // Auto saves session data in mongo store
          res.cookie("token", token, { httpOnly: true }).status(200).json({
            message: "Authorization Succesfull",
            Cookie: token,
            ID: user[0]._id,
            Name: user[0].name,
            Email: user[0].email,
            Role: user[0].role,
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"], // added later
  userProperty: "auth",
});

exports.isAuth = (req, res, next) => {
  // // Read the token from the cookie
  // const token = req.cookies.token;
  // if (!token)
  //   return res.status(401).send("Access denied...No token provided...");
  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //   req.user = decoded;
  //   next();
  // } catch (er) {
  //   // console.log("err", er);
  //   //Incase of expired jwt or invalid token kill the token and clear the cookie
  //   res.clearCookie("token");
  //   return res.status(400).send(er.message);
  // }

  {
    const user = req.profile && req.auth && req.profile._id == req.auth._Id;
    console.log(user);

    console.log(req.profile);
    console.log(req.auth);
    console.log(req.profile._id);
    console.log(req.auth.userId);
    if (!user) {
      return res.status(403).json({
        error: "Access denied",
      });
    }
    next();
  }
};

exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  res.send({ success: true });
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0)
    return res.status(403).json({
      error: "Admin resource! Access Denied",
    });
  next();
};

exports.postReset = (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: "Failed ",
      });
    }

    const token = buffer.toString("hex");
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res.status(422).json({
          error: "No account with that email found",
        });
      }
      user.resetToken = token;
      user.resetTokenExpiration = Date.now() + 3600000;
      res.status(201).json({
        message: "Reset Link Sended",
      });
      return user.save();
    });
    console.log(token);
    return transporter
      .sendMail({
        from: "george@demata.gr",
        to: req.body.email,
        subject: "Password Reset",
        html: `<p>You request password reset'
                        <p> Click this <a href="http://localhost:5000/reset/${token}"> link</a> to set new password `,
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

exports.postNewPassword = (req, res, send) => {
  const newPassword = req.body.password;
  const userId = req.body.userId;
  const passwordToken = req.body.passwordToken;
  let resetUser;

  User.findOne({
    resetToken: passwordToken,
    resetTokenExpiration: { $gt: Date.now() },
  })
    .then((user) => {
      resetUser = user;
      return bcrypt.hash(newPassword, 12);
    })
    .then((hashedPassword) => {
      resetUser.password = hashedPassword;
      resetUser.resetToken = undefined;
      resetUser.resetTokenExpiration = undefined;
      return resetUser.save();
    })
    .then((result) => {
      res.status(201).json({
        message: "Password Updated",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.googlelogin = (req, res) => {
  const { tokenId } = req.body;
  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        "120255369915-7uu2ta4s119a6btio9m2fcrkfslh2323.apps.googleusercontent.com",
    })
    .then((response) => {
      const { email_verified, name, email } = response.payload;
      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (err) {
            return res.status(400).json({
              error: "Something went wrong..",
            });
          } else {
            if (user) {
              const token = jwt.sign(
                { _id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: "15m" }
              );
              const sessUser = {
                id: user.id,
                name: user.name,
                email: user.email,
              };
              req.session.user = sessUser; // Auto saves session data in mongo store
              res.cookie("token", token, { httpOnly: true }).status(200).json({
                message: "Authorization Succesfull",
                Cookie: token,
                //ID: user[0]._id,
                //Name: user[0].name,
                //Email: user[0].email,
                // Role: user[0].role,
              });
            } else {
              let password = email + uuid.v4();
              let newUSer = new User({ name, email, password });
              newUSer.save((err, data) => {
                if (err) {
                  return res.status(400).json({
                    error: "Something went wrong..",
                  });
                }
                const token = jwt.sign(
                  { _id: data._id },
                  process.env.JWT_SECRET,
                  { expiresIn: "15m" }
                );
                const sessUser = {
                  id: data.id,
                  name: data.name,
                  email: data.email,
                };
                var { _id, name, email } = newUSer;
                console.log(_id, name, email);
                req.session.user = sessUser; // Auto saves session data in mongo store
                res
                  .cookie("token", token, { httpOnly: true })
                  .status(200)
                  .json({
                    message: "Authorization Succesfull",
                    Cookie: token,
                    user: { _id, name, email },
                  });
              });
            }
          }
        });
      }
    });
};

exports.facebooklogin = (req, res) => {
  const { userID, accessToken } = req.body;
  let urlGraphFace = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;
  fetch(urlGraphFace, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      const { email, name } = response;
      User.findOne({ email }).exec((err, user) => {
        if (err) {
          return res.status(400).json({
            error: "Something went Wrong...",
          });
        } else {
          if (user) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
              expiresIn: "15m",
            });
            const sessUser = {
              id: user.id,
              name: user.name,
              email: user.email,
            };
            req.session.user = sessUser; // Auto saves session data in mongo store
            res.cookie("token", token, { httpOnly: true }).status(200).json({
              message: "Authorization Succesfull",
              Cookie: token,
              //ID: user[0]._id,
              //Name: user[0].name,
              //Email: user[0].email,
              // Role: user[0].role,
            });
          } else {
            let password = email + uuid.v4();
            let newUSer = new User({ name, email, password });
            newUSer.save((err, data) => {
              if (err) {
                return res.status(400).json({
                  error: "Something went wrong..",
                });
              }
              const token = jwt.sign(
                { _id: data._id },
                process.env.JWT_SECRET,
                { expiresIn: "15m" }
              );
              const sessUser = {
                id: data.id,
                name: data.name,
                email: data.email,
              };
              var { _id, name, email } = newUSer;
              console.log(_id, name, email);
              req.session.user = sessUser; // Auto saves session data in mongo store
              res.cookie("token", token, { httpOnly: true }).status(200).json({
                message: "Authorization Succesfull",
                Cookie: token,
                user: { _id, name, email },
              });
            });
          }
        }
      });
    });
};
 */
