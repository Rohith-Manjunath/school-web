import { motion } from "framer-motion";
import {useState } from "react";
import { useAlert } from "react-alert";
import { useParentsenrollMutation } from "../../../Redux/authApi";


const Enroll = () => {

  const [parentname,setParentName]=useState("")
  const [phone,setPhone]=useState("")
  const [message,setMessage]=useState("")
  const [email,setEmail]=useState("")
  const alert=useAlert()
  const [enroll,{isLoading}]=useParentsenrollMutation()


  const handleFormSubmit=async(e)=>{
    e.preventDefault()

    try{

    const data=await enroll({parentname,email,message,phone}).unwrap()
    alert.success(data?.message)
    setParentName("")
    setEmail("")
    setPhone("")
    setMessage("")

    }catch(e){
      alert.error(e?.data?.err)
    }

  }


  return (
   <>
    <div className="p-4 lg:grid grid-cols-2 tracking-wide bg-secondary pt-12">
      <div className=" text-white space-y-6 p-4 ">
        <motion.h5
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl lg:text-4xl">
          Communicate With Us
        </motion.h5>
        <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
         className="capitalize text-xl md:text-2xl">How to enroll</motion.h2>
        <motion.p
         initial={{ opacity: 0, y: -100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 2 }}
         viewport={{ once: true }}>
          Welcome to the enrollment gateway of Mysore International School—a
          place where educational journeys begin. We are thrilled to embark on
          this exciting adventure with you. Please complete the enrollment form
          below to initiate the enrollment process for your child.
        </motion.p>
        <motion.p
         initial={{ opacity: 0, y: -100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 2 }}
         viewport={{ once: true }}>
          If you have any questions or need assistance during the enrollment
          process, our friendly admissions team is here to help. Feel free to
          reach out to us.
        </motion.p>
      </div>
      <div className="text-textSecondary bg-white p-4 space-y-6 rounded-md">
        <h2 className="uppercase text-center font-semibold p-4 text-2xl">
          enrollment form
        </h2>
        <form
          action=""
          className="grid grid-cols-2 border lg:border-secondary border-none p-4 rounded-md tracking-wide"
          onSubmit={handleFormSubmit}
        >
          <div className="col-span-full lg:col-span-1 flex flex-col lg:items-center justify-center gap-6 lg:p-3">
            <input
            onChange={(e)=>setParentName(e.target.value)}
            name="parentname"
              type="text"
              placeholder="Parent's Name"
              className="p-2 outline-none rounded-sm w-full border border-slate-400 focus:outline-textSecondary focus:border-none"
            />
            <input
              onChange={(e)=>setPhone(e.target.value)}
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="p-2 outline-none rounded-sm w-full border border-slate-400 focus:outline-textSecondary focus:border-none"
            />
            <input
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              name="email"
              className="p-2 outline-none rounded-sm w-full border border-slate-400 focus:outline-textSecondary focus:border-none"
            />
          </div>
          <div className="col-span-full lg:col-span-1  mt-10 lg:m-0 lg:p-3">
            <textarea
              className="w-full p-2 rounded-sm outline-none border border-slate-400 focus:outline-textSecondary focus:border-none"
              placeholder="Message"
              onChange={(e)=>setMessage(e.target.value)}
              name="message"
              id=""
              rows="6"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div className="col-span-full lg:ml-2 mt-2">
            <button disabled={isLoading} type="submit" className="bg-ctcPrimary text-ctcSecondary w-full py-2 rounded-sm font-semibold tracking-wider hover:bg-ctcPrimary hover:text-ctcSecondary hover:border hover:scale-95 transition-all duration-200 ">
                   {isLoading ? "Submitting...":"Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
   </>
  );
};

export default Enroll;
