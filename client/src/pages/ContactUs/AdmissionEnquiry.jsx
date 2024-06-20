import {  useState } from "react";
import { ToastContainer } from "react-toastify";
import { useAdmissionQueryMutation } from "../../../Redux/authApi";
import {useAlert} from 'react-alert'

const AdmissionEnquiry = () => {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [previousSchool, setPreviousSchool] = useState('');
  const [phone, setPhone] = useState('');
  const [altPhone, setAltPhone] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [place, setPlace] = useState('');
  const [email, setEmail] = useState(''); 
  const [admission,{isLoading}]=useAdmissionQueryMutation()
  const alert=useAlert()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
    
   const data=await admission({firstname,lastname,dob,previousSchool,phone,altPhone,class:selectedClass,place,email}).unwrap()
   alert.success(data?.message)
   setAltPhone("")
   setDob("")
   setFirstName("")
   setLastName("")
   setPhone("")
   setPreviousSchool("")
   setSelectedClass("")
   setPlace("")
   setEmail("")



    }catch(e){


      alert.error(e?.data?.err)
      return;

    }  }

  return (
    <>
    <div className="w-full max-w-[90%] mx-auto  mt-16 pt-10 text-textSecondary  mb-[5rem] rounded-lg shadow-lg ">
      <h2 className="text-3xl font-semibold text-center text-textSecondary font-title bg-white pt-8 rounded-lg">
        Admission Enquiry
      </h2>
      <h4 className="text-xl font-semibold text-center text-textSecondary font-description bg-white">
        Student Details
      </h4>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label
              className="block  text-sm font-bold mb-2"
              htmlFor="firstName"
              
            >
              First Name
            </label>
            <input
              
              className="shadow outline-none border border-gray-200 appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none"
              id="firstName"
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={(e)=>setFirstName(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              
              className="shadow outline-none border border-gray-200 appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none"
              id="lastName"
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={(e)=>setLastName(e.target.value)}


            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <input
              
              className="shadow outline-none border border-gray-200 appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none"
              id="dob"
              type="date"
              name="dob"
              placeholder="Date of Birth"
              onChange={(e)=>setDob(e.target.value)}

      
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label
              className="block  text-sm font-bold mb-2"
              htmlFor="selectedClass"
            >
              Class
            </label>
            <select
              className="shadow outline-none border border-gray-200 appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none"
              id="selectedClass"
              name="class"
              onChange={(e)=>setSelectedClass(e.target.value)}
            >
              <option value="">Select Class</option>
              <option value="kindergarten">Kindergarten</option>
              <option value="primary">Primary-School</option>
              <option value="middleschool">Middle-School</option>
              <option value="highschool">High-School</option>
              {/* Add other class options */}
            </select>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label
              className="block  text-sm font-bold mb-2"
              htmlFor="previousSchoolName"

            >
              Previous School Name
            </label>
            <input
              
              className="shadow outline-none border border-gray-200 appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none"
              id="previousSchoolName"
              type="text"
              name="previousSchool"
              placeholder="Previous School Name"
              onChange={(e)=>setPreviousSchool(e.target.value)}

              
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="place">
              Place
            </label>
            <input
              
              className="shadow outline-none border border-gray-200 appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none"
              id="place"
              type="text"
              name="place"
              placeholder="Place"
              onChange={(e)=>setPlace(e.target.value)}


            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label
              className="block  text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              
              className="shadow outline-none border border-gray-200 appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none"
              id="phoneNumber"
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={(e)=>setPhone(e.target.value)}

            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label
              className="block  text-sm font-bold mb-2"
              htmlFor="altPhoneNumber"
            >
              Alternative Phone Number
            </label>
            <input
              className="shadow outline-none border border-gray-200 appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none"
              id="altPhoneNumber"
              type="text"
              name="altPhone"
              placeholder="Alternative Phone Number"
              onChange={(e)=>setAltPhone(e.target.value)}

      
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              
              className="shadow outline-none border border-gray-200 appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}

            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
          disabled={isLoading}
            className="w-1/3 bg-ctcPrimary hover:tracking-wider active:scale-90 hover:bg-ctcPrimaryLight hover:scale-105 transition-all duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none"
            type="submit"
          >
{isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
    <ToastContainer/>
    </>
  );
};

export default AdmissionEnquiry;
