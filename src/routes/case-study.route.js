const express = require('express');

const authMiddlewares = require('../middlewares/okta-auth.validator');
const caseStudyValidator = require('../middlewares/case-study.validator');
const {
  createCaseStudy,
  updateCaseStudy,
  deleteCaseStudy,
  getCaseStudy,
  listCaseStudies,
} = require('../controllers/case-study.controller');
const { checkRolePermission } = require('../middlewares/role-permission.validator');
const allFeatures = require('../utils/features');

const router = express.Router();

router.put(
  '/:id',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.edit_case_study),
  caseStudyValidator.caseStudyIdValidator,
  caseStudyValidator.updateCaseStudyBodyValidator,
  updateCaseStudy
);
router.delete(
  '/:id',
  checkRolePermission(allFeatures.delete_case_study),
  authMiddlewares.validateToken,
  caseStudyValidator.caseStudyIdValidator,
  deleteCaseStudy
);
router.get('/:id', checkRolePermission(allFeatures.read_case_study), authMiddlewares.validateToken, getCaseStudy);
router.get('/', checkRolePermission(allFeatures.read_case_study), authMiddlewares.validateToken, listCaseStudies);

router.post(
  '/',
  checkRolePermission(allFeatures.create_case_study),
  authMiddlewares.validateToken,
  caseStudyValidator.createCaseStudyValidator,
  createCaseStudy
);

module.exports = router;
