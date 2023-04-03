const express = require('express');
const validator = require('../middlewares/staffing-detail.validator');
const staffingRouter = express.Router();
const authMiddlewares = require('../middlewares/okta-auth.validator');
const staffingDetailsController = require('../controllers/staffing-details.controller');
const { checkRolePermission } = require('../middlewares/role-permission.validator');
const allFeatures = require('../utils/features');
// const authMiddlewares = require('../middlewares/request.validator');
staffingRouter.get(
  '/user-current-engagements/:userId',
  checkRolePermission(allFeatures.read_engagement),
  staffingDetailsController.getUserCurrentEngagements
);

staffingRouter.get(
  '/all-users/:engagementId',
  checkRolePermission(allFeatures.read_engagement),
  staffingDetailsController.getUsersInvolvedInEngagement
);
staffingRouter.get(
  '/current-users/:engagementId',
  checkRolePermission(allFeatures.read_users_in_engagement),
  staffingDetailsController.getUsersInEngagement
);
staffingRouter.get(
  '/user-past-engagements/:userId',
  checkRolePermission(allFeatures.read_users_in_engagement),
  staffingDetailsController.getUserPastEngagements
);

staffingRouter.post(
  '/',
  checkRolePermission(allFeatures.create_staffing_entry),
  authMiddlewares.validateToken,
  validator,
  staffingDetailsController.createStaffingEntry
);

module.exports = staffingRouter;
