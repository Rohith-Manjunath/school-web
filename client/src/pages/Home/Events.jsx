import Slider from "react-slick";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-modal";
import { FaPen } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";



const Events = () => {

  const isAdmin=true;

  const data = {
    events: [
      {
        _id: 1,
        title: "Event 1",
        days: "Monday - Wednesday",
        date: "20-22",
        duration: "3 days",
      },
      {
        _id: 2,
        title: "Event 2",
        days: "Tuesday - Thursday",
        date: "21-23",
        duration: "3 days",
      },
      {
        _id: 3,
        title: "Event 3",
        days: "Wednesday - Friday",
        date: "22-24",
        duration: "3 days",
      },
      // Add more event objects as needed
    ],
  };
  

  const settings = {
    dots: data?.events?.length > 3,
    arrows: data?.events?.length > 3 && true,
    infinite: true,
    speed: 800,
    slidesToShow: Math.min(data?.events?.length, 3), // Show a maximum of 3 slides or the actual number of events, whichever is smaller
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <>
      <ToastContainer />
       
      <div className="w-[80%] py-20 mx-auto tracking-wide font-semibold relative">
        <Slider {...settings} className="">
          {data?.events.map((item) => (
            <div className="text-center text-textSecondary rounded-md border m-auto mr-10 relative" key={item._id}>
              <div className="bg-white underline underline-offset-4 p-8">{item.title}</div>
              <div className="py-14 bg-secondary text-white space-y-2">
                <span className="font-semibold">{item.days}</span>
                <h2 className="font-semibold text-8xl">{item.date}</h2>
              </div>
              <div className="p-6 bg-white">Duration: {item.duration}</div>
              {isAdmin && (
                <>
                <MdDelete
    
                  className="text-red-600 absolute top-0 text-xl right-0 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-red-500"
                />
                <FaPen
                  className="text-blue-600 absolute top-0 text-md right-8 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-blue-500"
                />
                </>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Events;
