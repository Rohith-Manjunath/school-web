const AdmissionQuery = require("../models/AdmissionEnquiry");
const Awards = require("../models/AwardsSchema");
const Enrollment = require("../models/EnrollmentSchema");
const Events = require("../models/EventsSchema");
const Gallery = require("../models/GalleryModel");
const News = require("../models/NewsSchema");
const ParentsEnrollment = require("../models/ParentsEnrollment");
const User = require("../models/UserSchema");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../utils/catchAsyncError");
const cloudinary = require("cloudinary");


exports.postEvent=catchAsyncError(async(req,res,next)=>{

    const {duration,date,title,days}=req.body;

    await Events.create(req.body);

    res.status(201).json({
        success:true,
        message:"Event created successfully"
    })
})

exports.deleteEvent=catchAsyncError(async(req,res,next)=>{

    const {id}=req.params;

    if(!id){
        return next(new ErrorHandler("Invalid id",401));
    }

    const findId=await Events.findById({_id:id})

    if(!findId){
        return next(new ErrorHandler("Id not found",404));
    }

    await Events.deleteOne({_id:id});

    res.status(200).json({
        success: true,
        message:"Event deleted successfully"
    })


})

exports.updateEvent=catchAsyncError(async(req,res,next)=>{

    const {id}=req.params;

    if(!id){
        return next(new ErrorHandler("Invalid id",401));
    }

    const event=await Events.findById({_id:id})

    

    if(!event){
        return next(new ErrorHandler("Id not found",404));
    }

    const {title,duration,date,days}=req.body;


    event.date=date;
    event.title=title;
    event.duration=duration;
    event.days=days;

    await event.save()
    
    res.status(200).json({
        success: true,
        message:"Event updated successfully"
    })


})

exports.getSingleEvent=catchAsyncError(async(req,res,next)=>{

    const {id}=req.params;
    if(!id){
        return next(new ErrorHandler("Invalid id / id must be provided"))
    }

    const event=await Events.findById({_id:id});

    if(!event){
        return next(new ErrorHandler("No event found",404));
    }

    res.status(200).json({
        success:true,
        event
        
    })

})

exports.getAllEvents=catchAsyncError(async(req,res,next)=>{

    const events=(await Events.find()).reverse();
    const totalEvents=await Events.countDocuments()
    res.status(200).json({
        success:true,
        events,
        totalEvents
    })

})

exports.getAllUsers=catchAsyncError(async(req,res,next)=>{

    const users=await User.find().sort({createdAt:-1});
    const totalUsers=await User.countDocuments()


    res.status(200).json({
        success:true,
        users,
        totalUsers
    })

})

exports.getUserDetails=catchAsyncError(async(req,res,next)=>{

    const {userId}=req.params;
    if(!userId){
        return next(new ErrorHandler("Invalid id / id must be provided"))
    }

    const user=await User.findById({_id:userId});

    if(!user){
        return next(new ErrorHandler("No user found",404));
    }

    res.status(200).json({
        success:true,
        user
        
    })

})

exports.updateUser=catchAsyncError(async(req,res,next)=>{

    const {userId}=req.params;
    if(!userId){
        return next(new ErrorHandler("Invalid id / id must be provided"))
    }

    const user=await User.findById({_id:userId});

    if(!user){
        return next(new ErrorHandler("No user found",404));
    }

    if(!req.body.isAdmin){
        return next(new ErrorHandler("You must specify a role",400))
    }

    user.isAdmin= req.body.isAdmin
    await user.save()

    res.status(200).json({
        success:true,
        message:"User role updated successfully",
        user
        
    })

})

exports.deleteUser=catchAsyncError(async(req,res,next)=>{

    const {userId}=req.params;
    if(!userId){
        return next(new ErrorHandler("Invalid id / id must be provided"))
    }

    const user=await User.findById({_id:userId});

    if(!user){
        return next(new ErrorHandler("No user found",404));
    }

  await User.deleteOne({_id:userId})

    res.status(200).json({
        success:true,
        message:"User deleted successfully",
     
        
    })

})


exports.getAllAdmissionQueries=catchAsyncError(async(req,res,next)=>{

    const queries=await AdmissionQuery.find().sort({createdAt:-1});
    const totalQueries=await AdmissionQuery.countDocuments()
    res.status(200).json({
        success:true,
        queries,
        totalQueries
    })


})


exports.deleteAdmissionQuery=catchAsyncError(async(req,res,next)=>{

    const {id}=req.params;


   const query=await AdmissionQuery.findById(id)

   if(!query){
    return next(new ErrorHandler("Query not found",404));
   }

   await AdmissionQuery.deleteOne({_id:id})

    res.status(200).json({
        success:true,
        message:"Query data deleted successfully"
    })

})



