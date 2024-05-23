const mongoose=require("mongoose")

const NewsSchema=new mongoose.Schema({

    title:{
        type:String,
        trim:true,
        required:true,
    },
    time:{
        type:String,
        trim:true,
        required:true,
    },
    date:{
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

const News=mongoose.model("News",NewsSchema);
module.exports = News;