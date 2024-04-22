const mongoose=require("mongoose")
const validator = require("validator");


const SheduleVisitSchema=new mongoose.Schema({

    name: {
        type:String,
        required:true,
        minlength: [3, "FirstName should contain atleast 3 characters"],
        maxLength: [30, "FirstName can not be more than 30 characters"],
    } ,
    date:{
        type:String,
        required:true,

    },
    phone:{

        type:String,
        minlength: [10, "Enter a valid phone number"],
        required:true
    },
    class:{
        type:String,
        required:[true,"Please select a class"],

  },
  

},{
    timestamps:true
})

const ScheduleVisit=new mongoose.model("ScheduleVisit",SheduleVisitSchema);
module.exports = ScheduleVisit;