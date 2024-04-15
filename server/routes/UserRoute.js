const express=require('express');
const { registerUser, loginUser, userQuery, admissionEnquiry, me, logout, parentsEnroll } = require('../controllers/UserController');
const { isAuthenticatedUser } = require('../middlewares/isAuthenticated');
const { getAllEvents } = require('../controllers/AdminController');
const router=express.Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/me").get(isAuthenticatedUser,me)
router.route("/logout").post(isAuthenticatedUser,logout)
router.route("/query").post(userQuery)
router.route("/parentsEnroll").post(parentsEnroll)
router.route("/admissionquery").post(admissionEnquiry)
router.route("/events").get(getAllEvents);


module.exports=router

