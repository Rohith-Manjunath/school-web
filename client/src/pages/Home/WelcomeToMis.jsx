import { motion } from "framer-motion";
import logo from "../../assets/Images/LogoAndOthers/hori-xnjhSTpu.png"; // Adjust the path accordingly
import Modal from "react-modal";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";

const WelcomeToMIS = () => {
  const [open, setOpen] = useState(false);

  const handleToggleModal = () => {
    setOpen((prev) => !prev);
  };

  const initialStudentInfo = {
    name: "John Doe",
    dob: "",
    phone: "",
    program: "Pre-School",
    address: "",
    agree: false,
  };

  const [studentInfo, setStudentInfo] = useState(initialStudentInfo);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if terms and conditions are agreed
    if (!termsChecked) {
      toast.success("Please agree to the terms and conditions.");
      return;
    }

    // Check if all required fields are filled except altPhone
    for (const key in studentInfo) {
      if (key !== "altPhone" && studentInfo[key] === "") {
        toast.warn(`Please fill in the ${key} field.`);
        return;
      }
    }

    setStudentInfo(initialStudentInfo);
    setTermsChecked(false);
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Update the studentInfo state based on input changes
    setStudentInfo((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    toast.success("Form submitted successfully");
  };

  const handleCheckboxChange = (e) => {
    setTermsChecked(e.target.checked);
  };

  Modal.setAppElement("#root");

  return (
    <>
      <ToastContainer />
      <div className="p-6 lg:px-20 lg:py-28 space-y-10 md:space-y-0 bg-secondary text-white md:grid md:grid-cols-2 tracking-wide">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1  }}

          className="col-span-1 space-y-6"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl">
            Welcome to <span className="font-myfont">MIS</span>
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl">
            Empower. Excel. Educate
          </h3>
          <p className="text-justify">
            Welcome to Mysore International School, a place where every
            student's journey is crafted with care and purpose. Here, education
            goes beyond textbooks, shaping young minds into confident, curious
            learners. Our vibrant community of educators and students fosters an
            environment of collaboration and growth. As you embark on this
            educational adventure with us, you'll discover not just a school but
            a supportive family, dedicated to unlocking the full potential of
            each individual.
          </p>
          <button
            onClick={handleToggleModal}
            className="md:w-1/3 rounded-md shadow-sm border p-2 font-semibold tracking-widest bg-ctcPrimary text-white"
          >
            Enroll Today
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}

          transition={{ duration: 1, delay: 1 }}
      
          className="col-span-1 flex justify-center md:justify-end items-center"
        >
          <img
            src={logo}
            alt="MIS Logo"
            className="w-[200px] sm:w-[250px] lg:w-1/2 h-auto "
          />
        </motion.div>
      </div>
      <Modal
        isOpen={open}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setOpen(false)}
        className=""
        style={{
          overlay: {
            zIndex: 9999, // Set a high z-index for the modal overlay
            backgroundColor: `rgba(0,0,0,0.5)`,
          },
          content: {
            width: "1000px",
            height: "580px",
            margin: "0 auto",
            color: "#580B57",
            zIndex: 10000, // Set a high z-index for the modal content
          },
        }}
      >
        <button
          className="absolute top-5 right-5  cursor-pointer font-semibold text-3xl"
          onClick={() => setOpen(false)}
        >
          <IoMdClose />
        </button>
        <h2 className="text-3xl mb-5 text-center font-semibold capitalize">
          Enrollment form
        </h2>
        <form
          onSubmit={handleSubmit}
          className="md:grid grid-cols-2 gap-6 space-y-5 md:space-y-0 px-6"
        >
          <div className="flex flex-col gap-2">
            <label className="text-black" htmlFor="name">
              Student name
            </label>
            <input
              className="rounded-md outline-none border-slate-400"
              onChange={handleChange}
              type="text"
              name="name"
              value={studentInfo.name}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black" htmlFor="dob">
              Date of Birth
            </label>
            <input
              className="rounded-md outline-none border-slate-400"
              onChange={handleChange}
              type="date"
              name="dob"
              value={studentInfo.dob}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black" htmlFor="phone">
              Phone number
            </label>
            <input
              className="rounded-md outline-none border-slate-400"
              onChange={handleChange}
              type="text"
              name="phone"
              value={studentInfo.phone}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black" htmlFor="altPhone">
              Alternative Phone number
            </label>
            <input
              className="rounded-md outline-none border-slate-400"
              onChange={handleChange}
              type="text"
              name="altPhone"
              value={studentInfo.altPhone}
            />
          </div>
          <div className="flex flex-col gap-2 col-span-2 my-8 md:my-0">
            <select name="select" id="select" className="rounded-md">
              <option value="1">Pre-School</option>
              <option value="2">Middle-School</option>
              <option value="3">High-School</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 col-span-2">
            <label className="text-black" htmlFor="address">
              Address
            </label>
            <textarea
              className="rounded-md outline-none border-slate-400 h-[60px]"
              onChange={handleChange}
              name="address"
              value={studentInfo.address}
              required
            />
          </div>
          <div className="flex flex-row gap-2 items-center col-span-2 my-6 md:my-0">
            <input
              className="rounded-md outline-none border-slate-400"
              onChange={handleCheckboxChange}
              type="checkbox"
              name="agree"
              checked={termsChecked}
              required
            />
            <label className="text-black" htmlFor="agree">
              I agree to the terms and conditions
            </label>
          </div>
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className=" bg-ctcPrimary text-white px-4 py-2 rounded-full font-semibold tracking-wide transition-all ease-in-out duration-800"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default WelcomeToMIS;
