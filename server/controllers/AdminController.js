const Events = require("../models/EventsSchema");
const News = require("../models/NewsSchema");
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

    const events=await Events.find();
    const totalEvents=await Events.countDocuments()
    res.status(200).json({
        success:true,
        events,
        totalEvents
    })

})

exports.getAllUsers=catchAsyncError(async(req,res,next)=>{

    const users=await User.find();
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

    const queries=await AdmissionQuery.find();
    const totalQueries=await AdmissionQuery.countDocuments()
    res.status(200).json({
        success:true,
        queries,
        totalQueries
    })


})

exports.postNews=catchAsyncError(async(req,res,next)=>{

   try{
    const {time,date,image,title}=req.body;

    const myCloud = await cloudinary.v2.uploader.upload(image, {
        folder: "school/newsImages",
        width: 250,
        height: 250,
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

    const news=await News.find();

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
        return next(new ErrorHandler("Invalid id / id must be provided"))
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
        width: 250,
        height: 250,
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
