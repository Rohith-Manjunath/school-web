const Payment = require("../models/PaymentSchema");
const catchAsyncError = require("../utils/catchAsyncError");
const instance = require("./razorPay");
const crypto = require('crypto');
const Razorpay = require('razorpay');

exports.payment=catchAsyncError(async(req,res,next)=>{


      const options={
            amount: req.body.amount,
            currency:"INR",
      }

      const order=await instance.orders.create(options)
      console.log(order)
      res.status(201).json({
            success:true,
            order
      })


})



exports.paymentVerification = catchAsyncError(async (req, res, next) => {
  const {
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
  } = req.body;

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  const body = razorpay_order_id + '|' + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest('hex');

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {

      await Payment.create({
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
      })

      res.redirect(`https://www.mysoreinternationalschool.com/paymentSuccess?reference=${razorpay_payment_id}`)

    return res.status(200).json({
      success: true,
      message: 'Payment verification successful',
    });
  } else {
    return res.status(400).json({
      success: false,
      message: 'Payment verification failed',
    });
  }
});