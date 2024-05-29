import { IoMdClose } from "react-icons/io"

const ProfilePicUpdateModal = ({Modal,isProfilePicModalOpen,handleImageUpdateSubmit,preview,handleProfilePicUpdateModalClose,profilePicLoading,removePreview,handleImageUpload}) => {
  return (
      <Modal
      isOpen={isProfilePicModalOpen}
      style={{
        overlay: {
          zIndex: 98,
          backgroundColor: `rgba(0, 0, 0, 0.5)`,
        },
        content: {
          width: '90%', // Adjust the width for small screens
          maxWidth: '600px',
          height: '60vh', // Set height to auto for responsiveness
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
      <form onSubmit={handleImageUpdateSubmit} className="flex items-center justify-center flex-col gap-4 p-8 w-full">
        <button
          className="absolute top-5 right-5 cursor-pointer font-semibold text-3xl"
          onClick={handleProfilePicUpdateModalClose}
        >
          <IoMdClose />
        </button>

        <h2 className="font-semibold tracking-wide text-textSecondary text-2xl my-4">
          Update Profile Pic
        </h2>
        
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
      

<div className='flex items-center justify-center gap-3 col-span-full relative'>
  <span className='font-semibold tracking-wide : '>Preview : </span>
  {
    preview && 
      <>
      <img src={preview} alt="" className='w-12 h-12 border border-gray-400 rounded-md' />
      <IoMdClose onClick={removePreview} className="absolute right-[-1px] top-[-1px] text-white bg-black  rounded-full hover:scale-105 transition-all duration-200 hover:cursor-pointer"/>
      </>
    
  }
</div>

        <button
          disabled={profilePicLoading}
          type="submit"
          className={` ${ profilePicLoading ? 'bg-ctcSecondary' : 'bg-ctcPrimary'} ${profilePicLoading ?'text-textSecondary' :'text-textPrimary' } py-2 rounded-sm font-semibold tracking-wider hover:bg-ctcSecondary hover:text-ctcPrimary hover:border hover:scale-95 transition-all duration-400 w-full my-8`}
        >
          {profilePicLoading ? "Updating..." : "Update"}
        </button>
      </form>
    </Modal>
  )
}

export default ProfilePicUpdateModal