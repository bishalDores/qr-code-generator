const User = require("../models/user");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");

// Register a new user => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, phone } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    phone,
  });

  // Create JWT Token
  sendToken(user, 200, res);
});

// Login => /api/v1/login
exports.login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // check if email or password is entered by user
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }
  // finding user in database
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  // Check if password is correct
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  // Create JSON web token
  sendToken(user, 200, res);
});

// social login => /api/v1/socialLogin
exports.socialLogin = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (user) {
    // Create JSON web token
    sendToken(user, 200, res);
  } else {
    // here user does not exists
    const generateRandomPassword = Math.random().toString(36).slice(-12); // this is needed for social login as user does not provide password
    const generateRandomPhoneNumber = "+8801016000000";
    const newUser = await User.create({
      name: req.body.name,
      email,
      password: generateRandomPassword,
      phone: generateRandomPhoneNumber,
    });
    // Create JWT Token
    sendToken(newUser, 200, res);
  }
});
