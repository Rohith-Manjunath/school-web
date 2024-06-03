import { useState } from 'react';
import {useAlert} from 'react-alert'
import { useResetPasswordMailMutation } from '../../Redux/authApi';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const alert=useAlert()
  const [sendMail,{isLoading:sendMailLoading}] = useResetPasswordMailMutation()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();


    try{

 const data=await sendMail({email}).unwrap()
 alert.success(data?.message)
 setEmail("")

    }catch(e){

      alert.error(e?.data?.err)
      setEmail("")

    }

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Forgot Password</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full tracking-wide bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          {sendMailLoading ?"Sending Mail...":"Get Email"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;