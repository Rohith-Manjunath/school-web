const mongoose=require("mongoose");

const GalleryImages=new mongoose.Schema({
    
    title:{
        type: String,
        required: [true, "Please enter title"]
    },

    avatar: [{
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      }]

},{
    timestamps:true
})

const Gallery=mongoose.model("Gallery",GalleryImages);
module.exports=Gallery