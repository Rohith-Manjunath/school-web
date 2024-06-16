import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LuRefreshCcw } from "react-icons/lu";
import { IoAddOutline } from "react-icons/io5";
import { useAlert } from 'react-alert';
import { useDeleteAwardMutation, useGetAllAwardsQuery, useGetSingleAwardQuery, usePostAwardMutation, useUpdateAwardMutation } from '../../../Redux/adminAuth';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import Modal from 'react-modal'
import { IoMdClose } from "react-icons/io";
import { LinearProgress, Slide, Stack } from '@mui/material';
import MetaData from '../../components/MetaData';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DeleteIcon from '@mui/icons-material/Delete';
import Tilt from 'react-parallax-tilt'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Awards = () => {
  const isAdmin = useSelector(state => state.user.user?.isAdmin ?? false);
  const alert=useAlert()
  const {data,isLoading,refetch}= useGetAllAwardsQuery()
  const [deleteAward,{isLoading:deleteLoading}]=useDeleteAwardMutation()
  const [image,setImage]=useState("")
  const navigate=useNavigate()
  const [id,setId]=useState(null)
  const [isEditModalOpen,setIsEditModalOpen]=useState(false)
  const [updateAward,{isLoading:updateLoading}]=useUpdateAwardMutation();
  const {data:awardData,refetch:awardRefetch}=useGetSingleAwardQuery(id)
  const [award,setAward]=useState({
    image:""
  })
  const [isModalOpen,setIsModalOpen]=useState(false)
  const [postAward,{isLoading:postLoading}]=usePostAwardMutation()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  useEffect(() => {
    setAward(awardData?.award);
  }, [awardData]);

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

  
  

  

  const fetchData=()=>{

  refetch()

  }

  const handleEditAward=(id)=>{

    setId(id)
    setIsEditModalOpen(true)
    
    
      }

  const handleDelete = async (id) => {
    try {
        const data = await deleteAward(id).unwrap();
        alert.success(data?.message);
        return;
      
    } catch (e) {
      alert.error(e?.data?.err);
      if(e?.data?.err?.toUpperCase() === "JWT EXPIRED"){
        navigate("/login")
      }
      return;
    }
  }

  
  const handleEditSubmit=async(e)=>{

    e.preventDefault()
    
        try{
    
       const data=await updateAward({ id, data: { image } }).unwrap();
       alert.success(data?.message)
       setIsEditModalOpen(false)
       await awardRefetch()
       setAward({})
    
        }catch(e){
          alert.error(e?.data?.err)
        }
    
      }

      const handleSubmit=async(e)=>{
        e.preventDefault()
    
    
        try{
    
          const data=await postAward({image}).unwrap()
          alert.success(data?.message)
          setIsModalOpen(false)
    
        }catch(e){
          alert.error(e?.data?.err)
          return;
        }
    
      }
    

  return (
<>
<MetaData title={"Awards"}/>
<div className="bg-secondary py-12 md:px-12 mt-10">


{
        isAdmin && <div className="flex items-center justify-end gap-4 ">
        <button >
          <LuRefreshCcw onClick={fetchData} className="w-full font-semibold my-4 text-[25px] tracking-wider text-white duration-200 transition-all hover:scale-105 active:scale-90  animate-spin " />
        </button>
        <button>
         <IoAddOutline onClick={()=>setIsModalOpen(true)} className="w-full font-semibold my-4 text-[30px] tracking-wider text-white duration-200 transition-all hover:scale-105 active:scale-90 "/>
        </button>
      </div>
      }

      <div className=" mx-auto px-8 ">
        <h2 className="text-4xl font-bold text-white font-title mb-4">Awards & Achievements</h2>
        <p className="text-white mb-8">Explore stunning collection of images of our Awards and Achievements</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.awards ? data?.awards?.length>0 ? data?.awards?.map((data, index) => (
          <Tilt 
          
          glareEnable={true}
    glareMaxOpacity={0.8}
    scale={1.05}
    perspective={1000}
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    transitionSpeed={400}
          key={index}
>

<div
              className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer`}
            >
              <img
                src={data?.avatar?.url}
                alt={`Image ${index + 1}`}
                className="w-full h-full"
              />

                {isAdmin && (
                    <>
                      <MdDelete
                        onClick={() => {handleClickOpen();
                          setId(data?._id)}}
                        className="text-red-600 absolute top-0 text-xl right-0 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-red-500"
                      />
                      <FaPen
                      onClick={()=>handleEditAward(data?._id)}
                        className="text-blue-600 absolute top-0 text-md right-8 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-blue-500"
                        
                      />
                    </>
                  )}  
              
            </div>

          </Tilt>
          )) : (
            <h2 className="text-center font-semibold tracking-wider text-[25px] text-white animate-bounce">No data yet &#58; &#40; </h2>
          )
        :<>
  <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
  <LinearProgress color="secondary" />
 
</Stack>
  </>
        }
        </div>
      </div>
    </div>

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
       Edit Gallery Content
    </h2>



    <form
      className="md:grid grid-cols-2 gap-6 space-y-5 md:space-y-0 px-6" onSubmit={handleEditSubmit}
    >
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
  onChange={(e) => {
    handleImageUpload(e);
  }}
/>

</div>

<div className='flex items-center justify-center gap-2'>
  <span>Preview :</span>
  <img src={image ? image : award?.avatar?.url } alt="" className='w-10 h-10 rounded-md' />

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
     Add Gallery Content
  </h2>



  <form
    className="md:grid grid-cols-2 gap-6 space-y-5 md:space-y-0 px-6" onSubmit={handleSubmit}
  >
    
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


<>

<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText style={{
            color: "red",
          }} id="alert-dialog-slide-description">
            Are you sure you want to delete this content ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={deleteLoading} onClick={()=>handleDelete(id)} style={{
            backgroundColor:"red",
            color:"white"
          }} startIcon={<DeleteIcon />}>
        {deleteLoading ? "Deleting...":"Delete"}
      </Button>        </DialogActions>
      </Dialog>
</>

</>

  );
};



export default Awards;