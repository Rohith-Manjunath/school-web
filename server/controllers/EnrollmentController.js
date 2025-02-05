const Enrollment = require("../models/EnrollmentSchema");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../utils/catchAsyncError");
const { sendMailOnSubmit } = require("./sendEmail");

exports.Home = (req, res) => {
  res.status(200).json({
    message: "Hello",
  });
};

exports.FormController = catchAsyncError(async (req, res, next) => {
  const { name, dob, category, phone, altPhone, address } = req.body;

  const enroll = await Enrollment.create(req.body);
  
      const message = `You have got new email recieved according to enrollment`;

  await sendMailOnSubmit({
    formData:req.body,
    subject:'New Email Recieved',
    message,

  });
  res.status(201).json({
    success: true,
    enroll,
  });
});
