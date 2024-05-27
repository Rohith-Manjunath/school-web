import { IoMdClose } from "react-icons/io"

const ProfilePasswordUpdateModal = ({Modal,isModalOpen,setConfirmPassword,setNewPassword,setOldPassword,newPassword,confirmPassword,updateLoading,oldPassword,handleClose,handleSubmit}) => {
  return (
      <Modal
        isOpen={isModalOpen}
        style={{
          overlay: {
            zIndex: 98,
            backgroundColor: `rgba(0, 0, 0, 0.5)`,
          },
          content: {
            width: '90%', // Adjust the width for small screens
            maxWidth: '600px',
            height: '58vh', // Set height to auto for responsiveness
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
        <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col gap-4 p-8 w-full">
          <button
            className="absolute top-5 right-5 cursor-pointer font-semibold text-3xl"
            onClick={handleClose}
          >
            <IoMdClose />
          </button>

          <h2 className="font-semibold tracking-wide text-textSecondary text-2xl my-4">
            Update Password
          </h2>
          <input
            onChange={(e) => setOldPassword(e.target.value)}
            type="password"
            className="outline-none border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
            placeholder="Old Password"
            value={oldPassword}
          />
          <input
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            className="outline-none border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
            placeholder="New Password"
            value={newPassword}
          />
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="outline-none border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-full"
            placeholder="Confirm Password"
            value={confirmPassword}
          />
          <button
            disabled={updateLoading}
            type="submit"
            className={` ${ updateLoading ? 'bg-ctcSecondary' : 'bg-ctcPrimary'} ${updateLoading ?'text-textSecondary' :'text-textPrimary' } py-2 rounded-sm font-semibold tracking-wider hover:bg-ctcSecondary hover:text-ctcPrimary hover:border hover:scale-95 transition-all duration-400 w-full`}
          >
            {updateLoading ? "Updating..." : "Update"}
          </button>
        </form>
      </Modal>
  )
}

export default ProfilePasswordUpdateModal