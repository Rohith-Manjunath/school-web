import Address from "./Address";
import AdmissionEnquiry from "./AdmissionEnquiry";
import Footer from "../../components/layouts/Footer";
import Hero from "../../components/layouts/Common/Hero";
import image from "../../assets/Images/ContactImages/philip-strong-iOBTE2xsYko-unsplash.jpg";
import BreadCrumb from "../../components/layouts/Common/BreadCrumb";
import PaperTear2 from "../../components/layouts/PaperTear2";


const ContactUs = () => {
  return (
    <div className="mt-20 bg-white">
      <Hero
        text={`Contact Us`}
        image={image}
        description={`Welcome to the Contact Us page of Mysore International School. At MIS, we value communication and are here to assist you. Whether you have inquiries about admissions, want to learn more about our programs, or have general questions, our team is ready to help. Feel free to reach out through the provided contact details, and we look forward to connecting with you.`}
      />
      <BreadCrumb 
      Currentlink={"contact-us"}
      Currentpage={"Contact Us"}/>
      <Address />
      <AdmissionEnquiry />
      <PaperTear2 />
      <Footer />
    </div>
  );
};

export default ContactUs;
