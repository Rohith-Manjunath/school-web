import { Link } from "react-router-dom";
import logo from "../../assets/Images/LogoAndOthers/logo-2-v2-6Ot8O22k.png"; // Adjust the path accordingly

const Footer = () => {

 

  const links = [
    { title: "About Us", to: "/about-us" },
    { title: "Admissions", to: "/admissions" },
    { title: "Academics", to: "/academics" },
    { title: "Parents Portal", to: "/parents-portal" },
    { title: "Admin login", to: "/admin-login" },  // Updated path to /login
    { title: "Quick Links", to: "/quick-links" },
  ];
  const links2 = [
    { title: "Calender & Schedules", to: "/calendar" },
    { title: "Carrier", to: "/carrier" },
    { title: "Digital Library", to: "/library" },
  ];

  return (
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
  );
};

export default Footer;
