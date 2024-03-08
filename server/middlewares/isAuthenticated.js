const ErrorHandler = require("../utils/ErrorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");
const catchAsyncError = require("../utils/catchAsyncError");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  const decodedData = jwt.verify(token, process.env.SECRET);
  const user = await User.findById(decodedData.id);
  req.user = user;
  next();
});

exports.isAdmin = catchAsyncError(async (req, res, next) => {
 
  const {user}=req;
  const {isAdmin}=user;

  if(!isAdmin){
    return next(new ErrorHandler("Only admin can perform this action",400))
  }else{
    next();
  }

});