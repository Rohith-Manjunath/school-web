import React from 'react';
import HeroImage from '../../assets/Images/FacilitiesImages/Amenities/transport.jpg';
import TrackingImage from '../../assets/Images/FacilitiesImages/Amenities/GPS.jpg';
import EmergencyAlert from '../../assets/Images/FacilitiesImages/Amenities/emergency.jpg';
import communication from '../../assets/Images/FacilitiesImages/Amenities/communication.jpg';
import monitoring from '../../assets/Images/FacilitiesImages/Amenities/monitoring.jpg';
import Footer from "../../components/layouts/Footer";



const TransportPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[330px] lg:h-[550px]">
        <img
          src={HeroImage}
          alt="School Bus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="max-w-4xl mx-4 px-3 text-center bg-white p-10   rounded-md bg-opacity-70">
            <h1 className="text-2xl md:text-4xl font-bold font-title tracking-wide text-secondary mb-2">
              Transportation
            </h1>
            <p className="text-sm md:text-lg max-w-3xl text-secondary font-description pb-6 tracking-wide">
              Ensuring your child's safety is our top priority, with state-of-the-art GPS tracking systems and driver behavior monitoring technology
            </p>
            <a
              href="#features"
              className="bg-secondary text-white py-2 px-4 rounded-md tracking-wider hover:bg-primary hover:text-secondary border border-secondary hover:border-secondary font-semibold transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-8 md:py-16 bg-gray-100" id="features">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-title tracking-wide text-secondary mb-10 text-center">
            Key Features of Our Transportation Services
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <li className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={TrackingImage}
                alt="Tracking"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                  GPS Tracking and Driver Behavior Monitoring
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Our entire transportation fleet is equipped with state-of-the-art GPS tracking systems and driver behavior monitoring technology, ensuring real-time monitoring of vehicle locations and driving patterns.
                </p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={EmergencyAlert}
                alt="Tracking"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                  Emergency Alerts and Safety Drills
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  In case of emergencies, our school management system allows for immediate communication between drivers, school authorities, and parents. Regular safety drills are conducted to educate students on proper behavior during transportation and emergency procedures.
                </p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={communication}
                alt="Tracking"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                  Transparency and Open Communication
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We believe in transparency and open communication. Any concerns or inquiries related to transportation can be easily addressed through the enquiry form on our school website, ensuring a smooth and responsive communication channel between parents and school authorities.
                </p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={monitoring}
                alt="Tracking"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                    Driver Behavior Monitoring
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                Our tracking system also monitors driver behavior. This includes monitoring speed, sudden stops,and other driving patterns. Any deviations from safe driving practices are flagged for immediate attention and corrective action.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Closing Section */}
      
      <div className="py-16 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* <h2 className="text-3xl font-semibold text-gray-800 mb-6">
      Experience Safe and Secure Transportation
    </h2>
    <p className="text-gray-600 text-lg mb-8">
      Our transportation services with tracking facilities are designed to provide the utmost safety and convenience to both students and their families. We understand that trust and peace of mind are essential when it comes to your child's transportation, and our commitment to these values is reflected in our advanced tracking technology.
    </p> */}
    <p className="text-gray-600 text-lg mb-10 ">
    Join us in ensuring your child's safe and secure journey to and from Mysore International School.
    </p>
    <a
      href="#"
      className="bg-secondary text-white font-semibold py-3 px-10 rounded-md hover:bg-primary hover:text-secondary transition duration-300"
    >
      Enroll Now
    </a>
  </div>
</div>
      <Footer />
    </div>
  
  );
};

export default TransportPage;