import Slider from "react-slick";
import { useDeleteNewsMutation, useGetAllNewsQuery, usePostNewsMutation } from "../../../Redux/adminAuth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useAlert } from "react-alert";
import { LuRefreshCcw } from "react-icons/lu";
import { IoAddOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import { useNewsUsersQuery } from "../../../Redux/authApi";
import {LinearProgress, Stack } from "@mui/material";
import NewsCard from "../../components/layouts/Cards/NewsCard";


const News = () => {

  const { isLoading: queryLoading, data: queryData ,refetch}=useGetAllNewsQuery()
  const [data, setData] = useState(null);
  const isAdmin = useSelector(state => state.user.user?.isAdmin ?? false);
    const [deleteNewsMutation] = useDeleteNewsMutation();
  const alert = useAlert();
  const [isModalOpen,setIsModalOpen]=useState(false)
  const [date,setDate]=useState("")
  const [time,setTime]=useState("");
  const [title,setTitle]=useState("")
  const [image,setImage]=useState("")
  const [postNews,{isLoading:postLoading}]=usePostNewsMutation()
  const { data: usersNews } = useNewsUsersQuery()


  
  useEffect(() => {
    setData(isAdmin ? queryData : usersNews);
  }, [queryData, usersNews , isAdmin]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3, // Number of slides to show on larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for smaller screens
        settings: {
          slidesToShow: 1, // Number of slides to show on smaller screens
        },
      },
    ],
  };

  
  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this news?")) {
        const data = await deleteNewsMutation(id).unwrap();
        alert.success(data?.message);
        return;
      }
    } catch (e) {
      alert.error(e?.data?.err);
      return;
    }
  };

  const fetchData=async()=>{
    await refetch()
  }


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      if (reader.readyState === 2) {
        const imageUrl = reader.result;
        setImage(imageUrl);
      }
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  


  const handleSubmit=async(e)=>{
    e.preventDefault()


    try{

      const data=await postNews({title,time,image,date}).unwrap()
      alert.success(data?.message)
      setIsModalOpen(false)

    }catch(e){
      alert.error(e?.data?.err)
      return;
    }

  }


  return (
    <div className="w-[80%] lg:w-[90%] py-20 mx-auto ">
     { isAdmin && <div className="flex items-center justify-end gap-2">
      <button onClick={fetchData} className="">
        <LuRefreshCcw title="Refetch Data" className="w-full font-semibold my-4 text-[25px] tracking-wider text-blue-600 hover:text-blue-500 duration-200 transition-all hover:scale-105 active:scale-90  animate-spin " />
      </button>
      <button>
       <IoAddOutline title="Add News" className="w-full  font-semibold my-4 mx-1  text-[30px] tracking-wider text-blue-600 hover:text-blue-500 duration-200 transition-all hover:scale-105 active:scale-90 " onClick={()=>setIsModalOpen(true)}/>
      </button>
      </div>
}

<>
  {data?.news ? data?.news?.length > 0 ? (
    <Slider {...settings} className="">
      {data?.news?.map((item) => {
        return (
        <NewsCard key={item?._id} handleDelete={handleDelete} item={item} isAdmin={isAdmin}/>
        );
      })}
    </Slider>
  ) : (
    <h2 className="text-center font-semibold tracking-wider text-[25px] text-gray-500 animate-bounce">No data yet &#58; &#40; </h2>
  )
:
  <>
  <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
  <LinearProgress color="secondary" />
 
</Stack>
  </>


}
</>


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
       Add News
    </h2>



    <form
      className="md:grid grid-cols-2 gap-6 space-y-5 md:space-y-0 px-6" onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <label className="text-black font-sans tracking-wide font-semibold" htmlFor="title">
          Title
        </label>
        <input
          className="rounded-md outline-none border-slate-400 font-serif tracking-wide uppercase text-fuchsia-950 md:text-base"
          type="text"
          name="title"
          id='title'
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="Ex : Innovation Expo"
          
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
        <label className="text-black font-sans tracking-wide font-semibold" htmlFor="time">
          Time
        </label>
        <input
          className="rounded-md outline-none border-slate-400 font-sans tracking-wide uppercase text-fuchsia-950"
          type="text"
          name="time"
          id='time'
          onChange={(e)=>setTime(e.target.value)}
          placeholder="Ex : 10:00 AM"


          
        />
      </div>
      
      <div className="flex flex-col gap-2">
  <label className="text-black font-sans tracking-wide font-semibold" htmlFor="image">
    Image
  </label>
  <input
    className="rounded-md outline-none border-slate-400 font-sans tracking-wide uppercase text-fuchsia-950"
    type="file"
    accept="image/*"
    name="image"
    id="image"
    onChange={(e) => handleImageUpload(e)}
  />
</div>

      <div className="col-span-2 text-center">
        <button
        disabled={postLoading}
          type="submit"
          className="bg-ctcPrimary text-white px-4 py-2 rounded-full font-semibold tracking-wide transition-all ease-in-out duration-800"
        >
         {postLoading ? "Submitting...":"Submit"}
        </button>
      </div>
    </form>
  </Modal>
    </div>
  );
};

export default News;
