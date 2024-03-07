const mongoose=require("mongoose")
const validator = require("validator");


const AdmissionEnquiry=new mongoose.Schema({

    firstname: {
        type:String,
        required:true,
        minlength: [6, "FirstName should contain atleast 6 characters"],
        maxLength: [30, "FirstName can not be more than 30 characters"],
    } ,
    lastname: {
        type:String,
        required:true,
    } ,
    dob:{
        type:String,
        required:true,

    },
    previousSchool:{
        type:String,
        required:true,

    },
    phone:{

        type:String,
        minlength: [10, "Enter a valid phone number"],
        required:true
    },
    altPhone:{
        type:String,
        minlength: [10, "Enter a valid phone number"],
    },
    class:{
        type:String,
        required:[true,"Please select a class"],

  },
  place:{
    type:String,
    required:[true,"Please enter place name"],
 
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required:[true,"Please enter a valid email"],
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },




},{
    timestamps:true
})

const AdmissionQuery=new mongoose.model("AdmissionQuery",AdmissionEnquiry);
module.exports = AdmissionQuery;