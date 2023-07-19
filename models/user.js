const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
      enum: [1, 2, 3],
    },
    branch: {
      type: String,
      required: true,
    },
    studentNo: {
      type: Number,
      required: true,
    },
    registrationNo: {
      type: Number,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Female", "Male"],
    },
    hostler: {
      type: String,
      required: true,
      enum: ["YES", "NO"],
    },
    // captcha: {
    //   type: String,
    // },
    // is_verified: {
    //   type: Number,
    // },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
