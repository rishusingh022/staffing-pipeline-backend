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
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.delete_case_study),
  caseStudyValidator.caseStudyIdValidator,
  deleteCaseStudy
);
router.get('/:id', authMiddlewares.validateToken, checkRolePermission(allFeatures.read_case_study), getCaseStudy);
router.get('/', authMiddlewares.validateToken, checkRolePermission(allFeatures.read_case_study), listCaseStudies);

router.post(
  '/',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.create_case_study),
  caseStudyValidator.createCaseStudyValidator,
  createCaseStudy
);

module.exports = router;
