import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import { Label, Checkbox } from 'flowbite-react';
import { Link } from 'react-router-dom';
import file from '../../assets/Files/Terms_and_Conditions.pdf';
import { useAlert } from 'react-alert';
import { useScheduleMutation } from '../../../Redux/authApi';

const Schedule = () => {
  const [open, setOpen] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const alert=useAlert()
  const [schedule,{isLoading}]=useScheduleMutation()

  const handleToggleModal = () => {
    setOpen((prev) => !prev);
  };

  const initialStudentInfo = {
    name: '',
    phone: '',
    class:"",
    date:""
  };

  const [studentInfo, setStudentInfo] = useState(initialStudentInfo);

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!termsChecked) {
      alert.error('Please agree to the terms and conditions.');
      return;
    }

    try{
console.log(studentInfo)
 const data=await schedule(studentInfo).unwrap()
 alert.success(`${data?.message}, Thank you!`)

      setTermsChecked(false);
      setOpen(false);
      setStudentInfo(initialStudentInfo)
    }catch(e){
      alert.error(e?.data?.err)
      return;
    }

   

  
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the studentInfo state based on input changes
    setStudentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setTermsChecked(e.target.checked);
  };

  Modal.setAppElement('#root');

  return (
    <>
      <ToastContainer />
      <div className="flex-col mt-10 md:flex-row text-center py-10 bg-secondary text-white tracking-wide flex items-center px-2 justify-center gap-8 font-semibold shadow-2xl shadow-secondary ">
        <h4 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl">
          Schedule a visit at Mysore International School
        </h4>
        <div className="hover:translate-x-4 transition-all ease-in-out duration-800">
          <button
            onClick={handleToggleModal}
            className="bg-ctcSecondary text-ctcPrimary px-8 py-4 rounded-sm font-semibold tracking-wide md:mx-auto"
          >
            Schedule a visit
          </button>
        </div>
      </div>
      <Modal
        isOpen={open}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setOpen(false)}
        style={{
          overlay: {
            zIndex: 98,
            backgroundColor: `rgba(0, 0, 0, 0.5)`,
          },
          content: {
            width: '90%', // Adjust the width for small screens
            maxWidth: '600px',
            height: '80vh', // Set height to auto for responsiveness
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            flexDirection: 'column',
            color: '#580B57',
            overflowY: 'auto', // Enable vertical scrolling
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '10px',
            border: 'none',
            outline: 'none',
          },
        }}
      >
        <button
          className="absolute top-5 right-5 cursor-pointer font-semibold text-3xl"
          onClick={() => setOpen(false)}
        >
          <IoMdClose />
        </button>
        <h2 className="text-3xl md:mt-0 mt-[4rem] mb-6 text-center font-semibold capitalize text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
          Schedule a Visit
        </h2>
        <form
          onSubmit={handleSubmit}
          className="md:grid grid-cols-2 gap-6 space-y-5 md:space-y-0 px-6"
        >
          <div className="flex flex-col gap-2">
            <label className="text-black font-sans tracking-wide font-semibold" htmlFor="name">
              Student name*
            </label>
            <input
              className="rounded-md outline-none border-slate-400 font-serif tracking-wide uppercase text-fuchsia-950"
              onChange={handleChange}
              type="text"
              name="name"
              value={studentInfo.name}
              
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black font-sans tracking-wide font-semibold" htmlFor="phone">
              Phone number*
            </label>
            <input
              className="rounded-md outline-none border-slate-400 font-sans tracking-wide uppercase text-fuchsia-950"
              onChange={handleChange}
              type="text"
              name="phone"
              value={studentInfo.phone}
              
            />
          </div>
          <div className="flex flex-col gap-2 col-span-2 my-8 md:my-0">
            <label className="text-black font-sans tracking-wide font-semibold" htmlFor="class">
              Category
            </label>
            <select name="class" id="class" className="rounded-md font-serif tracking-wide uppercase text-fuchsia-950"   onChange={handleChange}  >
            <option value="1">Pre-Primary-School</option>
              <option value="2">Primary-School</option>
              <option value="3">Middle-School</option>
              <option value="4">High-School</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 col-span-2">
            <label className="text-black font-sans tracking-wide font-semibold" htmlFor="date">
              Date*
            </label>
            <input
              className="rounded-md outline-none border-slate-400 font-serif tracking-wide uppercase text-fuchsia-950"
              type="date"
              name="date"
              onChange={handleChange}
              
            />
          </div>
          <div className="flex items-center gap-2 ">
            <Checkbox
              id="agree"
              checked={termsChecked}
              onChange={handleCheckboxChange}
            />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link
                to={file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                terms and conditions
              </Link>
            </Label>
          </div>
          <div className="col-span-2 text-center ">
            <button
              type="submit"
              className="bg-ctcPrimary text-white px-4 py-2 rounded-full font-semibold tracking-wide transition-all ease-in-out duration-800"
            >
              {isLoading?"Submitting...":"Submit"}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Schedule;
