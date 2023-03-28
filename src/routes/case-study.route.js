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

const router = express.Router();

router.put(
  '/:id',
  authMiddlewares.validateToken,
  caseStudyValidator.caseStudyIdValidator,
  caseStudyValidator.updateCaseStudyBodyValidator,
  updateCaseStudy
);
router.delete('/:id', authMiddlewares.validateToken, caseStudyValidator.caseStudyIdValidator, deleteCaseStudy);
router.get('/:id', authMiddlewares.validateToken, getCaseStudy);
router.get('/', authMiddlewares.validateToken, listCaseStudies);

router.post('/', authMiddlewares.validateToken, caseStudyValidator.createCaseStudyValidator, createCaseStudy);

module.exports = router;
