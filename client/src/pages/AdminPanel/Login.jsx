import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/Images/AdminPaneImages/TVSchool.jpg";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover" style={{ backgroundImage: `url(${image})` }}>
      <div className="w-96 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-white">
        <form className="flex flex-col items-center space-y-6">
          <h1 className="text-3xl text-white">Login</h1>
          <div className="input-box relative w-full h-16 ">
            <input
              type="text"
              placeholder="Username"
              className="w-full h-full bg-transparent border-white  border-2 border-white rounded-full text-white pl-8 text-base"
              required
            />
            <i className='bx bxs-user absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-white'></i>
          </div>
          <div className="input-box relative w-full h-16">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-full bg-transparent border border-white  border-2 border-white rounded-full text-white pl-8 text-base"
              required
            />
            <i className='bx bxs-lock-alt absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-white'></i>
          </div>
          <div className="flex justify-between text-base w-[100%]">
            <label className="flex  text-white text-sm">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-white hover:underline text-sm">
                Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="btn w-full h-12 bg-white text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-secondary hover:text-white">
            Login
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
  );
};

export default Login;
