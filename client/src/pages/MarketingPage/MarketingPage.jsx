// MarketingPage.jsx
import React from 'react';
import Header from "../../components/MarketingComponets/Header"
import HeroSection from '../../components/MarketingComponets/HeroSection';
import WhyChooseUs from '../../components/MarketingComponets/WhyChooseUs';
import SportsSection from '../../components/MarketingComponets/SportsSection';
import TestimonialsSection from '../../components/MarketingComponets/TestimonialsSection';
import AwardsSection from '../../components/MarketingComponets/AwardsSection';
import CampusTour from '../../components/MarketingComponets/CampusTour';
import LeadCaptureForm from '../../components/MarketingComponets/LeadCaptureForm';
import Footer from '../../components/MarketingComponets/Footer';
import StickyAdmission from '../../components/MarketingComponets/StickyAdmission';

const MarketingPage = () => {
  return (
    <div >
      {/* Sticky Admission Notice */}
      <StickyAdmission />

      {/* Main Content */}
      <div >
        <section id="header">
          <Header />
        </section>

        <section id="hero" >
          <HeroSection />
        </section>

        <section id="why-choose-us" >
          <WhyChooseUs />
        </section>


        <section id="awards" >
          <AwardsSection />
        </section>

        <section id="testimonials" >
          <TestimonialsSection />
        </section>

        <section id="sports" >
        <SportsSection />
        </section>

        <section id="campus-tour" >
          <CampusTour />
        </section>

        <section id="lead-capture" >
          <LeadCaptureForm />
        </section>
       
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MarketingPage;