const mongoose=require("mongoose")

const EnrollmentSchema=new mongoose.Schema({

    name: {
        type:String,
        required:true,
        minlength: [6, "Name should contain atleast 6 characters"],
        maxLength: [30, "Name can not be more than 30 characters"],
    } ,
    dob:{
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
    category:{
        type:String,
        required:true,

  },
  address:{
    type:String,
    required:true,
    minlength: [20, "address should be 20 characters long"],
    maxlength: [150, "address can not be more than 150 characters"],
  }




},{
    timestamps:true
})

const Enrollment=new mongoose.model("HomeEnrollment",EnrollmentSchema);
module.exports = Enrollment;