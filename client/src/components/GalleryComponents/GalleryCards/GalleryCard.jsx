import { CircularProgress, Stack } from '@mui/material';
import { FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt'

const GalleryCard = ({image,openModal,isAdmin,handleClickOpen,setId,handleEditEvent,singleGalleryLoading}) => {
  
  const navigate=useNavigate()
  
  return (
    <Tilt
    glareEnable={true}
    glareMaxOpacity={0.8}
    scale={1.05}
    perspective={1000}
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}a
    transitionSpeed={400}
  >

<div
    key={image._id}
    className="relative flex items-center justify-center overflow-hidden rounded-lg shadow-lg cursor-pointer group"
    onClick={
      () =>{ openModal(image?._id);
       
          navigate(`/galleryImages/${image?._id}`)

   
}


    }
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
        {image?.title}
      </h3>
    </div>
  </div>

      </Tilt>
  )
}

export default GalleryCard