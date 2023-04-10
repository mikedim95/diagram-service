const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    //We save the hashed version of pasw
    /* password: {
      type: String,
      required: true,
    },
    //Reset Password
    resetToken: String,
    resetTokenExpiration: Date,
    //Use for generate hashed pasw
    salt: String,
    role: {
      type: Number,
      default: 0, // 1 Admin 0 User
    },
    history: {
      type: Array,
      default: [],
    }, */
  }
  /* {
    timestamps: true,
  } */
);
module.exports = mongoose.model("Customer", customerSchema);
