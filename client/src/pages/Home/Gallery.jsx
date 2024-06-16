import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDeleteGalleryMutation, useGetAllGalleryQuery, useGetSingleGalleryQuery, usePostGalleryMutation, useUpdateGalleryMutation } from '../../../Redux/adminAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { LinearProgress, Stack } from '@mui/material';
import GalleryDeleteModal from '../../components/GalleryComponents/GalleryModals/GalleryDeleteModal';
import GalleryEditModal from '../../components/GalleryComponents/GalleryModals/GalleryEditModal';
import GalleryAddContentModal from '../../components/GalleryComponents/GalleryModals/GalleryAddContentModal';
import GalleryCard from '../../components/GalleryComponents/GalleryCards/GalleryCard';
import GalleryRefreshAndAdd from '../../components/GalleryComponents/GalleryLayouts/GalleryRefreshAndAdd';
import { setGalleryImages } from '../../../Redux/GallerySlice';


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
  const isAdmin=useSelector(state=>state?.user?.user?.isAdmin ?? false)
  const [isModalOpen,setIsModalOpen]=useState(false)
  const [title,setTitle]=useState("")
  const [postGallery,{isLoading:postLoading}]= usePostGalleryMutation()
  const [images,setImages]=useState(null)
  const [deleteGallery,{isLoading:deleteLoading}]= useDeleteGalleryMutation()
  const [updateGallery,{isLoading:updateLoading}]=useUpdateGalleryMutation()
  const [isEditModalOpen,setIsEditModalOpen]=useState(false)
  const alert=useAlert()
  const [preview,setPreview]=useState([])
  const dispatch=useDispatch()

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



  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    clearInterval(autoScroll);
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



      const SetGalleryImages=()=>{
        dispatch(setGalleryImages(singleContent))
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
       

<GalleryRefreshAndAdd isAdmin={isAdmin} fetchData={fetchData} setIsModalOpen={setIsModalOpen}/>

        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-lg text-white tracking-wider font-medium font-description mb-8"
        >
          Explore our collection of beautiful images. Click on any image to view more images.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
       {(galleryLoading || gallery) ? gallery?.length > 0  ? gallery?.map((image, i) => (

<GalleryCard key={image?._id} image={image} openModal={openModal} isAdmin={isAdmin} handleClickOpen={handleClickOpen} setId={setId} handleEditEvent={handleEditEvent} singleGalleryLoading={singleGalleryLoading}/>

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

      {showModal && 
      
     SetGalleryImages()
      
      }
    </div>

 {/* Add gallery modal */}

<GalleryAddContentModal isModalOpen ={isModalOpen} setIsModalOpen={setIsModalOpen} setPreview={setPreview} setTitle ={setTitle} handleSubmit={handleSubmit} handleImageUpload={handleImageUpload} postLoading={postLoading} preview={preview}/>


{/* Edit Modal */}

<GalleryEditModal setGalleryToUpdate={setGalleryToUpdate} setIsEditModalOpen={setIsEditModalOpen} isEditModalOpen={isEditModalOpen} setPreview={setPreview} singleGallery={singleGallery} handleEditSubmit={handleEditSubmit} galleryToUpdate={galleryToUpdate} handleImageUpload={handleImageUpload} updateLoading={updateLoading} preview={preview}/>

{/* Delete Modal */}

<GalleryDeleteModal handleClose={handleClose} id={id} handleDelete={handleDelete} deleteLoading={deleteLoading} open={open}/>


    </>

  );
};

export default Gallery;