const AdmissionQuery = require("../models/AdmissionEnquiry");
const Events = require("../models/EventsSchema");
const Query = require("../models/GetInTouchSchema");
const News = require("../models/NewsSchema");
const ParentsEnrollment = require("../models/ParentsEnrollment");
const ScheduleVisit = require("../models/ScheduleVisit");
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

exports.logout=catchAsyncError(async(req,res,next)=>{

    res.clearCookie("token").status(200).json({
        success:true,
        message:"Logged out successfully"
    })

})

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

exports.me=catchAsyncError(async(req,res,next)=>{

    const{user}=req;
    if(!user){
        return next(new ErrorHandler("Please login", 401));
    }
    res.status(200).json({
        success:true,
        user
    })

})

exports.userQuery=catchAsyncError(async(req,res,next)=>{

    const {name,email,message}=req.body;

    

    await Query.create(req.body);
    res.status(200).json({
        success:true,
        message:"Query submitted successfully"
    })

})

exports.parentsEnroll=catchAsyncError(async(req,res,next)=>{

    const {parentname,email,message,phone}=req.body;

    

    await ParentsEnrollment.create(req.body);
    res.status(200).json({
        success:true,
        message:"Query submitted successfully"
    })

})

exports.admissionEnquiry=catchAsyncError(async(req,res,next)=>{

    const {firstname,lastname,email,phone,altPhone,dob,Class,place,previousSchool}=req.body;

    const user = await AdmissionQuery.findOne({ email });

    if (user) {
        return next(new ErrorHandler("We have already received information for this email", 400));
    }

    await AdmissionQuery.create(req.body)
    res.status(200).json({
        success:true,
        message:"Query submitted successfully",
    })

})

exports.scheduleVisit=catchAsyncError(async(req,res,next)=>{

    await ScheduleVisit.create(req.body)

    res.status(201).json({
        success:true,
        message:"Your visit has been scheduled successfully",
    })

})

exports.getAllNewsForUsers=catchAsyncError(async(req,res,next)=>{

    const news=await News.find()
    const newsCount=await News.countDocuments()

    res.status(200).json({
        success:true,
        news,
        newsCount

    })

})


exports.getAllEventsForUsers=catchAsyncError(async(req,res,next)=>{

    const events=await Events.find()
    const eventsCount=await Events.countDocuments()

    res.status(200).json({
        success:true,
        events,
        eventsCount

    })

})