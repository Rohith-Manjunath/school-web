// LeadCaptureForm.jsx
import React, { useState } from 'react';
import parent from "../../assets/MarketingAssets/images/parent.png";
import { 
  Rocket, 
  Send, 
  AlertCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  UserCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Card';
import { Input } from './Input';
import { Label } from './Label';
import { Alert, AlertDescription } from './Alert';
import service from '../../marketingservices/services/service';
import { useNavigate } from 'react-router-dom';
const LeadCaptureForm = () => {
  const [form, setForm] = useState({
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    referenceNumber: '',
    childName: '',
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  const [formStatus, setFormStatus] = useState({
    isSubmitted: false
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGradeChange = (value) => {
    setForm(prev => ({
      ...prev,
      grade: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    
    if (form.parentName === '' || form.email === '' || form.phone === '' || form.grade === '' || form.childName === '') {
      setError('All fields are required');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    try {
      setLoading(true);
      const referenceNumber = `MIS-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
      form.referenceNumber = referenceNumber;
      // Make API call
      await service.submitForm(form);
      
      // Handle success
      setShowSuccess(true);
      setForm({
        parentName: '',
        email: '',
        phone: '',
        grade: '',
        childName:''
      });
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 1000);
      navigate('/Thankyou', { 
        state: { referenceNumber }
      });
    } catch (err) {
      // Handle error
      setError(err.response?.data?.err || 'Failed to submit form. Please try again.');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    } finally {
      setLoading(false);
    }
    
  };

  const grades = [
    "1","2","3","4","5","6","7","8","9","10"
  ];

  const benefits = [
    "World-class facilities with modern infrastructure",
    "Experienced faculty dedicated to excellence",
    "Balanced focus on academics, sports & leadership",
    "Safe and nurturing environment for growth",
    "Limited seats ensure personalized attention"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="lead-capture" className="bg-white py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center bg-[#8A2E88]/10 px-6 py-2 rounded-full mb-2">
            <Rocket className="w-5 h-5 text-[#8A2E88] mr-2" />
            <span className="text-[#8A2E88] font-semibold">Limited Seats Available</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#264653]">
            Secure Your Child's Spot at<br />Mysore International School!
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form & our admissions team will contact you shortly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl rounded-xl overflow-hidden border-0">
              <div className="h-2 bg-gradient-to-r from-[#8A2E88] to-[#E76F51]"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-[#264653]">Admission Enquiry</CardTitle>
                <CardDescription className="text-base">
                  Limited seats available for Academic Year 2025-26
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Success message */}
                {showSuccess && (
                  <Alert className="mb-4 bg-green-50 border border-green-200 text-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <AlertDescription>
                      Thank you for your interest! Our admissions team will contact you shortly.
                    </AlertDescription>
                  </Alert>
                )}

                {/* Error message */}
                {showError && (
                  <Alert className="mb-4 bg-red-50 border border-red-200 text-red-800">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                    <AlertDescription>
                      {error}
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="parentName" className="text-[#264653] font-medium">
                        🔹 Parent's Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="parentName"
                        name="parentName"
                        value={form.parentName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="focus:border-[#8A2E88] focus:ring-[#8A2E88]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#264653] font-medium">
                        🔹 Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="focus:border-[#8A2E88] focus:ring-[#8A2E88]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#264653] font-medium">
                        🔹 Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="focus:border-[#8A2E88] focus:ring-[#8A2E88]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="childName" className="text-[#264653] font-medium">
                        🔹 Children Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="childName"
                        name="childName"
                        type="text"
                        value={form.childName}
                        onChange={handleInputChange}
                        placeholder="Enter your child's name"
                        className="focus:border-[#8A2E88] focus:ring-[#8A2E88]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="childGrade" className="text-[#264653] font-medium">
                        🔹 Child's Grade Applying For <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="grade"
                        name="grade"
                        value={form.grade}
                        onChange={(e) => handleGradeChange(e.target.value)}
                        className="w-full rounded-md border border-gray-300 p-2 focus:border-[#8A2E88] focus:ring-[#8A2E88] focus:outline-none"
                        required
                      >
                        <option value="" disabled>Select grade</option>
                        {grades.map((grade) => (
                          <option key={grade} value={grade.toLowerCase()}>
                            {grade}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        disabled={loading}
                        className={`bg-[#E76F51] hover:bg-[#E76F51]/90 text-white w-full text-lg py-6 rounded-lg shadow-md ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Submit & Get More Info
                          </>
                        )}
                      </Button>
                    </motion.div>
                    
                    <p className="text-center text-[#E76F51] font-semibold mt-4">
                      📢 "Seats are filling fast! Secure your child's future today!"
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Cards - Now displayed vertically */}
            <motion.div 
              className="grid grid-cols-1 gap-4 mt-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gray-50">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-[#8A2E88]/10 p-2 rounded-full">
                      <Clock className="w-5 h-5 text-[#8A2E88]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#264653] mb-1">Visit Us</h3>
                      <p className="text-gray-600 text-sm">
                        Monday to Saturday<br />
                        9:00 AM - 4:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gray-50">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-[#8A2E88]/10 p-2 rounded-full">
                      <Phone className="w-5 h-5 text-[#8A2E88]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#264653] mb-1">Call Us</h3>
                      <p className="text-gray-600 text-sm">
                        0821 2971010<br />
                        +91 8884 300 400

                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gray-50">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-[#8A2E88]/10 p-2 rounded-full">
                      <Mail className="w-5 h-5 text-[#8A2E88]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#264653] mb-1">Email Us</h3>
                      <p className="text-gray-600 text-sm">
                      admissions@mysoreinternationalschool.com <br />
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Info & Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Why Choose Us */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden bg-gradient-to-br from-[#8A2E88] to-[#6A1B67] text-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-full">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-xl">Why Choose Mysore International School?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
              <div className="bg-[#8A2E88]/40 px-6 py-4">
                <p className="text-sm text-purple-100">
                  Join the 1000+ families who've trusted us with their children's education
                </p>
              </div>
            </Card>
            
            {/* Google Maps Embed - Replaced static image */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-3">
                  <div className="bg-[#8A2E88]/10 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-[#8A2E88]" />
                  </div>
                  <CardTitle className="text-xl text-[#264653]">Find Us Here</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <div className="aspect-[4/3] rounded-b-xl overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15575.25982728258!2d76.5866804!3d12.2290059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf644f7358cc0d%3A0xe4fb32672e467b68!2sMysore%20International%20School!5e0!3m2!1sen!2sin!4v1708608743857!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mysore International School Google Map"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;