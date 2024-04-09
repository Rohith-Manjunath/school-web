import React from 'react';

const AdmissionProces = () => {
  return (
    <section className="bg-primary py-16 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Admission Process</h2>
        <p className="text-gray-600 mb-12">
          Admissions at Mysore international School is as per the following procedure.
        </p>

        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-secondary text-white py-8 px-6">
              <h3 className="text-2xl font-bold mb-4">1. Filling Application Form</h3>
              <p className="text-lg">At Our Campus</p>
            </div>
            <div className="md:w-1/2 bg-gray-100 py-8 px-6">
              <h3 className="text-2xl font-bold mb-4">2. Attend Counselling</h3>
              <p className="text-lg">At Our Campus</p>
            </div>
          </div>
          <div className="md:flex">
            <div className="md:w-1/2 bg-gray-100 py-8 px-6">
              <h3 className="text-2xl font-bold mb-4">3. Confirmation of Admission</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li className="mb-2">Campus Tour</li>
                <li className="mb-2">Online Test</li>
                <li className="mb-2">Parents & Students Interaction</li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-secondary text-white py-8 px-6">
              <h3 className="text-2xl font-bold mb-4">4. Registration of Admission</h3>
              <p className="text-lg"> Congratulations! Your ward is in Mysore international school!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProces;