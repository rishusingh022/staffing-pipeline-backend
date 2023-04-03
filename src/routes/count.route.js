const countRouter = require('express').Router();
const projectController = require('../controllers/project.controller');
const userController = require('../controllers/user.controller');
const caseStudyController = require('../controllers/case-study.controller');
const { validateToken } = require('../middlewares/okta-auth.validator');
const { checkRolePermission } = require('../middlewares/role-permission.validator');
const allFeatures = require('../utils/features');

countRouter.get(
  '/projects',
  checkRolePermission(allFeatures.read_engagement),
  validateToken,
  projectController.getEngagementsCount
);

countRouter.get(
  '/case-studies',
  checkRolePermission(allFeatures.read_case_study),
  validateToken,
  caseStudyController.getCaseStudiesCount
);

countRouter.get('/users', checkRolePermission(allFeatures.read_user), validateToken, userController.getUsersCount);

module.exports = countRouter;
