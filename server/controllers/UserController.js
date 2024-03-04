const User = require("../models/UserSchema");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../utils/catchAsyncError");
const { jwtToken } = require("../utils/jwtToken");

exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        return next(new ErrorHandler("User already exists", 400));
    }

    if (!password || !confirmPassword) {
        return next(new ErrorHandler("Both password and confirmPassword are required", 400));
    }

    if (password !== confirmPassword) {
        return next(new ErrorHandler("Passwords don't match", 400));
    }

    const newUser = await User.create({
        name,
        email,
        password,
    });

    res.status(201).json({
        success: true,
        newUser
    });
});

exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { password, email } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("User not found", 401));
    }

    //checking the password
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        return next(new ErrorHandler("Invalid credentials", 401));
    }

    jwtToken("Login successful", 200, user, res);
});
