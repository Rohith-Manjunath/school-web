import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import image from '../../assets/Images/AdminPaneImages/TVSchool.jpg';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordStrengthError, setPasswordStrengthError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showReenterPassword, setShowReenterPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordMatchError) {
      setPasswordMatchError(false);
    }
    if (passwordStrengthError) {
      setPasswordStrengthError(false);
    }
  };

  const handleReenterPasswordChange = (e) => {
    setReenterPassword(e.target.value);
    if (passwordMatchError) {
      setPasswordMatchError(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowReenterPassword = () => {
    setShowReenterPassword(!showReenterPassword);
  };

  const isStrongPassword = (value) => {
    // Password strength requirements
    const capitalRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    return capitalRegex.test(value) && specialCharRegex.test(value) && value.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== reenterPassword) {
      setPasswordMatchError(true);
    } else if (!isStrongPassword(password)) {
      setPasswordStrengthError(true);
    } else {
      // Your registration logic goes here
      console.log('Registration Successful!');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover" style={{ backgroundImage: `url(${image})` }}>
      <div className="w-96 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-white">
        <form className="flex flex-col items-center space-y-6" onSubmit={handleSubmit}>
          <h1 className="text-3xl text-white text-base">Register</h1>
          <div className="input-box relative w-full h-16">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-full bg-transparent border-white border-2 border-white rounded-full text-white pl-8 text-base"
              onChange={handleEmailChange}
              value={email}
              required
            />
            <MdEmail className="absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-white" />
          </div>
          <div className="input-box relative w-full h-16">
            <input
              type="text"
              placeholder="Username"
              className="w-full h-full bg-transparent border-white  border-2 border-white rounded-full text-white pl-8 text-base"
              onChange={handleUsernameChange}
              value={username}
              required
            />
            <FaUser className="bx bxs-user absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-white"></FaUser>
          </div>
          <div className="input-box relative w-full h-16">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className={`w-full h-full bg-transparent border ${
                passwordStrengthError ? 'border-red-500' : 'border-white'
              } border-2 border-white rounded-full text-white pl-8 text-base`}
              onChange={handlePasswordChange}
              value={password}
              required
            />
            <RiLockPasswordFill
              className={`bx bxs-lock-alt absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl ${
                passwordStrengthError ? 'text-red-500' : 'text-white'
              }`}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={toggleShowPassword}>
              {showPassword ? <MdVisibilityOff className="text-white" /> : <MdVisibility className="text-white" />}
            </span>
          </div>
          <div className="input-box relative w-full h-16">
            <input
              type={showReenterPassword ? 'text' : 'password'}
              placeholder="Re-enter Password"
              className={`w-full h-full bg-transparent border ${
                passwordMatchError ? 'border-red-500' : 'border-white'
              } border-2 border-white rounded-full text-white pl-8 text-base`}
              onChange={handleReenterPasswordChange}
              value={reenterPassword}
              required
            />
            <RiLockPasswordFill
              className={`bx bxs-lock-alt absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl ${
                passwordMatchError ? 'text-red-500' : 'text-white'
              }`}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={toggleShowReenterPassword}>
              {showReenterPassword ? <MdVisibilityOff className="text-white" /> : <MdVisibility className="text-white" />}
            </span>
          </div>
          {passwordMatchError && (
            <p className="text-red-500 text-sm text-left mb-2">Passwords do not match. Please try again.</p>
          )}
          {passwordStrengthError && (
            <p className="text-red-500 text-sm text-left mb-4">
              Password must contain a capital letter, a special character, and be at least 8 characters long.
            </p>
          )}
          <button
            type="submit"
            className="btn w-full h-12 bg-white text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-secondary hover:text-white"
          >
            Register
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
  );
};

export default Register;