exports.postNews=catchAsyncError(async(req,res,next)=>{

   try{
    const {time,date,image,title}=req.body;

    const myCloud = await cloudinary.v2.uploader.upload(image, {
        folder: "school/newsImages",
        width: 700,
        height: 700,
        crop: "scale",
      });

      const isNewsExists=await News.findOne({title})

      if(isNewsExists){
        return next (new ErrorHandler(`News already exists with this title : ${title}`, 409))
      }

       await News.create({
        title,
        time,
        date,
        avatar: {
          public_id: myCloud?.public_id,
          url: myCloud?.secure_url,
        },
      });

      res.status(201).json({
        success:true,
        message:"New news created successfully"

      })


   }catch(e){
    return next(new ErrorHandler(e.message,500))
   }

})

exports.getAllNews=catchAsyncError(async(req,res,next)=>{

    const news=(await News.find()).reverse();

    const totalNews = await News.countDocuments();

    res.status(200).json({
        success:true,
        news,
        totalNews
    })



})

exports.deleteNews=catchAsyncError(async(req,res,next)=>{
    const {newsId}=req.params;
    if(!newsId){
        return next(new ErrorHandler("Invalid id / id must be provided",404))
    }

    const news=await News.findById(newsId);

    if(!news){
        return next(new ErrorHandler("No news found",404));
    }

    const {public_id}=news.avatar
    cloudinary.v2.uploader.destroy(public_id);


  await News.deleteOne({_id:newsId})

    res.status(200).json({
        success:true,
        message:"News deleted successfully",
     
        
    })
})


exports.getSingleNews=catchAsyncError(async(req,res,next)=>{

    const {newsId}=req.params;
    if(!newsId){
        return next(new ErrorHandler("Invalid id / id must be provided"))
    }

    const news=await News.findById(newsId);

    if(!news){
        return next(new ErrorHandler("No news found",404));
    }

    res.status(200).json({
        success:true,
        news
        
    })

})




exports.updateNews=catchAsyncError(async(req,res,next)=>{

    const {newsId}=req.params;

    if(!newsId){
        return next(new ErrorHandler("Invalid id",401));
    }

    const news=await News.findById(newsId)

    

    if(!news){
        return next(new ErrorHandler("News not found",404));
    }

    const {title,date,time,image}=req.body;


    const {public_id}=news.avatar
    cloudinary.v2.uploader.destroy(public_id);

    const myCloud = await cloudinary.v2.uploader.upload(image, {
        folder: "school/newsImages",
        width: 700,
        height: 700,
        crop: "scale",
      });



    news.title=title;
    news.date=date;
    news.time=time;
    news.avatar.public_id=myCloud?.public_id
    news.avatar.url=myCloud?.secure_url

    await news.save()
    
    res.status(200).json({
        success: true,
        message:"News updated successfully"
    })


})


exports.uploadGalleryImages = catchAsyncError(async (req, res, next) => {
    const { title, images } = req.body; // Expecting `images` to be an array of base64 strings or image URLs

    if (!Array.isArray(images) || images.length === 0) {
        return next(new ErrorHandler("Please upload at least one image", 400));
    }

    const isTitleExists = await Gallery.findOne({ title });

    if (isTitleExists) {
        return next(new ErrorHandler(`Content already exists with this title: ${title}`, 409));
    }

    let imageArray = [];
    for (let image of images) {
        const myCloud = await cloudinary.v2.uploader.upload(image, {
            folder: "school/gallery",
            width: 2736,
            height: 1536,
            crop: "scale",
        });

        imageArray.push({
            public_id: myCloud.public_id,
            url: myCloud.secure_url
        });
    }

    await Gallery.create({
        title,
        avatar: imageArray
    });

    res.status(201).json({
        success: true,
        message: "Gallery content added successfully"
    });
});


exports.deleteGallery=catchAsyncError(async(req,res,next)=>{
    const {id}=req.params;
    if(!id){
        return next(new ErrorHandler("Invalid id / id must be provided"))
    }

    const content=await Gallery.findById(id);

    if(!content){
        return next(new ErrorHandler("No content found",404));
    }

  for(let i=0;i<content?.avatar?.length;i++){

    await cloudinary.v2.uploader.destroy(content?.avatar[i]?.public_id);


  }

  await Gallery.deleteOne({_id:id})

    res.status(200).json({
        success:true,
        message:"Content deleted successfully",
     
        
    })
})


exports.updateGallery = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
      return next(new ErrorHandler("Invalid id", 401));
    }
  
    const content = await Gallery.findById(id);
    if (!content) {
      return next(new ErrorHandler("Content not found", 404));
    }
  
    const { title, images } = req.body;
  
    if (!title || !images || !Array.isArray(images)) {
      return next(new ErrorHandler("Invalid data provided", 400));
    }
  
    // Delete old images from Cloudinary
    try {
      if (content?.avatar?.length) {
        await Promise.all(content.avatar.map(image => cloudinary.v2.uploader.destroy(image.public_id)));
      }
    } catch (error) {
      return next(new ErrorHandler("Failed to delete old images", 500));
    }
  
    // Upload new images to Cloudinary
    const imageArray = [];
    try {
      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
          folder: "school/gallery",
          width: 700,
          height: 700,
          crop: "scale",
        });
        imageArray.push({ public_id: result.public_id, url: result.secure_url });
      }
    } catch (error) {
      return next(new ErrorHandler("Failed to upload new images", 500));
    }
  
    // Update the content with new title and images
    content.title = title;
    content.avatar = imageArray;
    await content.save();
  
    res.status(200).json({
      success: true,
      message: "Content updated successfully",
    });
  });


