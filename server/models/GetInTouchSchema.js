const mongoose = require("mongoose");
const validator = require("validator");

const GetInTouch = new mongoose.Schema({
    name: {
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
    }
},{
    timestamps:true
});

const Query = mongoose.model("Messages", GetInTouch);
module.exports = Query;
