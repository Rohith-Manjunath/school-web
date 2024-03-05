const express=require('express');
const { registerUser, loginUser, userQuery } = require('../controllers/UserController');
const router=express.Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/query").post(userQuery)

module.exports=router

