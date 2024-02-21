import React, { useState } from "react";

const AdmissionEnquiry = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    selectedClass: "",
    previousSchoolName: "",
    place: "",
    phoneNumber: "",
    altPhoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-[90%] mx-auto space-y-8 mt-16 text-textSecondary border  py-10 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-textSecondary">
        Admission Enquiry
      </h2>
      <h4 className="text-xl font-semibold text-center text-textSecondary">
        Student details
      </h4>
      <form
        onSubmit={handleSubmit}
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
              required
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="dob"
              type="text"
              name="dob"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleChange}
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
              name="selectedClass"
              value={formData.selectedClass}
              onChange={handleChange}
            >
              <option value="">Select Class</option>
              <option value="prekg">Pre-KG</option>
              <option value="ukg">UKG</option>
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
              required
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="previousSchoolName"
              type="text"
              name="previousSchoolName"
              placeholder="Previous School Name"
              value={formData.previousSchoolName}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="place">
              Place
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="place"
              type="text"
              name="place"
              placeholder="Place"
              value={formData.place}
              onChange={handleChange}
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
              required
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
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
              name="altPhoneNumber"
              placeholder="Alternative Phone Number"
              value={formData.altPhoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
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
  );
};

export default AdmissionEnquiry;
