const roleFeatureController = require('../controllers/role-feature.controller');
const roleFeatureRouter = require('express').Router();
const authMiddlewares = require('../middlewares/okta-auth.validator');

roleFeatureRouter.get('/', authMiddlewares.validateToken, roleFeatureController.getRoles);
roleFeatureRouter.get('/:roleId', authMiddlewares.validateToken, roleFeatureController.getRole);

module.exports = roleFeatureRouter;
