const express=require('express');
const { registerUser, loginUser, userQuery, admissionEnquiry, me, logout } = require('../controllers/UserController');
const { isAuthenticatedUser } = require('../middlewares/isAuthenticated');
const router=express.Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/me").get(isAuthenticatedUser,me)
router.route("/logout").post(isAuthenticatedUser,logout)
router.route("/query").post(userQuery)
router.route("/admissionquery").post(admissionEnquiry)

module.exports=router

