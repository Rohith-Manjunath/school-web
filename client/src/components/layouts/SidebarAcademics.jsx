import { Button, Checkbox, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdClose } from "react-icons/io";
import { Label, Select } from "flowbite-react";
import file from "../../assets/Files/Terms_and_Conditions.pdf"


const SidebarAcademics = ({ open, setOpen, title }) => {
  const [data, setData] = useState({});



  const initialStudentInfo = {
    name: 'John Doe',
    phone: '',
  };

  const [studentInfo, setStudentInfo] = useState(initialStudentInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the studentInfo state based on input changes
    setStudentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Form Submitted successfully");
    setOpen(false);
    setData({});
  };

  return (
    <>
      <div
        className={`w-screen h-screen overflow-y-auto absolute top-0 left-0 bg-white text-start p-4 transition-all duration-300 z-10 space-y-3 lg:space-y-6 lg:w-1/3 lg:px-8 ${
          !open ? "-translate-x-full" : "translate-x-0 "
        }`}
      >
        <IoMdClose
          className="absolute top-4 right-3 text-2xl hover:cursor-pointer"
          onClick={() => setOpen(false)}
        />

        <h2 className="text-center font-semibold text-2xl ">{title}</h2>

        <form className="flex flex-col lg:gap-3" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
            <label className="text-black font-sans tracking-wide  " htmlFor="name">
              Student name*
            </label>
            </div>
            <input
              className="rounded-md outline-none border-slate-400 w-full font-serif tracking-wide uppercase text-fuchsia-950"
              onChange={handleChange}
              type="text"
              name="name"
              value={studentInfo.name}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label htmlFor="dob" className="text-black font-sans tracking-wide ">
                Date of birth*
              </label>
            </div>
            <input
              className="rounded-md outline-none border-slate-400 w-full font-sans tracking-wide uppercase text-fuchsia-950"
              onChange={handleChange}
              type="date"
              name="date"
              value={studentInfo.date}
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
            <label className="text-black font-sans tracking-wide " htmlFor="phone">
              Phone number*
            </label>
            </div>
            <input
              className="rounded-md w-full outline-none border-slate-400 font-sans tracking-wide uppercase text-fuchsia-950"
              onChange={handleChange}
              type="text"
              name="phone"
              value={studentInfo.phone}
              required
            />
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <label className="text-black font-sans tracking-wide " htmlFor="phone">
              Select your Grade*
            </label>
            </div>
            <div>
            <select name="select" id="select" className="rounded-md w-full font-serif tracking-wide uppercase text-fuchsia-950">
            <option value="1">Pre-Primary-School</option>
              <option value="2">Primary-School</option>
              <option value="3">Middle-School</option>
              <option value="4">High-School</option>
            </select>
          </div>
          </div>

          <div>
            <div className="mb-2 block">
            <label className="text-black font-sans tracking-wide " htmlFor="altphone">
              Alternative phone number
            </label>
            </div>
            <input
              className="rounded-md w-full outline-none border-slate-400 font-sans tracking-wide uppercase text-fuchsia-950"
              onChange={handleChange}
              type="text"
              name="phone"
              value={studentInfo.altphone}
            />
          </div>

          <div>
            <div className="mb-2 block">
            <label className="text-black font-sans tracking-wide " htmlFor="address">
              Address
            </label>
            </div>
            <textarea
              className="rounded-md outline-none border-slate-400 text-sm resize-none w-full font-serif tracking-wide text-fuchsia-950"
              onChange={handleChange}
              name="address"
              value={studentInfo.address}
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <a
          href={file}
          target="_blank" 
          rel="noopener noreferrer"  
          className="text-cyan-600 hover:underline dark:text-cyan-500"
        >
          terms and conditions
        </a>
            </Label>
          </div>

          <div className="my-3">
            <Button type="submit">Submit</Button>

            <Link
              to={"/contact-us"}
              className="text-[14px] font-bold text-blue-500"
            >
              Contact Us &gt;
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default SidebarAcademics;
