import Slider from "react-slick";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaPen } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useDeleteEventByIdMutation, useEventsQuery, useGetSingleEventQuery, usePostNewEventMutation, useUpdateEventMutation } from "../../../Redux/adminAuth";
import { useAlert } from 'react-alert';
import { LuRefreshCcw } from "react-icons/lu";
import { IoAddOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEventsUsersQuery, useNewsUsersQuery } from "../../../Redux/authApi";




const Events = () => {
  const isAdmin = useSelector(state => state.user.user?.isAdmin ?? false);
  const [data, setData] = useState(null);
  const { isLoading: queryLoading, data: queryData ,refetch} = useEventsQuery();
  const { data: usersEvents } = useEventsUsersQuery();
  const [deletePostMutation] = useDeleteEventByIdMutation();
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

  useEffect(() => {
    setData(isAdmin ? queryData : usersEvents);
  }, [queryData,usersEvents,isAdmin]);

  useEffect(() => {
    setEvent(eventsData?.event);
  }, [eventsData]);
  

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this post?")) {
        const data = await deletePostMutation(id).unwrap();
        alert.success(data?.message);
        return;
      }
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
    <div className="w-[80%] py-20 mx-auto tracking-wide font-semibold relative">
      {
        isAdmin && <div className="flex items-center justify-center gap-4 absolute top-0 right-0">
        <button onClick={fetchData}>
          <LuRefreshCcw className="w-full font-semibold my-4 text-[25px] tracking-wider text-blue-600 hover:text-blue-500 duration-200 transition-all hover:scale-105 active:scale-90  animate-spin " />
        </button>
        <button>
         <IoAddOutline className="w-full font-semibold my-4 text-[30px] tracking-wider text-blue-600 hover:text-blue-500 duration-200 transition-all hover:scale-105 active:scale-90 " onClick={()=>setIsModalOpen(true)}/>
        </button>
      </div>
      }

        <>
          {data?.events?.length > 0 ? (
            <Slider {...settings} className="">
              {data?.events?.map((item) => (
                <div className="text-center text-textSecondary rounded-md border m-auto mr-10 relative" key={item?._id}>
                  <div className="bg-white underline underline-offset-4 p-8 capitalize tracking-wider" >{item?.title}</div>
                  <div className="py-14 bg-secondary text-white space-y-2">
                    <span className="font-semibold uppercase">{item?.days}</span>
                    <h2 className="font-semibold text-3xl md:text-4xl">{item?.date}</h2>
                  </div>
                  <div className="p-6 bg-white">Duration: {item?.duration}</div>
                  {isAdmin && (
                   <>
                      <MdDelete
                        onClick={() => handleDelete(item?._id)}
                        className="text-red-600 absolute top-0 text-xl right-0 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-red-500"
                      />
                      <FaPen
                      onClick={()=>handleEditEvent(item?._id)}
                        className="text-blue-600 absolute top-0 text-md right-8 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-blue-500"
                      />
                    </>
                  )}
                </div>
              ))}
            </Slider>
          ) : (
            <h2 className="text-center font-semibold tracking-wider text-[25px] text-gray-500 animate-bounce">No data yet &#58; &#40; </h2>
          )}
        </>
      
    </div>
    <Modal
    isOpen={isModalOpen}
    shouldCloseOnOverlayClick={true}
    className=""
    style={{
      overlay: {
        zIndex: 98,
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
      },
      content: {
        width: '90%', // Adjust the width for small screens
        maxWidth: '600px',
        height: '50vh', // Set height to auto for responsiveness
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'column',
        color: '#580B57',
        overflowY: 'auto', // Enable vertical scrolling
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        border: 'none',
        outline: 'none',
      },
    }}
  >
      <button
      className="absolute top-5 right-5 cursor-pointer font-semibold text-3xl"
      onClick={() => setIsModalOpen(false)}
    >
      <IoMdClose />
    </button>
    <h2 className=" mb-5 md:mt-0 mt-[12rem] text-center font-semibold capitalize text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] tracking-wide ">
       Add Event
    </h2>



    <form
          className="md:grid grid-cols-2 gap-6 space-y-5 md:space-y-0 px-6" onSubmit={handleSubmit}
        >
      <div className="flex flex-col gap-2">
        <label className="text-black font-sans tracking-wide font-semibold" htmlFor="duration">
          Duration
        </label>
        <input
          className="rounded-md outline-none border-slate-400 font-serif tracking-wide uppercase text-fuchsia-950 md:text-base"
          type="text"
          name="duration"
          id='duration'
          onChange={(e)=>setDuration(e.target.value)}
          placeholder="Ex : All day"
          
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black font-sans tracking-wide font-semibold" htmlFor="date">
          Date
        </label>
        <input
          className="rounded-md outline-none border-slate-400 font-serif tracking-wide uppercase text-fuchsia-950"
          type="date"
          name="date"
          id='date'
          onChange={(e)=>setDate(e.target.value)}


          
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black font-sans tracking-wide font-semibold" htmlFor="title">
          Title
        </label>
        <input
          className="rounded-md outline-none border-slate-400 font-sans tracking-wide uppercase text-fuchsia-950"
          type="text"
          name="title"
          id='title'
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="Ex : Cultural Event"


          
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black font-sans tracking-wide font-semibold" htmlFor="days">
          Days
        </label>
        <input
          className="rounded-md outline-none border-slate-400 font-sans tracking-wide uppercase text-fuchsia-950"
          type="text"
          name="days"
          id='days'
          onChange={(e)=>setDays(e.target.value)}
          placeholder="Ex : Mon - Fri"

        />
      </div>

      <div className="col-span-2 text-center">
        <button
        disabled={addNewEventLoading}
          type="submit"
          className="bg-ctcPrimary text-white px-4 py-2 rounded-full font-semibold tracking-wide transition-all ease-in-out duration-800"
        >
         {addNewEventLoading ? "Submitting...":"Submit"}
        </button>
      </div>
    </form>
  </Modal>


  <Modal
    isOpen={isEditModalOpen}
    shouldCloseOnOverlayClick={true}
    className=""
    style={{
      overlay: {
        zIndex: 98,
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
      },
      content: {
        width: '90%', // Adjust the width for small screens
        maxWidth: '600px',
        height: '50vh', // Set height to auto for responsiveness
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'column',
        color: '#580B57',
        overflowY: 'auto', // Enable vertical scrolling
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        border: 'none',
        outline: 'none',
      },
    }}
  >
      <button
      className="absolute top-5 right-5 cursor-pointer font-semibold text-3xl"
      onClick={() => setIsEditModalOpen(false)}
    >
      <IoMdClose />
    </button>
    <h2 className=" mb-5 md:mt-0 mt-[12rem] text-center font-semibold capitalize text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] tracking-wide ">
       Edit Event
    </h2>



    <form
      className="md:grid grid-cols-2 gap-6 space-y-5 md:space-y-0 px-6" onSubmit={handleEditSubmit}
    >
      <div className="flex flex-col gap-2">
        <label className="text-black font-sans tracking-wide font-semibold" htmlFor="duration">
          Duration
        </label>
        <input
          className="rounded-md outline-none border-slate-400 font-serif tracking-wide uppercase text-fuchsia-950 md:text-base"
          type="text"
          name="duration"
          id='duration'
          placeholder="Ex : All day"
          value={event?.duration}
          onChange={(e)=>setEvent({...event,duration:e.target.value})}
          
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black font-sans tracking-wide font-semibold" htmlFor="date">
          Date
        </label>
        <input
          className="rounded-md outline-none border-slate-400 font-serif tracking-wide uppercase text-fuchsia-950"
          type="date"
          name="date"
          id='date'
          value={event?.date}
          onChange={(e)=>setEvent({...event,date:e.target.value})}



          
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black font-sans tracking-wide font-semibold" htmlFor="title">
          Title
        </label>
        <input
          className="rounded-md outline-none border-slate-400 font-sans tracking-wide uppercase text-fuchsia-950"
          type="text"
          name="title"
          id='title'
          placeholder="Ex : Cultural Event"
          value={event?.title}
          onChange={(e)=>setEvent({...event,title:e.target.value})}




          
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black font-sans tracking-wide font-semibold" htmlFor="days">
          Days
        </label>
        <input
          className="rounded-md outline-none border-slate-400 font-sans tracking-wide uppercase text-fuchsia-950"
          type="text"
          name="days"
          id='days'
          placeholder="Ex : Mon - Fri"
          value={event?.days}
          onChange={(e)=>setEvent({...event,days:e.target.value})}



        />
      </div>

      <div className="col-span-2 text-center">
        <button
        disabled={updateLoading}
          type="submit"
          className="bg-ctcPrimary text-white px-4 py-2 rounded-full font-semibold tracking-wide transition-all ease-in-out duration-800"
        >
         {updateLoading ? "Updating...":"Update"}
        </button>
      </div>
    </form>
  </Modal>
    </>
  );
}

export default Events;
