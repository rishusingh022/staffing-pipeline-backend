
const express = require('express');
const { getPractitioners } = require('../controllers/practitionerController');

const router = express.Router();

router.route('/api/practitioners').get(getPractitioners);


module.exports = router;