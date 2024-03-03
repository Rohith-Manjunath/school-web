const User = require("../models/UserSchema");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../utils/catchAsyncError");

exports.registerUser=catchAsyncError(async(req,res,next)=>{
    const { name, email, password ,confirmPassword} = req.body;
    const user = await User.findOne({ email });
  
    if (user) {
      return next(new ErrorHandler("User already exists", 400));
    }

    if(!password || !confirmPassword) {
        return next(new ErrorHandler("Both password and confirmPassword are required", 400));
    }

    if(password!==confirmPassword){
        return next(new ErrorHandler("Passwords doesn't match",400))
    }
  
    const newuser = await User.create({
      name,
      email,
      password,
    });
  
    res.status(201).json({
        success:true,
        newuser
    })




})