import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDeleteEventByIdMutation, useEventsQuery, useGetSingleEventQuery, usePostNewEventMutation, useUpdateEventMutation } from "../../../Redux/adminAuth";
import { useAlert } from 'react-alert';
import { useSelector } from "react-redux";
import { useEventsUsersQuery } from "../../../Redux/authApi";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { Slide } from "@mui/material";
import DeleteEventModal from "../../components/EventsComponents/EventsModals/DeleteEventModal";
import EditEventModal from "../../components/EventsComponents/EventsModals/EditEventModal";
import EventsAddAndRefresh from "../../components/EventsComponents/EventsLayouts/EventsAddAndRefresh";
import AddEventModal from "../../components/EventsComponents/EventsModals/AddEventModal";
import EventCard from "../../components/EventsComponents/EventsCards/EventCard";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Events = () => {
  const isAdmin = useSelector(state => state.user.user?.isAdmin ?? false);
  const [data, setData] = useState(null);
  const { isLoading: queryLoading, data: queryData ,refetch} = useEventsQuery();
  const { isLoading:usersQueryLoading,data: usersEvents } = useEventsUsersQuery();
  const [deletePostMutation,{isLoading:deleteLoading}] = useDeleteEventByIdMutation();
  const [postEvent,{isLoading:addNewEventLoading}]=usePostNewEventMutation()
  const alert = useAlert();
  const [isModalOpen,setIsModalOpen]=useState(false)
  const [days,setDays]=useState("")
  const[title,setTitle]=useState("");
  const [duration,setDuration]=useState("");
  const [date,setDate]=useState("");
  const [id,setId]=useState(null)
  const {data:eventsData,refetch:eventRefetch}=useGetSingleEventQuery(id)
  const [event,setEvent]=useState({
    days:"",
    date:"",
    duration:"",
    title:""
  })
  const [isEditModalOpen,setIsEditModalOpen]=useState(false)
  const [updateEvent,{isLoading:updateLoading}]=useUpdateEventMutation()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setData(isAdmin ? queryData : usersEvents);
  }, [queryData,usersEvents,isAdmin]);

  useEffect(() => {
    setEvent(eventsData?.event);
  }, [eventsData]);
  

  const handleDelete = async (id) => {
    try {
        const data = await deletePostMutation(id).unwrap();
        alert.success(data?.message);
        handleClose()
        return;
      
    } catch (e) {
      alert.error(e?.data?.err);
      return;
    }
  }

  const settings = {
    dots: data?.events?.length > 3,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: Math.min(data?.events?.length, 3),
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

  const fetchData=async()=>{
    await refetch()
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()


    try{

      const data=await postEvent({days,date,duration,title}).unwrap()
      alert.success(data?.message)
      setIsModalOpen(false)
      setDays("")
      setDate("")
      setDuration("")
      setTitle("")

    }catch(e){
      alert.error(e?.data?.err)
      return;
    }


  }

  const handleEditEvent=(id)=>{

setId(id)
setIsEditModalOpen(true)

  }

  const handleEditSubmit=async(e)=>{

e.preventDefault()

    try{

   const data=await updateEvent({event,id}).unwrap();
   alert.success(data?.message)
   setIsEditModalOpen(false)
   await eventRefetch()
   setEvent({})

    }catch(e){
      alert.error(e?.data?.err)
    }

  }

 



  return (
    <>
    <div className="w-[90%] py-20 mx-auto tracking-wide font-semibold relative">
      {
        isAdmin && <EventsAddAndRefresh fetchData={fetchData} setIsModalOpen={setIsModalOpen} />
      }


        <>
          {data?.events ? data?.events?.length > 0 ? (
            <Slider {...settings} className="">
              {data?.events?.map((item) => (
                <EventCard key={item?._id} item={item} handleDelete={()=> {handleClickOpen() ; setId(item?._id)}} handleEditEvent={handleEditEvent} isAdmin={isAdmin} />
              ))}
            </Slider>
          ) : (
            <h2 className="text-center font-semibold tracking-wider text-[25px] text-gray-500 animate-bounce">No data yet &#58; &#40; </h2>
          )
        :  <>
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
        <LinearProgress color="secondary" />
       
      </Stack>
     
        </>


        }
        </>
      
    </div>
 
 <AddEventModal Modal={Modal} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleSubmit={handleSubmit} setDays={setDays} setDuration={setDuration} setDate={setDate} setTitle={setTitle} addNewEventLoading={addNewEventLoading}/>

<EditEventModal Modal={Modal} isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} handleEditSubmit={handleEditSubmit} setEvent={setEvent} updateLoading={updateLoading} event={event}/>

<DeleteEventModal id={id} Transition={Transition} handleClose={handleClose} deleteLoading={deleteLoading} handleDelete={handleDelete} open={open}/>

    </>
  );
}

export default Events;
