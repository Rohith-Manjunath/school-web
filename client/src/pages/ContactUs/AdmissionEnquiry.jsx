import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AdmissionEnquiry = () => {
 

  return (
    <>
    <div className="w-full max-w-[90%] mx-auto space-y-8 mt-16 text-textSecondary border  py-10 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-textSecondary font-title">
        Admission Enquiry
      </h2>
      <h4 className="text-xl font-semibold text-center text-textSecondary font-description">
        Student Details
      </h4>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
              
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              name="firstname"
              placeholder="First Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              name="lastname"
              placeholder="Last Name"

            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <input
              
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="dob"
              type="date"
              name="dob"
              placeholder="Date of Birth"
      
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
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="selectedClass"
              name="class"
    
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
              
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="previousSchoolName"
              type="text"
              name="previousSchool"
              placeholder="Previous School Name"
              
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="place">
              Place
            </label>
            <input
              
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="place"
              type="text"
              name="place"
              placeholder="Place"

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
              
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="text"
              name="phone"
              placeholder="Phone Number"
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
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="altPhoneNumber"
              type="text"
              name="altPhone"
              placeholder="Alternative Phone Number"
      
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
Submit
          </button>
        </div>
      </form>
    </div>
    <ToastContainer/>
    </>
  );
};

export default AdmissionEnquiry;
