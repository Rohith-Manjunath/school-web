import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import { useEnrollMutation } from '../../../Redux/authApi';
import { useAlert } from 'react-alert';
import EnrollmentModal from '../../components/HomeComponents/Modals/EnrollModal';
import logo from '../../assets/Images/LogoAndOthers/SecondaryLogo.png';
import file from '../../assets/Files/Terms_and_Conditions.pdf';

const WelcomeToMIS = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [category, setCategory] = useState("");
  const [phone, setPhone] = useState("");
  const [altPhone, setAltPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [enroll, { isLoading }] = useEnrollMutation();
  const alert = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await enroll({ name, dob, category, phone, altPhone, address }).unwrap();
      setIsModalOpen(false);
      alert.success("Query submitted successfully");
      setAddress("");
      setAltPhone("");
      setCategory("");
      setName("");
      setDob("");
      setPhone("");
    } catch (e) {
      alert.error(e?.data?.err);
    }
  };

  return (
    <>
      <ToastContainer style={{ zIndex: 99 }} />
      <div className="p-6 lg:px-20 lg:py-28 space-y-10 md:space-y-0 bg-secondary text-white md:grid md:grid-cols-2 tracking-wide">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
            className="col-span-1 pb-5"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-title">
              Welcome to <span className="font-subtext">MIS</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-serif mt-[-8px]">
              Empower. Excel. Educate
            </h2>
          </motion.div>
          <p className="text-justify font-sans tracking-wide font-normal mb-3">
            Welcome to Mysore International School, a place where every
            student's journey is crafted with care and purpose. Here, education
            goes beyond textbooks, shaping young minds into confident, curious
            learners. Our vibrant community of educators and students fosters an
            environment of collaboration and growth. As you embark on this
            educational adventure with us, you'll discover not just a school but
            a supportive family, dedicated to unlocking the full potential of
            each individual.
          </p>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
            onClick={() => setIsModalOpen(true)}
            className="md:w-1/3 rounded-md mt-5 shadow-sm border p-2 font-semibold tracking-widest bg-ctcPrimary text-white"
          >
            Enroll Today
          </motion.button>
        </div>
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
      <EnrollmentModal 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
        handleSubmit={handleSubmit} 
        name={name} setName={setName}
        dob={dob} setDob={setDob}
        phone={phone} setPhone={setPhone}
        altPhone={altPhone} setAltPhone={setAltPhone}
        category={category} setCategory={setCategory}
        address={address} setAddress={setAddress}
        isLoading={isLoading} 
        file={file}
      />
    </>
  );
};

export default WelcomeToMIS;
