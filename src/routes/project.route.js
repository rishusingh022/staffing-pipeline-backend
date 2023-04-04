const express = require('express');
const projectController = require('../controllers/project.controller');
const authMiddlewares = require('../middlewares/okta-auth.validator');
const projectMiddlewares = require('../middlewares/project.validator');
const { checkRolePermission } = require('../middlewares/role-permission.validator');
const allFeatures = require('../utils/features');
const projectRouter = express.Router();

projectRouter.get(
  '/',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.read_engagement),
  projectController.listProjects
);
projectRouter.post(
  '/',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.create_engagement),
  projectMiddlewares.validateProject,
  projectController.createProject
);
projectRouter.get(
  '/sectors',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.read_engagement),
  projectController.listSectors
);
projectRouter.post(
  '/projects-monthly',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.read_engagement),
  projectController.getProjectsMonthwise
);
projectRouter.get(
  '/:id',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.read_engagement),
  projectController.getWholeProject
);
projectRouter.delete(
  '/:id',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.delete_engagement),
  projectController.deleteProject
);
projectRouter.put(
  '/:id',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.edit_engagement),
  projectMiddlewares.validateProject,
  projectController.updateProject
);

module.exports = projectRouter;
