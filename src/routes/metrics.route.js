const metricsRouter = require('express').Router();
const staffingDetailsController = require('../controllers/staffing-details.controller');

metricsRouter.get('/staffing/users', staffingDetailsController.getCurrentStaffingDetails);

module.exports = metricsRouter;
