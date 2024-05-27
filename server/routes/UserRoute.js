const express=require('express');
const { registerUser, loginUser, userQuery, admissionEnquiry, me, logout, parentsEnroll, scheduleVisit, getAllEventsForUsers, getAllNewsForUsers } = require('../controllers/UserController');
const { isAuthenticatedUser, isAdmin } = require('../middlewares/isAuthenticated');
const router=express.Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser,isAdmin)
router.route("/me").get(isAuthenticatedUser,me)
router.route("/logout").post(isAuthenticatedUser,logout)
router.route("/query").post(userQuery)
router.route("/parentsEnroll").post(parentsEnroll)
router.route("/admissionquery").post(admissionEnquiry)
router.route("/events").get(getAllEventsForUsers);
router.route("/news").get(getAllNewsForUsers);
router.route("/schedule").post(scheduleVisit);


module.exports=router

