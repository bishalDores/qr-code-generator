const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email address"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  role: {
    type: String,
    enum: {
      values: ["user", "admin"],
      message: "Please select correct role",
    },
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please enter password for your account"],
    minlength: [8, "Your password must be at least 8 characters long"],
    select: false,
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"],
  },
  companyName: { type: String },
  companyWebsite: { type: String },
  companyAddress: { type: String },
  description: { type: String, maxLength: [1000, "Job description can not exceed 1000 characters"] },
  socialLinks: [{ name: String, link: String }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

module.exports = mongoose.model("User", userSchema);
