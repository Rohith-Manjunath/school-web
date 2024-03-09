import Slider from "react-slick";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDeleteEventMutation, useGetAllEventsQuery } from "../../../Redux/adminAuth";
import Modal from "react-modal";

const Events = () => {
  const { user } = useSelector((state) => state.user);
  const { isAdmin } = user;
  const { data, isLoading: isEventsLoading, isError: isEventsError, error: eventsError } = useGetAllEventsQuery();
  const [openModal, setOpenModal] = useState(false);
  const [eventIdToDelete, setEventIdToDelete] = useState(null);
  const [deleteEvent, { isLoading: isDeleting, isError: deleteError, error: deleteEventError }] = useDeleteEventMutation();

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
  

  const handleCancelDelete = () => {
    setOpenModal(false);
    setEventIdToDelete(null);
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

  if (isEventsLoading || isDeleting) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <ToastContainer />
      <DeleteModal {...settings} onCancel={handleCancelDelete} onConfirm={()=>handleConfirmDelete(eventIdToDelete)}/>
       
   
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
                <MdDelete
                  onClick={() => {
                    setOpenModal(true);
                    setEventIdToDelete(item._id);
                  }}
                  className="text-red-600 absolute top-0 text-xl right-0 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-red-500"
                />
              )}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Events;
