import { useDispatch, useSelector } from "react-redux";
import { FaCamera, FaEdit } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useAlert } from "react-alert";
import { useUdpatePasswordMutation, useUdpateProfilePicMutation } from "../../../Redux/authApi";
import Modal from 'react-modal';
import { useState } from "react";
import ProfilePasswordUpdateModal from "../../components/ProfileComponents/ProfileModals/ProfilePasswordUpdateModal";
import { IoMdClose } from "react-icons/io";
import { setUser } from "../../../Redux/UserSlice";
import ProfilePicUpdateModal from "../../components/ProfileComponents/ProfileModals/ProfilePicUpdateModal";


const Profile = () => {
  const user = useSelector((state) => state?.user?.user);
  const [update, { isLoading: updateLoading }] = useUdpatePasswordMutation();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const alert = useAlert();
  const [updateProfilePic,{isLoading:profilePicLoading}]=useUdpateProfilePicMutation()
  const [isProfilePicModalOpen,setIsProfilePicModalOpen]=useState(false)
  const [userImage,setUserImage]=useState(null)
  const dispatch=useDispatch()
  const [preview,setPreview]=useState(null)

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent the default form submission
      try {
      const data = await update({
        confirmPassword,
        oldPassword,
        newPassword,
        id: user?._id
      }).unwrap();
      alert.success(data?.message);
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      handleClose();
    } catch (e) {
      alert.error(e?.data?.err);
    }
  };

  const handleProfilePicUpdateModalClose=()=>{

    setIsProfilePicModalOpen(false)
    setPreview("")
    setUserImage(null)

  }
  const handleProfilePicUpdateModalOpen=()=>{

    setIsProfilePicModalOpen(true)
  }


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      if (reader.readyState === 2) {
        const imageUrl = reader.result;
        setUserImage(imageUrl);
        setPreview(imageUrl)
      }
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpdateSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
    const data = await updateProfilePic({
     image:userImage,
     id:user?._id
    }).unwrap();
    alert.success(data?.message);
   setUserImage(null)
    handleProfilePicUpdateModalClose()
    setPreview("")
    dispatch(setUser(data?.user))

  } catch (e) {
    alert.error(e?.data?.err);
  }
};

const removePreview=()=>{
  setPreview("")
}

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center">
        <div className="w-[80%] h-[80%] bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="flex items-center justify-center p-4 relative">
              <img
                src={user?.avatar?.url}
                alt=""
                className="w-1/2 h-1/2 border-none rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-4">
              <h2 className="font-semibold text-textSecondary tracking-wide text-3xl mb-4">
                Name: {user?.name}
              </h2>
              <span className="mb-2 text-gray-500 font-semibold text-[12px] tracking-wide">
                User id : {user?._id}
              </span>
              <p className="text-textSecondary tracking-wide text-xl mb-4">
                Email: {user?.email}
              </p>
              <p className={`tracking-wide text-xl mb-4 text-textSecondary`}>
                Role : <span className={`${user?.isAdmin ? 'text-green-500' : 'text-red-500'} font-semibold tracking-wider`}>{user?.isAdmin ? "Admin" : "User"}</span>
              </p>
              <p className="text-textSecondary tracking-wide text-xl mb-4">
                Joined: {new Date(user?.createdAt).toLocaleDateString()}
              </p>
              <div className="flex items-center justify-start gap-2 mt-4">
                <button className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                  <FaEdit />
                  <span>Update Profile</span>
                </button>
                <button onClick={handleProfilePicUpdateModalOpen} className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                  <FaCamera />
                  <span>Update Profile Pic</span>
                </button>
                <button
                  onClick={handleOpen}
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
                >
                  <RiLockPasswordLine />
                  <span>Update Password</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Password Update Modal */}

    <ProfilePasswordUpdateModal Modal={Modal} isModalOpen={isModalOpen} setConfirmPassword={setConfirmPassword} setNewPassword={setNewPassword} setOldPassword={setOldPassword} newPassword={newPassword} confirmPassword={confirmPassword} updateLoading={updateLoading} oldPassword={oldPassword} handleClose={handleClose} handleSubmit={handleSubmit}/>


{/* Profile Pic Update Modal */}

<ProfilePicUpdateModal Modal={Modal} isProfilePicModalOpen={isProfilePicModalOpen} handleImageUpdateSubmit={handleImageUpdateSubmit} preview={preview} handleProfilePicUpdateModalClose={handleProfilePicUpdateModalClose} profilePicLoading={profilePicLoading} removePreview={removePreview} handleImageUpload={handleImageUpload}/>

    </>
  );
};

export default Profile;
