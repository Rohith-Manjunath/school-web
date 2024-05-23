import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDeleteGalleryMutation, useGetAllGalleryQuery, useGetSingleGalleryQuery, usePostGalleryMutation, useUpdateGalleryMutation } from '../../../Redux/adminAuth';
import { LuRefreshCcw } from 'react-icons/lu';
import { IoAddOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import { useAlert } from 'react-alert';
import { CircularProgress, LinearProgress, Slide, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(null);
  const {data:galleryData,isLoading:galleryLoading,refetch}= useGetAllGalleryQuery()
  const [gallery,setGallery]=useState(null)
  const [id,setId]=useState(null)
  const [singleContent,setSingleContent]=useState(null)
  const {data:singleGallery,isLoading:singleGalleryLoading,refetch:singleGalleryRefetch} = useGetSingleGalleryQuery(id)
  const [galleryToUpdate,setGalleryToUpdate]=useState({
    title:"",
    images:"",
  })
  const isAdmin=useSelector(state=>state.user.user.isAdmin ?? false)
  const [isModalOpen,setIsModalOpen]=useState(false)
  const [title,setTitle]=useState("")
  const [postGallery,{isLoading:postLoading}]= usePostGalleryMutation()
  const [images,setImages]=useState(null)
  const [deleteGallery,{isLoading:deleteLoading}]= useDeleteGalleryMutation()
  const [updateGallery,{isLoading:updateLoading}]=useUpdateGalleryMutation()
  const [isEditModalOpen,setIsEditModalOpen]=useState(false)
  const alert=useAlert()
  const [preview,setPreview]=useState([])



  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    setGallery(galleryData?.content)
  },[galleryData])

  useEffect(()=>{

    setSingleContent(singleGallery?.content)

  },[singleGallery,id])

  useEffect(() => {
    setGalleryToUpdate(singleGallery?.content);
    setPreview(singleGallery?.content?.avatar)
  }, [singleGallery]);

  const openModal=(id)=>{

    setShowModal(true)
    setId(id)

  }

  const handleNext=()=>{


    if(currentIndex === singleContent?.avatar?.length-1){

      setCurrentIndex(0)
      return;

    }

    else{

      setCurrentIndex(currentIndex+1)
    }
    
    
  }

  const handlePrev=()=>{

if(currentIndex === 0 ){
  setCurrentIndex(singleContent?.avatar?.length - 1)

}else{
  setCurrentIndex(currentIndex-1)

}
   
      }


  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    clearInterval(autoScroll);
  };

  const handleOutsideClick = (event) => {
    if (event.target.closest('.modal-content') === null) {
      handleCloseModal();
      setCurrentIndex(0)


    }
  };

  
  const handleImageUpload = (e) => {
    setPreview([])
    const files = e.target.files;
    const imageUrls = [];
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
  
      reader.onload = () => {
        if (reader.readyState === 2) {
          const imageUrl = reader.result;
          setPreview((prevPreview) => [
            ...prevPreview,
            { url: imageUrl },
          ]);          imageUrls.push(imageUrl);
        }
      };
  
      reader.readAsDataURL(file);
    }
    setImages(imageUrls)
  };


  const handleSubmit=async(e)=>{
    e.preventDefault()


    try{

      const data=await postGallery({title,images}).unwrap()
      alert.success(data?.message)
      setIsModalOpen(false)
      setImages(null)
      setTitle(null)
      setPreview([])

    }catch(e){
      alert.error(e?.data?.err)
      return;
    }

  }

  const handleDelete = async (id) => {
    try {
        const data = await deleteGallery(id).unwrap();
        handleClose()
        alert.success(data?.message);
        setPreview([])
        return;
      
    } catch (e) {
      alert.error(e?.data?.err);
      return;
    }
  };


  const handleEditEvent=(id)=>{

    setId(id)
    setIsEditModalOpen(true)
    
      }
    
      const handleEditSubmit=async(e)=>{
    
    e.preventDefault()
    
        try{
  
       const data=await updateGallery({id,data:{...galleryToUpdate,images}}).unwrap();
       alert.success(data?.message)
       setIsEditModalOpen(false)
       await singleGalleryRefetch()
       setGalleryToUpdate(null)
       setImages(null)
       setPreview([])

    
        }catch(e){
          alert.error(e?.data?.err)
        }
    
      }



      const fetchData=async()=>{

        await refetch()
    
      }


  return (
    <>    
    <div className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold text-white tracking-wider font-title mb-2"
        >
          Gallery
        </motion.h2>
        {
        isAdmin && <div className="flex items-center justify-center gap-4 absolute top-0 right-0">
        <button onClick={fetchData}>
          <LuRefreshCcw                         title="Refetch Data"
 className="w-full font-semibold my-4 text-[25px] tracking-wider text-white  duration-200 transition-all hover:scale-105 active:scale-90  animate-spin " />
        </button>
        <button >
         <IoAddOutline                        title="Add Event"
 className="w-full font-semibold my-4 text-[30px] tracking-wider text-white duration-200 transition-all hover:scale-105 active:scale-90 " onClick={()=>setIsModalOpen(true)}/>
        </button>
      </div>
      }
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-lg text-white tracking-wider font-medium font-description mb-8"
        >
          Explore our collection of beautiful images. Click on any image to view more in the carousel.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
       {(galleryLoading || gallery) ? gallery.length > 0  ? gallery?.map((image, i) => (
  <div
    key={image._id}
    className="relative flex items-center justify-center overflow-hidden rounded-lg shadow-lg cursor-pointer group"
    onClick={() => openModal(image?._id)}
  >
    {isAdmin && (
      <>
        <MdDelete
          title="Delete News"
          onClick={(e) => {
            e.stopPropagation();
            handleClickOpen();
            setId(image?._id)
            
          }}
          className="text-red-600 absolute top-[1px] text-xl right-0 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-red-500 z-20"
        />
        <FaPen
          onClick={(e) => {
            e.stopPropagation();
            handleEditEvent(image?._id);
          }}
          title="Edit News"
          className="text-blue-600 absolute top-[3px] text-md right-8 m-2 hover:cursor-pointer hover:scale-110 transition-all duration-200 hover:text-blue-500 z-20"
        />
      </>
    )}

{!singleGalleryLoading ? 
    <img
      src={image?.avatar[0]?.url}
      alt={image?.title}
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 border-4 rounded-2xl border-b-primary "
    />
    :

    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
    <CircularProgress color="inherit" />
   
  </Stack>
  
  }
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
      <h3 className="text-white text-xl font-medium font-serif tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {image.title}
      </h3>
    </div>
  </div>
))

:

(
  <h2 className="col-span-full text-center font-semibold tracking-wider text-[25px] text-white animate-bounce">No data yet &#58; &#40; </h2>
)

:

<div className='col-span-full'>
  <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
  <LinearProgress color="secondary" />
 
</Stack>
  </div>

}
        </motion.div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOutsideClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="modal-content bg-white rounded-lg shadow-lg max-w-xl mx-auto relative p-4"
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors duration-300"
              onClick={handleCloseModal}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative">
              <img
                src={singleContent?.avatar[currentIndex]?.url}
                className="w-full h-auto rounded-lg"
              />
              <button
              onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
              onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center py-2">
                {/* {selectedImage.carousel.map((_, index) => (
                  <span
                    key={index}
                    className={`mx-1 h-3 w-3 rounded-full bg-white ${
                      index === currentIndex ? 'bg-fuchsia-950 h-4 w-4' : ''
                    }`}
                  ></span>
                ))} */}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>

 {/* Add gallery modal */}

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
      onClick={() => {setIsModalOpen(false) ; setPreview([]) ; setTitle(null)}}
    >
      <IoMdClose />
    </button>
    <h2 className=" mb-5 md:mt-0 mt-[12rem] text-center font-semibold capitalize text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] tracking-wide ">
       Add Gallery
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
  multiple
/>
</div>

<div className='flex items-center justify-center gap-3 col-span-full'>
  <span className='font-semibold tracking-wide : '>Preview : </span>
  {
    preview && preview.map((p) => (
      <img key={p.id} src={p.url} alt="" className='w-12 h-12 border border-gray-400 rounded-md' />
    ))
  }
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


{/* Edit Modal */}



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
      onClick={() => {setIsEditModalOpen(false) ,     setPreview(singleGallery?.content?.avatar) }     }
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
          name="title"
          id='title'
          placeholder="Ex : Something"
          value={galleryToUpdate?.title}
          onChange={(e)=>setGalleryToUpdate({...galleryToUpdate,title:e.target.value})}
          
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
  onChange={(e) => {handleImageUpload(e)}}
  multiple
/>
</div>
     
<div className='flex items-center justify-center gap-3 col-span-full'>
  <span className='font-semibold tracking-wide : '>Preview : </span>
  {
    preview && preview.map((p) => (
      <img key={p.id} src={p.url} alt="" className='w-12 h-12 border border-gray-400 rounded-md' />
    ))
  }
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

export default Gallery;