exports.getAllGallery=catchAsyncError(async(req,res,next)=>{

    const content=(await Gallery.find()).reverse()
    const totalContent=await Gallery.countDocuments()

    res.status(200).json({

        success:true,
        content,
        totalContent

    })

})


exports.getSingleGalleryContent=catchAsyncError(async(req,res,next)=>{

    const {id}=req.params;
    if(!id){
        return next(new ErrorHandler("Invalid id / id must be provided"))
    }

    const content=await Gallery.findById(id);

    if(!content){
        return next(new ErrorHandler("No content found",404));
    }

    res.status(200).json({
        success:true,
        content
        
    })
})

exports.getAllAwards=catchAsyncError(async(req,res,next)=>{

const awards=(await Awards.find()).reverse();

const totalAwards=await Awards.countDocuments()

res.status(200).json({
    success:true,
    awards,
    totalAwards
})


})

exports.getSingleAward=catchAsyncError(async(req,res,next)=>{

    const {id}=req.params;

    if(!id){

        return next(new ErrorHandler("Invalid id / id must be provided",404));

    }

    const award=await Awards.findById(id)

    if(!award){
        return next(new ErrorHandler("No data found for this id",404));

    }

    res.status(200).json({
        success:true,
        award
    })

})

exports.postAward=catchAsyncError(async(req,res,next)=>{

    try{
     const {image}=req.body;
 
     const myCloud = await cloudinary.v2.uploader.upload(image, {
         folder: "school/awards",
         width: 700,
         height: 700,
         crop: "scale",
       });
 
        await Awards.create({
         avatar: {
           public_id: myCloud?.public_id,
           url: myCloud?.secure_url,
         },

       });
 
       res.status(201).json({
         success:true,
         message:"New Award created successfully"
 
       })
 
 
    }catch(e){
     return next(new ErrorHandler(e.message,500))
    }
 
 })
 


 exports.deleteAward=catchAsyncError(async(req,res,next)=>{
    const {id}=req.params;
    if(!id){
        return next(new ErrorHandler("Invalid id / id must be provided",404))
    }

    const award=await Awards.findById(id);

    if(!award){
        return next(new ErrorHandler("No award found",404));
    }

    const {public_id}=award.avatar
    cloudinary.v2.uploader.destroy(public_id);


  await Awards.deleteOne({_id:id})

    res.status(200).json({
        success:true,
        message:"Award deleted successfully",
     
        
    })
})


exports.updateAward=catchAsyncError(async(req,res,next)=>{

    const {id}=req.params;

    if(!id){
        return next(new ErrorHandler("Invalid id",401));
    }

    const award=await Awards.findById(id)

    

    if(!award){
        return next(new ErrorHandler("News not found",404));
    }

    const {title,description,image}=req.body;


    const {public_id}=award.avatar
    cloudinary.v2.uploader.destroy(public_id);

    const myCloud = await cloudinary.v2.uploader.upload(image, {
        folder: "school/awards",
        width: 700,
        height: 700,
        crop: "scale",
      });



    award.title=title;
    award.description=description;
    award.avatar.public_id=myCloud?.public_id
    award.avatar.url=myCloud?.secure_url

    await award.save()
    
    res.status(200).json({
        success: true,
        message:"Award updated successfully"
    })


})

exports.getAllHomeEnrollments=catchAsyncError(async(req,res,next)=>{

    const enrollments=await Enrollment.find().sort({createdAt:-1})

    res.status(200).json({
        success:true,
        data:enrollments
    })

})

exports.getSingleHomeEnrollment=catchAsyncError(async(req,res,next)=>{

    const {id}=req.params;


   const enrollment=await Enrollment.findById(id)

   if(!enrollment){
    return next(new ErrorHandler("Enrollment not found",404));
   }

    res.status(200).json({
        success:true,
        data:enrollment
    })

})
exports.deleteHomeEnrollment=catchAsyncError(async(req,res,next)=>{

    const {id}=req.params;


   const enrollment=await Enrollment.findById(id)

   if(!enrollment){
    return next(new ErrorHandler("Enrollment not found",404));
   }

   await Enrollment.deleteOne({_id:id})

    res.status(200).json({
        success:true,
        message:"Enrollment data deleted successfully"
    })

})

exports.getAllParentsEnrollments=catchAsyncError(async(req,res,next)=>{

    const enrollments=await ParentsEnrollment.find().sort({createdAt:-1})

    res.status(200).json({
        success:true,
        data:enrollments
    })

})

exports.deleteParentsEnrollment=catchAsyncError(async(req,res,next)=>{

    const {id}=req.params;


   const enrollment=await ParentsEnrollment.findById(id)

   if(!enrollment){
    return next(new ErrorHandler("Enrollment not found",404));
   }

   await ParentsEnrollment.deleteOne({_id:id})

    res.status(200).json({
        success:true,
        message:"Enrollment data deleted successfully"
    })

})