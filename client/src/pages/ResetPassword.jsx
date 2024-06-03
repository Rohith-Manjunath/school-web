import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useResetPasswordMutation } from '../../Redux/authApi';
import { useAlert } from 'react-alert';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const token = useLocation().pathname.split("/")[3];
  const alert=useAlert()
  const [resetPassword,{isLoading:resetPasswordLoading}] = useResetPasswordMutation()
  const navigate=useNavigate()


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };



 
  const handleSubmit = async(e) => {
    e.preventDefault();


    try{

 const data=await resetPassword({token,password,confirmPassword}).unwrap()
 alert.success(data?.message)
setPassword("")
setConfirmPassword("")
navigate("/login")
    }catch(e){

      alert.error(e?.data?.err)
      setPassword("")
      setConfirmPassword("")

    }

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Reset Password</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            New Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your new password"
            required
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Enter your new password"
            required
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          {resetPasswordLoading ?"Loading...":"Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;