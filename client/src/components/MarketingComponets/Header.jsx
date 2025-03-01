// Header.jsx
import React, { useState } from 'react';
import { Menu, X, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import logo from "../../assets/MarketingAssets/Logos/PrimaryLogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Awards', href: '#awards' },
    { name: 'Sports', href: '#sports' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Campus Tour', href: '#campus-tour' },
  ];

  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <header className="py-4 fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img
                src={logo}
                alt="Mysore International School Logo"
                className="h-20 w-auto"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex items-center space-x-8"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-[#8A2E88] transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>

            {/* Register Today Button */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden md:flex items-center"
            >
              <Button
                className="flex items-center gap-2 bg-[#E76F51] hover:bg-[#E76F51]/90 text-white px-6 py-3"
                onClick={() => window.location.href = '#lead-capture'}
              >
                <UserPlus className="w-4 h-4" />
                Register Today
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Full Screen Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 md:hidden pt-24 pb-10 px-6 flex flex-col justify-between"
          >
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col space-y-8"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  variants={itemVariants}
                  className="text-2xl font-medium text-gray-800 hover:text-[#8A2E88] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div variants={itemVariants} className="pt-8">
                <Button
                  className="w-full flex items-center justify-center gap-2 bg-[#E76F51] hover:bg-[#E76F51]/90 text-white px-6 py-4"
                  onClick={() => {
                    window.location.href = '#lead-capture';
                    setIsMenuOpen(false);
                  }}
                >
                  <UserPlus className="w-5 h-5" />
                  Register Today
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Copyright in mobile menu */}
            <motion.div 
              variants={itemVariants}
              className="text-center text-gray-500 text-sm mt-auto"
            >
              © {currentYear} Mysore International School. All rights reserved.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main content space compensation */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;