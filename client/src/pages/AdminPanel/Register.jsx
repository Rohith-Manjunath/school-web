import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdEmail, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import image from '../../assets/Images/AdminPaneImages/TVSchool.jpg';
import { useRegisterMutation } from '../../../Redux/authApi';
import { useAlert } from 'react-alert';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showReenterPassword, setShowReenterPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [register,{isLoading,isError,error,isSuccess}] =useRegisterMutation();
  const navigate=useNavigate()
  const alert=useAlert()
  const [userImage,setUserImage]=useState("")




  const handleSubmit=async(e)=>{
    e.preventDefault();

    try{

await register({email,password,name,confirmPassword,image:userImage}).unwrap()
alert.success("Registered successfully")
navigate("/login")

    }
    catch(e){
      alert.error(e?.data?.err)
      return;
    }

  }


  const toggleShowReenterPassword = () => {
    setShowReenterPassword(prevState => !prevState);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      if (reader.readyState === 2) {
        const imageUrl = reader.result;
        setUserImage(imageUrl);
      }
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-cover" style={{ backgroundImage: `url(${image})` }}>
        <div className="mt-24 md:mt-10 md:w-[90%] lg:w-[70%] xl:w-[60%] w-full bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-8 border">
          <form className="flex flex-col items-center space-y-6" onSubmit={handleSubmit}>
            <h1 className="text-3xl text-white">Register</h1>
            <div className="space-y-3 sm:space-y-0 sm:flex items-center justify-center gap-3 w-full">
            <div className="input-box relative w-full h-16">
              <input
                type="text"
                placeholder="Email"
                className="w-full h-full bg-transparent border-2 border-white rounded-full text-white pl-8 text-base placeholder:text-white  focus:border-none"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <MdEmail className="absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-white" />
            </div>
            <div className="input-box relative w-full h-16">
              <input
                type="text"
                placeholder="Username"
                className="w-full h-full bg-transparent border-2 border-white rounded-full text-white pl-8 text-base placeholder:text-white  focus:border-none"
                name='name'
                onChange={(e) => setName(e.target.value)}
              />
              <FaUser className="bx bxs-user absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-white"></FaUser>
            </div>
            </div>
      <div className="space-y-3 sm:space-y-0 sm:flex items-center justify-center gap-3 w-full">
      <div className="input-box relative w-full h-16">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className={`w-full h-full bg-transparent border-2 border-white rounded-full text-white pl-8 text-base placeholder:text-white  focus:border-none`}
                name='password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <RiLockPasswordFill
                className={`bx bxs-lock-alt absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-white`}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                {showPassword ? <MdVisibilityOff onClick={() => setShowPassword(!showPassword)} className="text-white" /> : <MdVisibility onClick={() => setShowPassword(!showPassword)} className="text-white" />}
              </span>
            </div>
            <div className="input-box relative w-full h-16">
              <input
                type={showReenterPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                className={`w-full h-full bg-transparent border-2 border-white rounded-full text-white pl-8 text-base placeholder:text-white  focus:border-none`}
                name='confirmPassword'
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <RiLockPasswordFill
                className={`bx bxs-lock-alt absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-white`}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={toggleShowReenterPassword}>
                {showReenterPassword ? <MdVisibilityOff className="text-white" /> : <MdVisibility className="text-white" />}
              </span>
            </div>
      </div>
   <div className="space-y-3 sm:space-y-0 sm:flex items-center justify-center gap-3 w-full">

   <div className="flex flex-col gap-2">
          <label className="text-white font-sans tracking-wide font-semibold" htmlFor="image">
            Choose Profile Picture
          </label>
          <input
            className="rounded-md outline-none border-slate-400 font-sans tracking-wide uppercase text-white"
            type="file"
            accept="image/*"
            name="image"
            id="image"
            onChange={handleImageUpload}
          />
        </div>

            <button
              type="submit"
              className="btn w-full h-12 bg-white text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-secondary hover:text-white"
            >
            {isLoading ? "Registering...":"Register"}
            </button>
    
   </div>
            <div className="flex justify-between w-[100%] text-base text-center">
              <p className="text-white">Already have an account? </p>
              <Link to="/login" className="text-white hover:underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
