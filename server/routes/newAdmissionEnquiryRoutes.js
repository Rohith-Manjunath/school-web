const express = require('express');
const router = express.Router();
const {submitForm} = require('../controllers/NewAdmissionEnquiry')
router.post('/',submitForm)
module.exports = router;