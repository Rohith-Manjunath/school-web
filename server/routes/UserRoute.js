const express = require("express");
const { Home, FormController } = require("../controllers/UserController");
const router = express.Router();

router.route("/").get(Home);
router.route("/enroll").post(FormController);

module.exports = router;
