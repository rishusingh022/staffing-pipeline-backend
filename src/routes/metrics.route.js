const metricsRouter = require('express').Router();
const authMiddlewares = require('./../middlewares/okta-auth.validator');
const staffingDetailsController = require('../controllers/staffing-details.controller');
const projectController = require('./../controllers/project.controller');
const userController = require('./../controllers/user.controller');
const { checkRolePermission } = require('../middlewares/role-permission.validator');
const allFeatures = require('../utils/features');

metricsRouter.get(
  '/staffing/users',
  checkRolePermission(allFeatures.metrics),
  staffingDetailsController.getCurrentStaffingDetails
);
metricsRouter.get(
  '/projects',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.read_metrics),
  projectController.getProjectsInMonths
);
metricsRouter.get('/engagementStatus', checkRolePermission(allFeatures.metrics), projectController.getEngagementStatus);
metricsRouter.get(
  '/users',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.read_metrics),
  userController.getUserMetrics
);

module.exports = metricsRouter;
