const Enrollment = require("../models/EnrollmentSchema");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../utils/catchAsyncError");

exports.Home = (req, res) => {
  res.status(200).json({
    message: "Hello",
  });
};

exports.FormController = catchAsyncError(async (req, res, next) => {
  const { name, dob, category, phone, altPhone, address } = req.body;

  const enroll = await Enrollment.create(req.body);

  res.status(201).json({
    success: true,
    enroll,
  });
});
