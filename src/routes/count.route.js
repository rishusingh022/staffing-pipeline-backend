const countRouter = require('express').Router();
const projectController = require('../controllers/project.controller');
const userController = require('../controllers/user.controller');
const caseStudyController = require('../controllers/case-study.controller');
const { validateToken } = require('../middlewares/okta-auth.validator');
const { checkRolePermission } = require('../middlewares/role-permission.validator');
const allFeatures = require('../utils/features');

countRouter.get(
  '/projects',
  validateToken,
  checkRolePermission(allFeatures.read_engagement),
  projectController.getEngagementsCount
);

countRouter.get(
  '/case-studies',
  validateToken,
  checkRolePermission(allFeatures.read_case_study),
  caseStudyController.getCaseStudiesCount
);

countRouter.get('/users', validateToken, checkRolePermission(allFeatures.read_user), userController.getUsersCount);

module.exports = countRouter;
