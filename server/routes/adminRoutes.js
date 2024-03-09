const express=require("express")
const { postEvent, deleteEvent, getAllEvents } = require("../controllers/AdminController")
const { isAuthenticatedUser, isAdmin } = require("../middlewares/isAuthenticated")
const router=express.Router()

router.route("/postEvent").post(isAuthenticatedUser,isAdmin, postEvent);
router.route("/event/:id").delete(isAuthenticatedUser,isAdmin, deleteEvent);
router.route("/events").get(isAuthenticatedUser,isAdmin, getAllEvents);

module.exports = router