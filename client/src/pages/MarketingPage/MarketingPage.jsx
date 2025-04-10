import React, { useEffect } from 'react';
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
  useEffect(() => {
    // Load Appointio script
    const appointioScript = document.createElement('script');
    appointioScript.src = 'https://link.appointio.co/js/form_embed.js';
    appointioScript.async = true;
    document.body.appendChild(appointioScript);

    // Clean up on component unmount
    return () => {
      if (document.body.contains(appointioScript)) {
        document.body.removeChild(appointioScript);
      }
    };
  }, []);

  return (
    <div>
      {/* Sticky Admission Notice */}
      <StickyAdmission />

      {/* Main Content */}
      <div>
        <section id="header">
          <Header />
        </section>

        <section id="hero">
          <HeroSection />
        </section>

        <section id="why-choose-us">
          <WhyChooseUs />
        </section>

        <section id="awards">
          <AwardsSection />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section id="sports">
          <SportsSection />
        </section>

        <section id="campus-tour">
          <CampusTour />
        </section>

        <section id="lead-capture">
          {/* Replace or augment your existing LeadCaptureForm with Appointio */}
          <div className="appointio-container">
            <iframe
              src="https://link.appointio.co/widget/form/JJgfh0PMwBxRHUhuJRU8"
              style={{width:'100%', height:'676px', border:'none', borderRadius:'3px'}}
              id="inline-JJgfh0PMwBxRHUhuJRU8" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Landing Page form - MIS"
              data-layout-iframe-id="inline-JJgfh0PMwBxRHUhuJRU8"
              data-form-id="JJgfh0PMwBxRHUhuJRU8"
              title="Landing Page form - MIS"
            ></iframe>
          </div>
          {/* You can keep or remove your original LeadCaptureForm component */}
          <LeadCaptureForm />
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MarketingPage;