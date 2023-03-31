const express = require('express');

const requestValidator = require('../middlewares/request.validator');
const schemas = require('../middlewares/schemas.validator');
const { updateIdValidator, updateBodyValidator } = require('../middlewares/user.validator');

const userControllers = require('../controllers/user.controller');
const authMiddlewares = require('../middlewares/okta-auth.validator');
const { checkRolePermission } = require('../middlewares/role-permission.validator');
const allFeatures = require('../utils/features');
const router = express.Router();

router.get('/users', authMiddlewares.validateToken, userControllers.listUsers);
router.get(
  '/users/:userId',
  authMiddlewares.validateToken,
  requestValidator.validate(schemas.userIdSchema, 'params'),
  userControllers.getUser
);

router.post('/users', authMiddlewares.validateToken, userControllers.createUser);
router.delete('/users/:id', authMiddlewares.validateToken, userControllers.deleteUser);
router.put(
  '/users/:id',
  authMiddlewares.validateToken,
  updateIdValidator,
  updateBodyValidator,
  userControllers.updateUser
);
router.get(
  '/user-role',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.read_case_study),
  userControllers.getUserRole
);

module.exports = router;
