import { Button, Checkbox, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdClose } from "react-icons/io";
import { Label, Select } from "flowbite-react";

const SidebarAcademics = ({ open, setOpen, title }) => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Form Submitted successfully");
    setOpen(false);
    setData({});
    console.log(data);
  };

  return (
    <>
      <div
        className={`w-screen h-screen absolute top-0 left-0 bg-white text-start p-4 transition-all duration-300 z-10 space-y-3 lg:space-y-6 lg:w-1/3 lg:px-8 ${
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
              <Label htmlFor="name" value="Student name" />
            </div>
            <TextInput
              onChange={handleChange}
              id="name"
              type="name"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="dob" value="Student DOB" />
            </div>
            <TextInput onChange={handleChange} id="dob" type="date" required />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="number" value="Phone number" />
            </div>
            <TextInput onChange={handleChange} id="number" type="text" />
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="select" value="Select your program" />
            </div>
            <Select id="select" required onChange={handleChange}>
              <option value="Pre-School">Pre-School</option>
              <option value="Mid-School">Mid-School</option>
              <option value="High-School">High-School</option>
            </Select>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="altnumber" value="Alternative Phone number" />
            </div>
            <TextInput onChange={handleChange} id="altnumber" type="text" />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="address" value="Address" />
            </div>
            <TextInput
              onChange={handleChange}
              id="address"
              type="text"
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link
                onClick={() => setOpen(!open)}
                href="#"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                terms and conditions
              </Link>
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
