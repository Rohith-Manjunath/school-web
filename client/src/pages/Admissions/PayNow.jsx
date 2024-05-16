import React from 'react';
import razorpayImage from "../../assets/Images/HomeImages/razorpay.png";
import { useState } from 'react';

const PayNow = () => {

  const [loading,setLoading]=useState(false)

        const checkout=async()=>{

          setLoading(true)

            const keyData=await fetch(`https://school-web-50fi.onrender.com/api/getKey`,{
                  method:"GET",
                  headers:{
                        "Content-Type":"application/json"
                  },
            })


            let data=await fetch(`https://school-web-50fi.onrender.com/api/payment`,{
                  method:"POST",
                  headers:{
                        "Content-Type":"application/json",    
                  },  
                  body:JSON.stringify({amount:5000})

            })



            data=await data.json()

            const {order}=data;

const options = {
    "key": keyData?.key, // Enter the Key ID generated from the Dashboard
    "amount": order?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Rohith",
    "description": "Test Transaction",
    "image": "https://avatars.githubusercontent.com/u/130335161?v=4",
    "order_id": order?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://school-web-50fi.onrender.com/api/payment/paymentVerification",
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};


var razor = new window.Razorpay(options);
razor.open();

setLoading(false)



      }

  return (
    <section className="bg-primary py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="bg-white border border-secondary shadow-lg shadow-secondary rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-full bg-secondary text-white py-12 px-8">
            <h2 className="text-3xl font-bold mb-4">Pay Your Fees Now</h2>
            <p className="text-lg mb-8">
              Click the button below to pay your fees and ensure your child's spot in our program.
            </p>
            <button
      onClick={checkout}
      className="bg-primary text-secondary font-bold py-3 px-6 rounded-lg hover:bg-secondary hover:text-primary hover:border hover:border-primary transition-colors duration-300 relative"
      disabled={loading}
    >
      {loading ? (
        <>
          <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-70 rounded-lg">
            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <span className="opacity-0">Pay Now</span>
        </>
      ) : (
        'Pay Now'
      )}
    </button>
          </div>
        </div>
        <div className="px-8 py-6 bg-gray-100">
          <h3 className="text-2xl font-bold mb-4 text-secondary">Why Pay Now?</h3>
          <ul className="list-disc pl-6 text-secondary">
            <li className="mb-2">Secure your child's spot in our program</li>
            <li className="mb-2">Avoid late fees and additional charges</li>
            <li className="mb-2">Enjoy peace of mind knowing your payment is processed</li>
          </ul>
          <p className='flex items-center justify-end gap-4 font-semibold tracking-wide mt-3'>
            <span className='text-[13px] sm:text-[15px]'>Powered by</span>  <img
      src={razorpayImage}
      alt="Razorpay"
      className='w-28 h-16 sm:w-36 sm:h-20 bg-transparent transition-transform transform hover:scale-110 hover:shadow-lg duration-400 hover:cursor-pointer'
    />
          </p>
        </div>
      </div>
    </section>
  );
};

export default PayNow;