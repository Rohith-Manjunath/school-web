import Address from "./Address";
import AdmissionEnquiry from "./AdmissionEnquiry";
import Footer from "../../components/layouts/Footer";
import Hero from "../../components/layouts/Common/Hero";
import image from "../../assets/Images/ContactImages/philip-strong-iOBTE2xsYko-unsplash.jpg";

const ContactUs = () => {
  return (
    <div className="mt-20 bg-white">
      <Hero
        text={`Contact Us`}
        image={image}
        description={`Welcome to Mysore international school, where academic excellence is at the core of our mission. We are committed to providing students with a rigorous and well-rounded education that prepares them for success in a rapidly changing world. Our dedicated faculty and staff are passionate about nurturing the intellectual growth of every student, fostering critical thinking, creativity, and a love for learning.`}
      />
      <Address />
      <AdmissionEnquiry />
      <Footer />
    </div>
  );
};

export default ContactUs;
