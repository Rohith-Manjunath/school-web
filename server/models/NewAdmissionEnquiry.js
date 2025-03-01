const mongoose = require("mongoose");
const validator = require("validator");

const NewAdmissionEnquiry = new mongoose.Schema({
  parentName: {
    type: String,
    required: true,
    minlength: [6, "ParentsName should contain atleast 6 characters"],
    maxLength: [30, "ParentsName can not be more than 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter a valid email"],
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: {
    type: String,
    minlength: [10, "Enter a valid phone number"],
    required: true,
  },
  grade: {
    type: String,
    required: [true, "Please select a grade"],
    enum: ["Pre-Kindergarten","Kindergarten","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  },
  referenceNumber:{
    type:String,
    required:true,
    unique:true

  }
}, { timestamps: true });

module.exports = mongoose.model("NewAdmissionEnquiry", NewAdmissionEnquiry);
