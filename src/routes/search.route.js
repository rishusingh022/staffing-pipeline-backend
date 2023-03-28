const router = require('express').Router();
const authMiddlewares = require('../middlewares/okta-auth.validator');
const searchControllers = require('../controllers/search.controller');
const searchValidator = require('../middlewares/search.validator');

router.get(
  '/users',
  searchValidator.validateSeachQuery,
  authMiddlewares.validateToken,
  searchControllers.getUsersByName
);

router.get(
  '/projects',
  searchValidator.validateSeachQuery,
  authMiddlewares.validateToken,
  searchControllers.getProjectsByName
);

router.get(
  '/case-studies',
  searchValidator.validateSeachQuery,
  authMiddlewares.validateToken,
  searchControllers.getCaseStudyByName
);

module.exports = router;
