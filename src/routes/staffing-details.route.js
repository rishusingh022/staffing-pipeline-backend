const express = require('express');
const validator = require('../middlewares/staffing-detail.validator');
const staffingRouter = express.Router();
const authMiddlewares = require('../middlewares/okta-auth.validator');
const staffingDetailsController = require('../controllers/staffing-details.controller');
// const authMiddlewares = require('../middlewares/request.validator');
staffingRouter.get('/user-current-engagements/:userId', staffingDetailsController.getUserCurrentEngagements);

staffingRouter.get('/all-users/:engagementId', staffingDetailsController.getUsersInvolvedInEngagement);
staffingRouter.get('/current-users/:engagementId', staffingDetailsController.getUsersInEngagement);
staffingRouter.get('/user-past-engagements/:userId', staffingDetailsController.getUserPastEngagements);

staffingRouter.post('/', authMiddlewares.validateToken, validator, staffingDetailsController.createStaffingEntry);

module.exports = staffingRouter;
