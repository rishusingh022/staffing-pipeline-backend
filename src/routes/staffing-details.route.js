const express = require('express');
const validator = require('../middlewares/staffing-detail.validator');
const staffingRouter = express.Router();
const authMiddlewares = require('../middlewares/request.validator');
const staffingDetailsController = require('../controllers/staffing-details.controller');
// const authMiddlewares = require('../middlewares/request.validator');
staffingRouter.get('/user-current-engagements/:userId', staffingDetailsController.getUserCurrentEngagements);

staffingRouter.get('/user-past-engagements/:userId', staffingDetailsController.getUserPastEngagements);

staffingRouter.post('/', authMiddlewares.reqAuthValidator, validator, staffingDetailsController.createStaffingEntry);

module.exports = staffingRouter;
