import { Link } from "react-router-dom";

const Address = () => {
  return (
    <>
      <h1 className=" text-2xl sm:text-3xl uppercase text-center text-textSecondary font-semibold mt-16 font-title">
        Contact Us
      </h1>
      <div className="md:grid space-y-12 md:space-y-0 grid-cols-2 w-[90%] mx-auto mt-8 text-textSecondary tracking-wide shadow-lg border pb-8 pt-4 rounded-lg">
        <div className="space-y-4 px-2 md:px-10">
          <h2 className="text-3xl md:text-4xl text-textSecondary  font-semibold font-title">
            Mysore international school
          </h2>
          <div className="font-semibold">
            <p className="lg:text-justify font-description">
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
          <div className="space-y-8">
            <h4 className="font-semibold ">
              Email Address :{" "}
              <span className="font-normal">admissions@mysoreinternationalschool.com</span>
            </h4>
            <h4 className="font-semibold ">
              Telephone Number :{" "}
              <span className="font-normal">0821 2971010 / 8884300400</span>
            </h4>
            <h4 className="font-semibold ">
              Admission Officer Name :{" "}
              <span className="font-normal">Ms. Ranjitha</span>
            </h4>
            <h4 className="font-semibold ">
              Admission Officer E-mail address :{" "}
              <span className="font-normal">zeeschoolmysore@gmail.com</span>
            </h4>
            <h4 className="font-semibold ">
              Admission Officer Mobile No :{" "}
              <span className="font-normal">+91 888 4300 400 / +91 8277 237 785</span>
            </h4>
          </div>
        </div>
        <div className="px-10 border">
          <iframe
            title="Google Map"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.278936101485!2d76.58416887506405!3d12.229383088021931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf644f7358cc0d%3A0xe4fb32672e467b68!2sMount%20Litera%20Zee%20School!5e0!3m2!1sen!2sin!4v1701524068815!5m2!1sen!2sin"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Address;
