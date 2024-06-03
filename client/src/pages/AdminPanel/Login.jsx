import { Link, useNavigate } from 'react-router-dom';
import image from "../../assets/Images/AdminPaneImages/TVSchool.jpg";
import { useState } from 'react';
import { useLoginMutation } from '../../../Redux/authApi';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { setUser } from '../../../Redux/UserSlice';



const Login = () => {

  const [login,{isLoading}] =useLoginMutation();
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const alert=useAlert()

  const handleSubmit=async(e)=>{
    e.preventDefault();

    try{

const data=await login({email,password}).unwrap()
dispatch(setUser(data?.user))
alert.success(data?.message)
navigate("/")

    }
    catch(e){
      alert.error(e?.data?.err)
      return;
    }

  }
  
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-cover" style={{ backgroundImage: `url(${image})` }}>
      <div className="w-96 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-white">
        <form className="flex flex-col items-center space-y-6" onSubmit={handleSubmit}>
          <h1 className="text-3xl text-white">Login</h1>
          <div className="input-box relative w-full h-16 ">
            <input
              onChange={(e)=>setEmail(e.target.value)}
              type="text"
              placeholder="email"
              name='email'
              className="w-full h-full bg-transparent border-white  border-2 rounded-full text-white pl-8 text-base placeholder:text-white"
            />
            <i className='bx bxs-user absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-white'></i>
          </div>
          <div className="input-box relative w-full h-16">
            <input
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              name='password'
              className="w-full h-full bg-transparent  border-2 border-white rounded-full text-white pl-8 text-base placeholder:text-white"
            />
            <i className='bx bxs-lock-alt absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-white'></i>
          </div>
          <div className="flex justify-between text-base w-[100%]">
            <label className="flex  text-white text-sm">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link to={"/forgotPassword"} className="text-white hover:underline text-sm">
                Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="btn w-full h-12 bg-white text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-secondary hover:text-white">

                {isLoading ? "Logging in..." : "Login"}

          </button>
          <div className="flex justify-between w-[100%] text-base text-center">
            <p className="text-white">
              Don't have an account?{' '}
            </p>
            <Link to="/Register"className="text-white hover:underline">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
