// Footer.jsx
import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

import logo from "../../assets/MarketingAssets/images/logowhite.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // No social links

  return (
    <footer className="bg-[#8A2E88] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* School Info */}
          <div className="space-y-4">
            <img 
              src={logo}
              alt="Mysore International School" 
              className="h-28 w-auto"
            />
            <p className="text-gray-300">
              Providing world-class education and shaping future leaders through academic excellence,
              sports, and character development.
            </p>
            {/* Social media section removed */}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F4A261] flex-shrink-0" />
                <p className="text-gray-300">
                Mysore International School # 92/1-5,<br />
                   HD Kote Road, Rayanakere Post, SH 33, Karnataka 570008
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F4A261]" />
                <p className="text-gray-300">+91 8884 300 400</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F4A261]" />
                <p className="text-gray-300">admissions@mysoreinternationalschool.com</p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Friday:</p>
              <p className="font-semibold">8:00 AM - 4:00 PM</p>
              <p>Saturday:</p>
              <p className="font-semibold">8:00 AM - 12:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} Mysore International School. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-300">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;