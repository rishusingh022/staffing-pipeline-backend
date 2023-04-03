const router = require('express').Router();
const authMiddlewares = require('../middlewares/okta-auth.validator');
const searchControllers = require('../controllers/search.controller');
const searchValidator = require('../middlewares/search.validator');
const { checkRolePermission } = require('../middlewares/role-permission.validator');
const allFeatures = require('../utils/features');

router.get(
  '/users',
  searchValidator.validateSeachQuery,
  checkRolePermission(allFeatures.search_user),
  authMiddlewares.validateToken,
  searchControllers.getUsersByName
);

router.get(
  '/projects',
  searchValidator.validateSeachQuery,
  checkRolePermission(allFeatures.search_engagement),
  authMiddlewares.validateToken,
  searchControllers.getProjectsByName
);

router.get(
  '/case-studies',
  searchValidator.validateSeachQuery,
  checkRolePermission(allFeatures.search_case_study),
  authMiddlewares.validateToken,
  searchControllers.getCaseStudyByName
);

module.exports = router;
