const express=require('express');
const { registerUser, loginUser, userQuery, admissionEnquiry, me, logout, parentsEnroll, scheduleVisit, getAllEventsForUsers, getAllNewsForUsers, updatePassword,Home, updateProfilePic } = require('../controllers/UserController');
const { isAuthenticatedUser, isAdmin } = require('../middlewares/isAuthenticated');
const router=express.Router();

router.route("/").get(Home)
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/me").get(isAuthenticatedUser,me)
router.route("/logout").post(isAuthenticatedUser,logout)
router.route("/query").post(userQuery)
router.route("/parentsEnroll").post(parentsEnroll)
router.route("/admissionquery").post(admissionEnquiry)
router.route("/events").get(getAllEventsForUsers);
router.route("/news").get(getAllNewsForUsers);
router.route("/schedule").post(scheduleVisit);
router.route("/updatePassword").put(isAuthenticatedUser,isAdmin, updatePassword);
router.route("/updateProfilePic").put(isAuthenticatedUser,isAdmin, updateProfilePic);


module.exports=router

