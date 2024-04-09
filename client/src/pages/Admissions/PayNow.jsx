import React from 'react';
import razorpayImage from "../../assets/Images/HomeImages/razorpay.png";

const PayNow = () => {
  return (
    <section className="bg-primary py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="bg-white border border-secondary shadow-lg shadow-secondary rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-secondary text-white py-12 px-8">
            <h2 className="text-3xl font-bold mb-4">Pay Your Fees Now</h2>
            <p className="text-lg mb-8">
              Click the button below to pay your fees and ensure your child's spot in our program.
            </p>
            <button className="bg-primary text-secondary font-bold py-3 px-6 rounded-lg hover:bg-secondary hover:text-primary hover:border hover:border-primary transition-colors duration-300">
              Pay Now
            </button>
          </div>
          <div className="md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${razorpayImage})` }}></div>
        </div>
        <div className="px-8 py-6 bg-gray-100">
          <h3 className="text-2xl font-bold mb-4 text-secondary">Why Pay Now?</h3>
          <ul className="list-disc pl-6 text-secondary">
            <li className="mb-2">Secure your child's spot in our program</li>
            <li className="mb-2">Avoid late fees and additional charges</li>
            <li className="mb-2">Enjoy peace of mind knowing your payment is processed</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PayNow;