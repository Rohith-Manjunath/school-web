import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import transportImage1 from '../../assets/Images/AcademicsImages/FacultyImages/chairman.jpg';
import transportImage2 from '../../assets/Images/AcademicsImages/FacultyImages/chairman.jpg';
import transportImage3 from '../../assets/Images/AcademicsImages/FacultyImages/chairman.jpg';
import transportImage4 from '../../assets/Images/AcademicsImages/FacultyImages/chairman.jpg';

const TransportPage = () => {
  return (
    <div className="section about-cbe">
      <div className="fullWid">
        <div className="image">
          <img src={transportImage1} alt="purchase guide" />
        </div>
        <div className="section-bottom-shape fill-color-gray">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100">
            <path
              className="elementor-shape-fill"
              d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"
            ></path>
          </svg>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-lg-12 col-12 order-lg-2 p-0">
          <div className="privacy-policy-wrapper">
            <div className="content">
              <div className="top py-5">
                <div className="container">
                  <div className="row">
                    <div className="section-title text-center mb-15" data-aos="fade-up">
                      <h2 className="title fz-48">
                        Transport <span></span>
                      </h2>
                    </div>

                    <div className="col-md-12 pl-5">
                      <p>
                        At Manchester International School, the safety and well-being of our students are our top
                        priorities. We are proud to offer transportation services equipped with cutting-edge tracking
                        technology to provide parents and guardians with real-time information and peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="top py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 pr-5">
                      <div className="stage-one">
                        <h3 className="titless">
                          Key Features of Our Transportation Services <span>with Tracking Facility:</span>
                        </h3>
                        <p>
                          GPS Tracking: Our entire transportation fleet is outfitted with state-of-the-art GPS tracking
                          systems. This technology allows us to monitor the precise location of each vehicle at all
                          times. Parents and school authorities can access this information through a secure and
                          user-friendly app or website.
                        </p>
                      </div>
                      <div className="stage-one">
                        <h3 className="titless">
                          Real-Time <span> Updates: </span>
                        </h3>
                        <p>
                          Parents and guardians receive real-time updates on the whereabouts of the school bus or van
                          transporting their child. This includes information about departure times, estimated arrival
                          times, and any unexpected delays. You can stay informed and plan accordingly.
                        </p>
                      </div>
                      <div className="stage-one">
                        <h3 className="titless">Geofencing</h3>
                        <p>
                          Our GPS tracking system includes geofencing capabilities. Geofencing allows us to define
                          specific geographical boundaries for each route. If a vehicle deviates from its designated route
                          or enters or exits restricted areas, immediate alerts are sent to the school authorities and
                          parents, ensuring the safety of our students.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img src={transportImage2} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="top py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <img src={transportImage3} alt="" />
                    </div>
                    <div className="col-md-8 pl-5">
                      <div className="stage-one">
                        <h3 className="titless">
                          Driver <span>Behavior Monitoring: </span>
                        </h3>
                        <p>
                          Our tracking system also monitors driver behavior. This includes monitoring speed, sudden
                          stops, and other driving patterns. Any deviations from safe driving practices are flagged for
                          immediate attention and corrective action.
                        </p>
                      </div>
                      <div className="stage-one">
                        <h3 className="titless">
                          Emergency <span>Alerts: </span>
                        </h3>
                        <p>
                          In the event of an emergency or unforeseen circumstances, our transportation system allows for
                          immediate communication between drivers, school authorities, and parents. This ensures swift
                          response and coordination during critical situations.
                        </p>
                      </div>
                      <div className="stage-one">
                        <h3 className="titless">
                          Parent <span>Access: </span>
                        </h3>
                        <p>
                          Parents and guardians have secure access to the tracking system through a dedicated app or
                          website. This user-friendly platform provides real-time information, route history, and
                          notifications about their child's transportation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="top py-5 bg-dif">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 pr-5">
                      <div className="stage-one">
                        <h3 className="titless">Safety <span>Drills</span></h3>
                        <p>
                          To enhance safety awareness, we conduct regular safety drills with students to educate them on
                          proper behavior during transportation and emergency procedures.
                        </p>
                      </div>
                      <div className="stage-one">
                        <h3 className="titless">Transparency</h3>
                        <p>
                          We believe in transparency and open communication. Any concerns or inquiries related to
                          transportation can be easily addressed through the tracking system, ensuring a smooth and
                          responsive communication channel between parents and school authorities.
                        </p>
                        <p>
                          Our transportation services with tracking facilities are designed to provide the utmost safety
                          and convenience to both students and their families. We understand that trust and peace of mind
                          are essential when it comes to your child's transportation, and our commitment to these values
                          is reflected in our advanced tracking technology. Join us in ensuring your child's safe and
                          secure journey to and from Manchester International School.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img src={transportImage4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportPage
