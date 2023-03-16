const router = require('express').Router();
const authMiddlewares = require('../middlewares/request.validator');
const searchControllers = require('../controllers/search.controller');
const searchValidator = require('../middlewares/search.validator');

router.get(
  '/users',
  searchValidator.validateSeachQuery,
  authMiddlewares.reqAuthValidator,
  searchControllers.getUsersByName
);

router.get(
  '/projects',
  searchValidator.validateSeachQuery,
  authMiddlewares.reqAuthValidator,
  searchControllers.getProjectsByName
);

router.get(
  '/case-studies',
  searchValidator.validateSeachQuery,
  authMiddlewares.reqAuthValidator,
  searchControllers.getCaseStudyByName
);

module.exports = router;
