const express = require('express');
const projectController = require('../controllers/project.controller');
const authMiddlewares = require('../middlewares/request.validator');
const projectMiddlewares = require('../middlewares/project.validator');
const projectRouter = express.Router();

projectRouter.get('/', authMiddlewares.reqAuthValidator, projectController.listProjects);
projectRouter.post(
  '/',
  authMiddlewares.reqAuthValidator,
  projectMiddlewares.validateProject,
  projectController.createProject
);
projectRouter.get('/:id', authMiddlewares.reqAuthValidator, projectController.getWholeProject);
projectRouter.delete('/:id', authMiddlewares.reqAuthValidator, projectController.deleteProject);
projectRouter.put(
  '/:id',
  authMiddlewares.reqAuthValidator,
  projectMiddlewares.validateProject,
  projectController.updateProject
);

module.exports = projectRouter;
