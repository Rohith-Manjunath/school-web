const mongoose=require("mongoose")

const AwardsSchema=new mongoose.Schema({
    avatar: {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },

},{
    timestamps:true
})

const Awards=mongoose.model("Award",AwardsSchema);
module.exports = Awards;