const express=require('express');
const { registerUser, loginUser, userQuery, admissionEnquiry } = require('../controllers/UserController');
const router=express.Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/query").post(userQuery)
router.route("/admissionquery").post(admissionEnquiry)

module.exports=router

