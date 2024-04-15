const mongoose=require("mongoose");

const events=new mongoose.Schema({

    title:{
        type:String,
        trim:true,
        required:true,

    },
    duration:{
        type:String,
        trim:true,
        required:true,
    },
    date:{
        type:String,
        trim:true,
        required:true,
    },
    days:{
        type:String,
        trim:true,
        required:true,
    }

},
{
    timestamps:true
})

const Events=mongoose.model("Event",events);
module.exports = Events;