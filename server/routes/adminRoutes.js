const express=require("express")
const { postEvent, deleteEvent, getAllEvents, getUserDetails, updateUser, getAllUsers, deleteUser, updateEvent, getSingleEvent } = require("../controllers/AdminController")
const { isAuthenticatedUser, isAdmin } = require("../middlewares/isAuthenticated")
const router=express.Router()

router.route("/postEvent").post(isAuthenticatedUser,isAdmin, postEvent);
router.route("/event/:id").delete(isAuthenticatedUser,isAdmin, deleteEvent).put(isAuthenticatedUser,isAdmin, updateEvent).get(isAuthenticatedUser,isAdmin, getSingleEvent)
router.route("/events").get(isAuthenticatedUser,isAdmin, getAllEvents);
router.route("/user/:userId").get(isAuthenticatedUser,isAdmin, getUserDetails).put(isAuthenticatedUser,isAdmin, updateUser).delete(isAuthenticatedUser,isAdmin,deleteUser)
router.route("/users").get(isAuthenticatedUser,isAdmin, getAllUsers)

module.exports = router