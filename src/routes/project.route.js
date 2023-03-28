const express = require('express');
const projectController = require('../controllers/project.controller');
const authMiddlewares = require('../middlewares/okta-auth.validator');
const projectMiddlewares = require('../middlewares/project.validator');
const projectRouter = express.Router();

projectRouter.get('/', authMiddlewares.validateToken, projectController.listProjects);
projectRouter.post(
  '/',
  authMiddlewares.validateToken,
  projectMiddlewares.validateProject,
  projectController.createProject
);
projectRouter.get('/:id', authMiddlewares.validateToken, projectController.getWholeProject);
projectRouter.delete('/:id', authMiddlewares.validateToken, projectController.deleteProject);
projectRouter.put(
  '/:id',
  authMiddlewares.validateToken,
  projectMiddlewares.validateProject,
  projectController.updateProject
);

module.exports = projectRouter;
