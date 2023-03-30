const metricsRouter = require('express').Router();
const authMiddlewares = require('./../middlewares/okta-auth.validator');
const staffingDetailsController = require('../controllers/staffing-details.controller');
const projectController = require('./../controllers/project.controller');
const userController = require('./../controllers/user.controller');

metricsRouter.get('/staffing/users', staffingDetailsController.getCurrentStaffingDetails);
metricsRouter.get('/projects', authMiddlewares.validateToken, projectController.getProjectsInMonths);
metricsRouter.get('/engagementStatus', projectController.getEngagementStatus);
metricsRouter.get('/users', authMiddlewares.validateToken, userController.getUserMetrics);

module.exports = metricsRouter;
