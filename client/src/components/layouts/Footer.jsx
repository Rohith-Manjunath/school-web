import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/LogoAndOthers/logo-2-v2-6Ot8O22k.png"; // Adjust the path accordingly
import { useState } from "react";
import Modal from 'react-modal';
import { useAlert } from "react-alert";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";




const Footer = () => {


  const links = [
    { title: "About Us", to: "/OurTeam" },
    { title: "Admissions", to: "/admissions" },
    { title: "Academics", to: "/academics" },
    { title: "Parents Portal", to: "/parents-portal" },
    { title: "Admin login", to: "/admin-login" },  // Updated path to /login
    { title: "Quick Links", to: "/quick-links" },
  ];
  const links2 = [
    { title: "Calender & Schedules", to: "/calendar" },
    { title: "Career", to: "/career" },
    { title: "Digital Library", to: "/library" },
  ];

  const [isModalOpen,setIsModalOpen]=useState(false)
  const [secretKey,setSecretKey]=useState("")
  const navigate=useNavigate()
  const alert=useAlert()
  const [isSecretKeyVisible,setIsSecretKeyVisible]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(secretKey.toLocaleLowerCase() === process.env.AdminSecretKey.toLocaleLowerCase()){

      alert.success(`Admin access granted`)
      setIsModalOpen(false);
      setSecretKey("")
      navigate("/login")
    }else{
      alert.error(`Admin access denied`)
      setIsModalOpen(false)
    }

  }

  return (
  <>
  
  <div className="bg-secondary p-4 md:p-10 text-[12px] text-white lg:py-10 tracking-wide">
      <div className="lg:grid grid-cols-4 md:gap-20 space-y-10 md:space-y-0">
        <div className="mb-10 md:mb-0 lg:flex items-center justify-start">
          <img src={logo} className="w-[300px]" alt="" />
        </div>
        <div className="space-y-4">
          <div className="">
            <p className="lg:text-justify">
              Mount Litera Zee School 92/1-3, HD Kote Road, Rayanakere Post, 5
              Minutes from Srirampura Ring Road, Mysore – 570008.
            </p>
            <Link
              className="hover:ml-2 transition-all duration-200"
              to={
                "https://www.google.com/maps/place/Mount+Litera+Zee+School/@12.2293831,76.5867438,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf644f7358cc0d:0xe4fb32672e467b68!8m2!3d12.2293831!4d76.5867438!16s%2Fg%2F1yfh_kjjj?entry=ttu"
              }
            >
              Direction &gt;
            </Link>
          </div>
          <div className="space-y-0">
            <span className="block">PH : 0821 2971010</span>
            <span className="block">Mobile : 8884 300 400</span>
            <Link
            className="hover:ml-2 transition-all duration-200"
            to="tel:+918884300400"  
            >
             Call Us &gt;
            </Link>
          </div>
        </div>
        <div>
          <ul className="space-y-3">
            {links.map((link, index) => (
              <li key={index} className="text-start">
                {typeof link === "object" ? (
                <Link
                to={link.title !== "Admin login" && link.to}
                onClick={link.title === "Admin login" ? () => setIsModalOpen(true) : undefined}
                className="after:bg-white after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300 after:rounded-lg inline-block"
              >

{link.title}                  
</Link>
                ) : (
                  <span>{link}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-3">
            {links2.map((link, index) => (
              <li key={index} className="text-start">
                {typeof link === "object" ? (
                  <Link
                    to={link.to}
                    className="after:bg-white after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300 after:rounded-lg inline-block"
                  >
                    {link.title}
                  </Link>
                ) : (
                  <span>{link}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-2 md:flex items-center justify-between mt-5">
        <p>
          &copy; Mysore International School 2023 | All rights reserved | Legal Notice.
        </p>
        <p>Developed by webstor labs.</p>
      </div>
    </div>

    <Modal 
    
    isOpen={isModalOpen}
    shouldCloseOnOverlayClick={true}
    style={{
      overlay: {
        zIndex: 98,
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
      },
      content: {
        width: '90%', // Adjust the width for small screens
        maxWidth: '600px',
        height: '40vh', // Set height to auto for responsiveness
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
        backgroundColor:`rgba(255,255,255,0.2)`,
      },
    }}

    >

<form action="" onSubmit={handleSubmit} className="flex items-center justify-center flex-col gap-5">
<h2 className="font-semibold tracking-wider text-white underline underline-offset-4 text-2xl">Admin Login</h2>
<div className="flex items-center justify-center bg-white py-1 px-4 rounded-md">
<input
  type={isSecretKeyVisible ? "text" : "password"}
  placeholder="Enter secret key"
  className="rounded-md border-none outline-none"
  style={{   
    backgroundColor: "transparent",
    border:"0px solid"
  }} 
  onChange={(e) => setSecretKey(e.target.value)}
/>
{!isSecretKeyVisible ? <RiEyeCloseFill onClick={()=>setIsSecretKeyVisible(!isSecretKeyVisible)} className="hover:cursor-pointer"/> :<FaEye onClick={()=>setIsSecretKeyVisible(!isSecretKeyVisible)} className="hover:cursor-pointer"/>}
</div>
<button className="bg-ctcPrimary text-white px-4 py-2 rounded-full font-semibold tracking-wide transition-all ease-in-out duration-800" type="submit">Submit</button>

</form>

    </Modal>
  </>
  );
};

export default Footer;
