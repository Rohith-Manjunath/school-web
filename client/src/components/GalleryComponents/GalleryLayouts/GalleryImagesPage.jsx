import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { useParams } from "react-router-dom";
import { useSingleGalleryQuery } from "../../../../Redux/authApi";
import { LinearProgress, Stack } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import GalleryImagesCard from '../../GalleryImagesComponents/GalleryImagesCard/GalleryImagesCard';
import GalleryImageModal from '../../GalleryImagesComponents/GalleryImagesModals/GalleryImageModal';


const GalleryImagesPage = () => {
  const searchParam = useParams();
  const id = searchParam?.id;
  const { data, isLoading } = useSingleGalleryQuery(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState("");

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setImage("");
  };

  const handleOpenModal = (img) => {
    setImage(img.url); // Correctly set the image URL
    setIsModalOpen(true); // Open the modal
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%', // Adjust width for small screens
    maxWidth: '900px', // Maximum width for larger screens
    maxHeight: '90vh', // Ensure it fits within the viewport height
    backgroundColor: '#fff', // Corrected property name
    boxShadow: '24px 24px 48px rgba(0,0,0,0.2)', // Updated for clarity
    padding: '5px',
    borderRadius: '10px',
    outline: 'none',
    overflowY: 'auto' // Enable vertical scrolling if content overflows
  };
  
  return (
    <>
      <div className="mt-12 p-10 bg-secondary">
        <div className="md:grid space-y-5 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <h2 className="uppercase col-span-full text-center font-semibold tracking-wide text-white text-2xl font-custom sm:text-3xl my-4">
            {data?.content?.title}
          </h2>
          {!isLoading ? (
            data?.content?.avatar?.map(img => (
             <GalleryImagesCard key={img?._id} Tilt={Tilt} handleOpenModal={handleOpenModal} img={img}/>
            ))
          ) : (
            <Stack className="col-span-full" sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
              <LinearProgress color="secondary" />
            </Stack>
          )}
        </div>
      </div>

      <div>
   
   <GalleryImageModal Modal={Modal} Box={Box} style={style} handleCloseModal={handleCloseModal} IoMdClose={IoMdClose} image={image} isModalOpen={isModalOpen}/>

    </div>

    </>
  );
};

export default GalleryImagesPage;
