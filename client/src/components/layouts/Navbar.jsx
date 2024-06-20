import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/Images/LogoAndOthers/PrimaryLogo.png"; // Adjust the path accordingly
import { motion } from "framer-motion";
import UserOptions from "./UserOptions";
import { useSelector } from "react-redux";
import Links from "./Common/Links";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleNavbar = () => {
    setShow(!show);
  };
  const path = useLocation().pathname.split("/")[1];

  const {user}=useSelector(state=>state?.user)


  return (
<>
<div className="md:relative md:z-40 fixed top-0 left-0 right-0 z-30 bg-primary p-5 text-textSecondary w-full border-b-2 border-secondary shadow-lg shadow-secondary">
      {!show ? (
        <div className="uppercase flex items-center justify-start gap-6">
          <RxHamburgerMenu
            onClick={toggleNavbar}
            className="text-2xl hover:shadow-cyan-500 block lg:hidden"
          />
          <span className="font-semibold tracking-wider ">
            {path != "" ? path : "Home"}
          </span>
        
        </div>
      ) : (
        <GrClose
          onClick={toggleNavbar}
          className="text-2xl hover:shadow-cyan-500 block lg:hidden "
        />
      )}

      <ul
        className={` font-semibold block z-auto bg-primary  lg:hidden absolute top-[4rem] w-[100vw] h-screen  space-y-20 text-center transition-all duration-300 ${
          !show ? "left-[-100%]" : "left-0"
        }`}
      >
        <li onClick={() => setShow(false)}>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li onClick={() => setShow(false)}>
          <NavLink to={"admissions"}>Admissions</NavLink>
        </li>
        <li onClick={() => setShow(false)}>
          <NavLink to={"academics"}>Academics</NavLink>
        </li>
        <li onClick={() => setShow(false)}>
          <NavLink to={"facilities"}>Facility</NavLink>
        </li>
        <li onClick={() => setShow(false)}>
          <NavLink to={"/our-team"}>Our Team</NavLink>
        </li>
        <li onClick={() => setShow(false)}>
          <NavLink to={"contact-us"}>Contact Us</NavLink>
        </li>
        <li onClick={() => setShow(false)}>
          <link rel="stylesheet" href="cbse" />
        </li>
        <li onClick={() => setShow(false)}>
        <link rel="stylesheet" href="others" />
        </li>
        <li onClick={() => setShow(false)}>
          <p className="mt-5">All Rights reserved</p>
        </li>
      </ul>
      <ul className="hidden bg-primary lg:flex p-4 z-50 fixed top-0 left-0 items-center justify-around font-semibold tracking-wider w-full border-2 border-b-secondary shadow-lg shadow-secondary ">
        <motion.li
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.8, delay: 0 }}
        >
          <NavLink
            to={"/"}
            className="after:bg-secondary after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300  after:rounded-lg"
          >
            Home
          </NavLink>
        </motion.li>
        <motion.li
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.8, delay: 0.1 }}
        >
          <NavLink
            to={"admissions"}
            className="after:bg-secondary after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300  after:rounded-lg"
          >
            Admissions
          </NavLink>
        </motion.li>
        <motion.li
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.8, delay: 0.2 }}
          className="relative group"
        >
          <NavLink
            to={"/academics"}
            className="after:bg-secondary after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300 after:rounded-lg"
          >
            Academics
          </NavLink>
        </motion.li>
        <motion.li
          animate={{ y: 0, opacity: 1, scale: 1 }}
          initial={{ y: 0, opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5, delay: 2.5 }}
        >
          <NavLink to={"/"}>
            <img src={logo} className="w-[15rem]" alt="" />
          </NavLink>
        </motion.li>
        <motion.li
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.8, delay: 0.3 }}
        >
          <NavLink
            to={"/facilities"}
            className="after:bg-secondary after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300  after:rounded-lg"
          >
            Facilities
          </NavLink>
        </motion.li>
        <motion.li
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.8, delay: 0.4 }}
        >
          <NavLink
            to={"/our-team"}
            className="after:bg-secondary after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300  after:rounded-lg"
          >
            Our Team
          </NavLink>
        </motion.li>

        <motion.li
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.8, delay: 0.5 }}
        >
          <NavLink
            to={"contact-us"}
            className="after:bg-secondary after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300  after:rounded-lg"
          >
            Contact Us
          </NavLink>
        </motion.li>
      </ul>
    </div>
    <div>
{user &&    <UserOptions user={user} />
}
    </div>
    
    {
      !show && <Links/>
    }

</>
  );
};

export default Navbar;
