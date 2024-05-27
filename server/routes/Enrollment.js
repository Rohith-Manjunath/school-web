const express = require("express");
const { FormController } = require("../controllers/EnrollmentController");
const { parentsEnroll } = require("../controllers/UserController");
const router = express.Router();

router.route("/enroll").post(FormController);
router.route("/parentsenroll").post(parentsEnroll);

module.exports = router;
