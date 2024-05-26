import React from 'react'
import { IoMdClose } from 'react-icons/io'
import Modal from 'react-modal'


const GalleryEditModal = ({isEditModalOpen,setIsEditModalOpen,setPreview,singleGallery,handleEditSubmit,galleryToUpdate,setGalleryToUpdate,handleImageUpload,preview,updateLoading}) => {
  return (
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
        <IoMdClose/>
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
  )
}

export default GalleryEditModal