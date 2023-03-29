const countRouter = require('express').Router();
const projectController = require('../controllers/project.controller');
const userController = require('../controllers/user.controller');
const caseStudyController = require('../controllers/case-study.controller');
const { validateToken } = require('../middlewares/okta-auth.validator');
countRouter.get('/projects', validateToken, projectController.getEngagementsCount);

countRouter.get('/case-studies', validateToken, caseStudyController.getCaseStudiesCount);

countRouter.get('/users', validateToken, userController.getUsersCount);

module.exports = countRouter;
