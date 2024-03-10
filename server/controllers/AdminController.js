const Events = require("../models/EventsSchema");
const User = require("../models/UserSchema");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../utils/catchAsyncError");

exports.postEvent=catchAsyncError(async(req,res,next)=>{

    const {duration,date,title,days}=req.body;

    await Events.create(req.body);

    res.status(201).json({
        success:true,
        message:"Event created successfully"
    })
})

exports.deleteEvent=catchAsyncError(async(req,res,next)=>{

    const {id}=req.params;

    const findId=await Events.findById({_id:id})

    if(!findId){
        return next(new ErrorHandler("Id not found",404));
    }

    if(!id){
        return next(new ErrorHandler("Invalid id",401));
    }

    await Events.deleteOne({_id:id});

    res.status(200).json({
        success: true,
        message:"Event deleted successfully"
    })


})

exports.getAllEvents=catchAsyncError(async(req,res,next)=>{

    const events=await Events.find();
    const totalEvents=await Events.countDocuments()
    res.status(200).json({
        success:true,
        events,
        totalEvents
    })

})

exports.getAllUsers=catchAsyncError(async(req,res,next)=>{

    const users=await User.find();
    const totalUsers=await User.countDocuments()


    res.status(200).json({
        success:true,
        users,
        totalUsers
    })

})

exports.getUserDetails=catchAsyncError(async(req,res,next)=>{

    const {userId}=req.params;
    if(!userId){
        return next(new ErrorHandler("Invalid id / id must be provided"))
    }

    const user=await User.findById({_id:userId});

    if(!user){
        return next(new ErrorHandler("No user found",404));
    }

    res.status(200).json({
        success:true,
        user
        
    })

})

exports.updateUser=catchAsyncError(async(req,res,next)=>{

    const {userId}=req.params;
    if(!userId){
        return next(new ErrorHandler("Invalid id / id must be provided"))
    }

    const user=await User.findById({_id:userId});

    if(!user){
        return next(new ErrorHandler("No user found",404));
    }

    if(!req.body.isAdmin){
        return next(new ErrorHandler("You must specify a role",400))
    }

    user.isAdmin= req.body.isAdmin
    await user.save()

    res.status(200).json({
        success:true,
        message:"User role updated successfully",
        user
        
    })

})

exports.deleteUser=catchAsyncError(async(req,res,next)=>{

    const {userId}=req.params;
    if(!userId){
        return next(new ErrorHandler("Invalid id / id must be provided"))
    }

    const user=await User.findById({_id:userId});

    if(!user){
        return next(new ErrorHandler("No user found",404));
    }

  await User.deleteOne({_id:userId})

    res.status(200).json({
        success:true,
        message:"User deleted successfully",
     
        
    })

})

