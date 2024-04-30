const mongoose=require("mongoose")

const AwardsSchema=new mongoose.Schema({

    title:{
        type:String,
        trim:true,
        required:true,
    },
    description:{
        type:String,
        trim:true,
        required:true,
    },
   
    avatar: {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },

},{
    timestamps:true
})

const Awards=mongoose.model("Award",AwardsSchema);
module.exports = Awards;