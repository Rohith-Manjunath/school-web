import  { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdEmail, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import image from '../../assets/Images/AdminPaneImages/TVSchool.jpg';
import { useRegisterMutation } from '../../../Redux/UserAuth';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser as setUserAction } from '../../../Redux/UserSlice'; // Rename setUser to setUserAction


const Register = () => {
  // const [passwordStrengthError, setPasswordStrengthError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showReenterPassword, setShowReenterPassword] = useState(false);
  const [form,setForm]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""

  })
  const [register,{isLoading,isError,error}]=useRegisterMutation()
  const navigate=useNavigate()
  const dispatch=useDispatch()

  
  useEffect(()=>{
    if(isError){
      toast.error(error.data.err)
    }
  },[error,isError])


  const handleInputChange=(e)=>{
    const {name,value}=e.target
setForm({...form,[name]:value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the registerUser mutation with form data
      const data = await register(form).unwrap();
      dispatch(setUserAction(data.newUser));

      // Registration successful, navigate to login page
      toast.success("Registration successful");
      navigate("/login");
    } catch (error) {
      // Display error alert if registration fails
      toast.error(error.message);
    }
  };

  return (
  <>
      <ToastContainer/>
    <div className="flex items-center justify-center h-screen bg-cover" style={{ backgroundImage: `url(${image})` }}>
      <div className="w-96 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-8 border   ">
        <form className="flex flex-col items-center space-y-6" onSubmit={handleSubmit}>
          <h1 className="text-3xl text-white ">Register</h1>
          <div className="input-box relative w-full h-16">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-full bg-transparent    border-2 border-white rounded-full text-white pl-8 text-base placeholder:text-white  focus:border-none  "
              onChange={handleInputChange}
              name='email'
            />
            <MdEmail className="absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-white" />
          </div>
          <div className="input-box relative w-full h-16">
            <input
              type="text"
              placeholder="Username"
              className="w-full h-full bg-transparent     border-2 border-white rounded-full text-white pl-8 text-base placeholder:text-white  focus:border-none  "
              onChange={handleInputChange}
              name='name'

            />
            <FaUser className="bx bxs-user absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-white"></FaUser>
          </div>
          <div className="input-box relative w-full h-16">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className={`w-full h-full bg-transparent  '  '
              border-2 border-white    rounded-full text-white pl-8 text-base placeholder:text-white  focus:border-none  `}
              onChange={handleInputChange}
              name='password'


/>
            <RiLockPasswordFill
              className={`bx bxs-lock-alt absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-white placeholder:text-white  focus:border-none  
              }`}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
              {showPassword ? <MdVisibilityOff onClick={()=>setShowPassword(!showPassword)}  className="text-white" /> : <MdVisibility onClick={()=>setShowPassword(!showPassword)} className="text-white" />}
            </span>
          </div>
          <div className="input-box relative w-full h-16">
            <input
              type={showReenterPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              className={`w-full h-full bg-transparent border-2 border-white   rounded-full text-white pl-8 text-base placeholder:text-white  focus:border-none  `}
              onChange={handleInputChange}
              name='confirmPassword'

            />
            <RiLockPasswordFill
              className={`bx bxs-lock-alt absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-white
              }`}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" >
              {showReenterPassword ? <MdVisibilityOff onClick={()=>setShowReenterPassword(!showReenterPassword)} className="text-white" /> : <MdVisibility onClick={()=>setShowReenterPassword(!showReenterPassword)} className="text-white" />}
            </span>
          </div>
        
         
          <button
            type="submit"
            className="btn w-full h-12 bg-white text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-secondary hover:text-white"
          >
            {isLoading?"Registering...":"Register"}
          </button>
          <div className="flex justify-between w-[100%] text-base text-center">
            <p className="text-white">Already have an account? </p>
            <Link to="/login"className="text-white hover:underline">
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
