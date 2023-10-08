const User = require("../models/user");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
const QRCode = require("qrcode");

// get current user profile => api/v1/me
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

// update user profile
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  let user = await User.findById(req.user.id);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    data: user,
  });
});

// generate QR Code  => api/v1/generateQR
exports.generateQRCode = catchAsyncErrors(async (req, res, next) => {
  const url = req.body.url;
  if (url.length === 0) {
    return next(new ErrorHandler("Url is not found", 404));
  } else {
    QRCode.toDataURL(url, function (err, url) {
      res.status(200).json({
        success: true,
        data: url,
      });
    });
  }
});

// get public user profile => api/v1/publicProfile
exports.getPublicProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id).select("-__v");

  res.status(200).json({
    success: true,
    data: user,
  });
});
