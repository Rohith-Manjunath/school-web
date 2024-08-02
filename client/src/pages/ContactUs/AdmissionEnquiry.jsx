import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useAdmissionQueryMutation } from "../../../Redux/authApi";
import { useAlert } from 'react-alert';

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
  const [admission, { isLoading }] = useAdmissionQueryMutation();
  const alert = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await admission({
        firstname,
        lastname,
        dob,
        previousSchool,
        phone,
        altPhone,
        class: selectedClass,
        place,
        email
      }).unwrap();
      alert.success(data?.message);
      setAltPhone("");
      setDob("");
      setFirstName("");
      setLastName("");
      setPhone("");
      setPreviousSchool("");
      setSelectedClass("");
      setPlace("");
      setEmail("");
    } catch (e) {
      alert.error(e?.data?.err);
      return;
    }
  };

  return (
    <>
      <div className="w-[95%] max-w-6xl mx-auto mt-16 mb-20">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-secondary to-ctcPrimaryLight p-8 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold text-center font-title">
              Admission Enquiry
            </h2>
            <p className="text-xl text-center mt-2 font-description">
              Student Details
            </p>
          </div>
          <form
            className="px-8 py-6 space-y-6 text-textSecondary"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  id="firstName"
                  type="text"
                  name="firstname"
                  placeholder="Enter your first name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstname}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  id="lastName"
                  type="text"
                  name="lastname"
                  placeholder="Enter your last name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastname}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  id="dob"
                  type="date"
                  name="dob"
                  onChange={(e) => setDob(e.target.value)}
                  value={dob}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="selectedClass">
                  Class
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  id="selectedClass"
                  name="class"
                  onChange={(e) => setSelectedClass(e.target.value)}
                  value={selectedClass}
                >
                  <option value="">Select Class</option>
                  <option value="kindergarten">Kindergarten</option>
                  <option value="primary">Primary School</option>
                  <option value="middleschool">Middle School</option>
                  <option value="highschool">High School</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="previousSchoolName">
                  Previous School Name
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  id="previousSchoolName"
                  type="text"
                  name="previousSchool"
                  placeholder="Enter previous school name"
                  onChange={(e) => setPreviousSchool(e.target.value)}
                  value={previousSchool}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="place">
                  Place
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  id="place"
                  type="text"
                  name="place"
                  placeholder="Enter your place"
                  onChange={(e) => setPlace(e.target.value)}
                  value={place}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  id="phoneNumber"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="altPhoneNumber">
                  Alternative Phone Number
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  id="altPhoneNumber"
                  type="tel"
                  name="altPhone"
                  placeholder="Enter alternative phone number"
                  onChange={(e) => setAltPhone(e.target.value)}
                  value={altPhone}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
      </div>
      <ToastContainer />
    </>
  );
};

export default AdmissionEnquiry;