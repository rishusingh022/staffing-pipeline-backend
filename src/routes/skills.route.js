const skillsController = require('../controllers/skills.controller');
const router = require('express').Router();
const skillsValidator = require('../middlewares/skills.validator');
const { checkRolePermission } = require('../middlewares/role-permission.validator');
const allFeatures = require('../utils/features');
const authMiddlewares = require('../middlewares/okta-auth.validator');

router.get(
  '/:id',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.read_skills),
  skillsController.getSkillsByUserId
);
router.post(
  '/:id',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.create_skill_self),
  skillsValidator.validate,
  skillsController.addSkill
);
router.put(
  '/:id',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.edit_skill_self),
  skillsValidator.validate,
  skillsController.updateSkill
);
router.delete(
  '/:id',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.delete_skill_self),
  skillsValidator.validate,
  skillsController.deleteSkill
);

module.exports = router;
