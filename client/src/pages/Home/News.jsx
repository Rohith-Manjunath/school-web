import Slider from "react-slick";
import { useDeleteNewsMutation, useGetAllNewsQuery, usePostNewsMutation } from "../../../Redux/adminAuth";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Modal from "react-modal";
import { useNewsUsersQuery } from "../../../Redux/authApi";
import {LinearProgress, Slide, Stack } from "@mui/material";
import AddNewsModal from "../../components/NewsComponents/NewsModals/AddNewsModal";
import DeleteNewsModal from "../../components/NewsComponents/NewsModals/DeleteNewsModal";
import NewsAddAndRefresh from "../../components/NewsComponents/NewsLayouts/NewsAddAndRefresh";
import NewsCard from "../../components/NewsComponents/NewsCards/NewsCard";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const News = () => {

  const { isLoading: queryLoading, data: queryData ,refetch}=useGetAllNewsQuery()
  const [data, setData] = useState(null);
  const isAdmin = useSelector(state => state.user.user?.isAdmin ?? false);
    const [deleteNewsMutation,{isLoading:deleteLoading}] = useDeleteNewsMutation();
  const alert = useAlert();
  const [isModalOpen,setIsModalOpen]=useState(false)
  const [date,setDate]=useState("")
  const [time,setTime]=useState("");
  const [title,setTitle]=useState("")
  const [image,setImage]=useState("")
  const [postNews,{isLoading:postLoading}]=usePostNewsMutation()
  const { data: usersNews } = useNewsUsersQuery()
  const [open, setOpen] = React.useState(false);
  const [id,setId]=useState(null)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  
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
        const data = await deleteNewsMutation(id).unwrap();
        alert.success(data?.message);
        handleClose()
        return;
      
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
  <>
    <div className="w-[80%] lg:w-[90%] py-20 mx-auto ">
     { isAdmin && 
     
     <NewsAddAndRefresh fetchData={fetchData} setIsModalOpen={setIsModalOpen}/>
}

<>
  {data?.news ? data?.news?.length > 0 ? (
    <Slider {...settings} className="">
      {data?.news?.map((item) => {
        return (
        <NewsCard key={item?._id} handleDelete={()=>{handleClickOpen() ; setId(item?._id)}} item={item} isAdmin={isAdmin}/>
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




    </div>

{/* Add News Modal */}

<AddNewsModal isModalOpen={isModalOpen} Modal={Modal} setIsModalOpen={setIsModalOpen} handleSubmit={handleSubmit} setTitle={setTitle} setTime={setTime} handleImageUpload={handleImageUpload} setDate={setDate} postLoading={postLoading}/>

<DeleteNewsModal Transition={Transition} handleClose={handleClose} deleteLoading={deleteLoading} handleDelete={handleDelete} id={id} open={open}/>

  </>
  );
};

export default News;
