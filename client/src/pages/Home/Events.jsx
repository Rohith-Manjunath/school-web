import Slider from "react-slick";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDeleteEventMutation, useGetAllEventsQuery, useGetSingleEventQuery } from "../../../Redux/adminAuth";
import Modal from "react-modal";
import { FaPen } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";



const Events = () => {
  const { user } = useSelector((state) => state.user);
  const { isAdmin } = user;
  const { data,isLoading: isEventsLoading, isError: isEventsError, error: eventsError } = useGetAllEventsQuery();
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [eventIdToDelete, setEventIdToDelete] = useState(null);
  const [eventIdToEdit, setEventIdToEdit] = useState(null);
  const { data: event, isLoading: isGetEventLoading, isError: isGetEventError, error: getEventError } = useGetSingleEventQuery(eventIdToEdit);
  const [deleteEvent, { isLoading: isDeleting, isError: deleteError, error: deleteEventError }] = useDeleteEventMutation();
  const [eventDetails,setEventDetails] = useState({
    title:event?.event?.title,
    days:event?.event?.days,
    duration:event?.event?.duration,
    date:event?.event?.date
  })

  useEffect(()=>{
    setEventDetails(event?.event)
  },[event])

  console.log(eventDetails)

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

  const handleConfirmDelete = async (id) => {
    if (id) {
      try {
        await deleteEvent(id)
        toast.success("Event deleted successfully");
        setOpenModal(false); // Close the modal
        setEventIdToDelete(null); // Reset eventIdToDelete
      } catch (error) {
        toast.error(error.message);
      }
    }
  };


  const handleConfirmEdit = async (id) => {
  
    try{

      console.log(eventDetails)

    }catch(e){
      toast.error(e.message);

    }

   
  };
  

  const handleCancelDelete = () => {
    setOpenModal(false);
    setEventIdToDelete(null);
  };

  const handleCancelEdit = () => {
    setOpenEditModal(false);
    setEventIdToEdit(null);
  };

  const handleEventChange = (e) => {
    const { name, value } = e.target;  
  
    setEventDetails(prevEventDetails => ({
      ...prevEventDetails,
      [name]: value,
    }));
  };
  

  const DeleteModal = ({ onConfirm, onCancel }) => {
    return (
      <Modal  isOpen={openModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setOpenModal(false)}
      style={{
        overlay: {
          zIndex: 9999,
          backgroundColor: `rgba(0, 0, 0, 0.5)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          width: "80%",
          maxWidth: "600px",
          height: "auto",
          margin: "0 auto",
          padding: "20px",
          color: "#580B57",
          background: "#fff",
          borderRadius: "8px",
        },
      }}
      className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center flex-col gap-4">
          <p className="text-[18px] font-semibold">Are you sure you want to delete this event?</p>
          <div className="flex items-center justify-center gap-6">
            <button onClick={onConfirm} className="font-semibold bg-red-600 p-2 text-white rounded-md tracking-widest text-[15px] hover:bg-red-500">Confirm</button>
            <button onClick={onCancel} className="btn font-semibold bg-blue-600 p-2 text-white rounded-md tracking-widest text-[15px] hover:bg-blue-500 ">Cancel</button>
          </div>
        </div>
      </Modal>
    );
  };

  const EditModal = ({ onConfirm, onCancel }) => {
    return (
      <Modal  isOpen={openEditModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setOpenEditModal(false)} // Change setOpenModal to setOpenEditModal
      style={{
        overlay: {
          zIndex: 9999,
          backgroundColor: `rgba(0, 0, 0, 0.5)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      
        content: {
          width: "80%",
          maxWidth: "600px",
          height: "auto",
          margin: "0 auto",
          padding: "20px",
          color: "#580B57",
          background: "#fff",
          borderRadius: "8px",
          
        },
      }}
      className="flex flex-col items-center justify-center text-center">

       <IoMdClose className="font-semibold" onClick={()=>setOpenEditModal(false)}/>

        <h2 className="mb-4 text-2xl font-semibold tracking-wider">Edit Event Details</h2>
        <div className="flex items-center justify-center flex-col gap-4">
         <input type="text" className="rounded-md border-gray-300 " name="title" value={eventDetails?.title}  onChange={handleEventChange}/>
         <input type="text" className="rounded-md border-gray-300 " name="days" value={eventDetails?.days}  onChange={handleEventChange}/>
         <input type="text" className="rounded-md border-gray-300 " name="date" value={eventDetails?.date}  onChange={handleEventChange}/>
         <input type="text" className="rounded-md border-gray-300 " name="duration" value={eventDetails?.duration}  onChange={handleEventChange}/>
         <button onClick={handleConfirmEdit}  className="btn font-semibold bg-blue-600 p-2 text-white rounded-md tracking-widest text-[15px] hover:bg-blue-500 ">Submit</button>
        </div>
      </Modal>
    );
  };

  useEffect(() => {
    if (isEventsError) {
      toast.error(eventsError.data.err);
    }
  }, [isEventsError, eventsError]);

  useEffect(() => {
    if (deleteError) {
      toast.error(deleteEventError.data.err);
    }
  }, [deleteError, deleteEventError]);

  useEffect(() => {
    if (isGetEventError) {
      toast.error(getEventError.data.err);
    }
  }, [isGetEventError, getEventError]);

  if (isEventsLoading || isDeleting || isGetEventLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <ToastContainer />
      <DeleteModal {...settings} onCancel={handleCancelDelete} onConfirm={()=>handleConfirmDelete(eventIdToDelete)}/>
      <EditModal {...settings} onCancel={handleCancelEdit} onConfirm={()=>handleConfirmEdit(eventIdToEdit)}/>
       
      <div className="w-[80%] py-20 mx-auto tracking-wide font-semibold relative">
        <Slider {...settings} className="">
          {data?.events.map((item) => (
            <div className="text-center text-textSecondary rounded-md border m-auto mr-10 relative" key={item._id}>
              <div className="bg-white underline underline-offset-4 p-8">{item.title}</div>
              <div className="py-14 bg-secondary text-white space-y-2">
                <span className="font-semibold">{item.days}</span>
                <span className="font-semibold">{data?.totalEvents}</span>
                <h2 className="font-semibold text-8xl">{item.date}</h2>
              </div>
              <div className="p-6 bg-white">Duration: {item.duration}</div>
              {isAdmin && (
                <>
                <MdDelete
                  onClick={() => {
                    setOpenModal(true);
                    setEventIdToDelete(item._id);
                  }}
                  className="text-red-600 absolute top-0 text-xl right-0 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-red-500"
                />
                <FaPen
                  onClick={()=>{
                    setOpenEditModal(true)
                    setEventIdToEdit(item._id)
                  }}
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
