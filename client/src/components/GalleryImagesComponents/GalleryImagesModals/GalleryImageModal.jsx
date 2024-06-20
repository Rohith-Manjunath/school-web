import React from 'react'

const GalleryImageModal = ({Modal,Box,style,handleCloseModal,IoMdClose,image,isModalOpen}) => {
  return (
      <Modal
      keepMounted
      open={isModalOpen}
      onClose={handleCloseModal}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      
      <Box sx={style}>
      <button
      className="absolute top-3 right-3 cursor-pointer font-semibold text-2xl text-white bg-secondary rounded-md transition-all duration-300 active:scale-90"
      onClick={handleCloseModal}
    >
      <IoMdClose />
    </button>
        <img src={image} className='w-[100%] rounded-lg' alt="" />
      </Box>
    </Modal>
  )
}

export default GalleryImageModal