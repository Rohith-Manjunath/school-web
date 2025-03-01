const NewAdmissionEnquiry = require("../models/NewAdmissionEnquiry");
const catchAsyncError = require("../utils/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const { sendAdmissionQuery, notifyAdmissionsTeam } = require("./sendEmail");

exports.submitForm = catchAsyncError(async (req,res,next)=>{
    const {parentName,email,phone,grade,referenceNumber} = req.body;
    const user = await NewAdmissionEnquiry.findOne({email});
    if(user){
        return next(new ErrorHandler("We've already received your email. We will contact you later. Thank you",400));
    }
    const newAdmissionEnquiry = await NewAdmissionEnquiry.create(req.body);
    const parentDetails = {
        parentName:parentName,
        email,
        phone,
        grade,
        referenceNumber
    }
    sendAdmissionQuery(parentDetails);
    notifyAdmissionsTeam(parentDetails);
    res.status(201).json({
        success:true,
        newAdmissionEnquiry
    })
})