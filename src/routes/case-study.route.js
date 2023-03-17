const express = require('express');

const authMiddlewares = require('../middlewares/request.validator');
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
  authMiddlewares.reqAuthValidator,
  caseStudyValidator.caseStudyIdValidator,
  caseStudyValidator.updateCaseStudyBodyValidator,
  updateCaseStudy
);
router.delete('/:id', authMiddlewares.reqAuthValidator, caseStudyValidator.caseStudyIdValidator, deleteCaseStudy);
router.get('/:id', authMiddlewares.reqAuthValidator, getCaseStudy);
router.get('/', authMiddlewares.reqAuthValidator, listCaseStudies);

router.post('/', authMiddlewares.reqAuthValidator, caseStudyValidator.createCaseStudyValidator, createCaseStudy);

module.exports = router;
