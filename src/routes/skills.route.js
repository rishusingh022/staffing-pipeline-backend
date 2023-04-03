const skillsController = require('../controllers/skills.controller');
const router = require('express').Router();
const skillsValidator = require('../middlewares/skills.validator');
const { checkRolePermission } = require('../middlewares/role-permission.validator');
const allFeatures = require('../utils/features');

router.get('/:id', checkRolePermission(allFeatures.read_skills), skillsController.getSkillsByUserId);
router.post(
  '/:id',
  checkRolePermission(allFeatures.create_skill_self),
  skillsValidator.validate,
  skillsController.addSkill
);
router.put(
  '/:id',
  checkRolePermission(allFeatures.edit_skill_self),
  skillsValidator.validate,
  skillsController.updateSkill
);
router.delete(
  '/:id',
  checkRolePermission(allFeatures.delete_skill_self),
  skillsValidator.validate,
  skillsController.deleteSkill
);

module.exports = router;
