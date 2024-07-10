const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    section: {
      type: String,
      enum: [1, 2, 3],
    },
    branch: {
      type: String,
    },
    studentNo: {
      type: Number,
      required: true,
    },
    registrationNo: {
      type: Number,
    },
    phoneNo: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Female", "Male"],
    },
    hostler: {
      type: String,
      enum: ["YES", "NO"],
    },
    score: {
      type: Number,
      default: 0,
    },
    tokens: [{ type: Object }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
