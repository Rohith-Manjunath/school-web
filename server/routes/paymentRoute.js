const express=require("express");
const { payment ,paymentVerification} = require("../controllers/paymentController");
const router=express.Router()


router.route("/").post(payment)
router.route("/paymentVerification").post(paymentVerification)

module.exports=router