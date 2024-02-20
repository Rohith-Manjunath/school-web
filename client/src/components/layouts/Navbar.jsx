import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/Images/LogoAndOthers/MIS_Main_logo-b9vQZsOZ.png"; // Adjust the path accordingly
import { motion } from "framer-motion";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleNavbar = () => {
    setShow(!show);
  };

  return (
    <div className="sticky z-10 top-0 left-0 bg-primary p-5 text-textSecondary lg:relative w-full">
      {!show ? (
        <RxHamburgerMenu
          onClick={toggleNavbar}
          className="text-2xl hover:shadow-cyan-500 block lg:hidden"
        />
      ) : (
        <GrClose
          onClick={toggleNavbar}
          className="text-2xl hover:shadow-cyan-500 block lg:hidden"
        />
      )}

      <ul
        className={` font-semibold block z-10 bg-primary lg:hidden absolute top-[4rem] w-[100vw] h-screen space-y-14 text-center transition-all duration-300 ${
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
          <NavLink to={"our-team"}>Our Team</NavLink>
        </li>
        <li onClick={() => setShow(false)}>
          <NavLink to={"about-us"}>About Us</NavLink>
        </li>
        <li onClick={() => setShow(false)}>
          <NavLink to={"contact-us"}>Contact Us</NavLink>
        </li>
        <li onClick={() => setShow(false)}>
          <NavLink to={"link7"}>Link 7</NavLink>
        </li>
      </ul>

      <ul className="hidden bg-primary lg:flex p-4 z-10 fixed top-0 left-0 items-center justify-around font-semibold tracking-wider w-full">
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
            to={"/academics/facilities"}
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
            to={"our-team"}
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
  );
};

export default Navbar;
