const mongoose = require("mongoose");
const validator = require("validator");

const ParentsEnrollmentForm = new mongoose.Schema({
    parentname: {
        type: String,
        required: [true, "Please enter your name"],
        minlength: [5, "Name should have at least 5 characters"],
        maxlength: [30, "Name cannot exceed 30 characters"],
        trim: true,
        uppercase: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        trim: true,
        lowercase: true,
        validate: {
            validator: value => validator.isEmail(value),
            message: "Invalid Email"
        }
    },
    message: {
        type: String,
        required: [true, "Please enter your message"],
        trim: true
    },
    phone:{
        type:String,
        required: [true, "Please enter your message"],
        trim: true,
        minlength:[10, "Phone number must be at least 10 characters"],
        maxlength:[10, "Phone number cannot be more than 10 characters"]
    }
},{
    timestamps:true
});

const ParentsEnrollment = mongoose.model("ParentsEnrollment", ParentsEnrollmentForm);
module.exports = ParentsEnrollment;
