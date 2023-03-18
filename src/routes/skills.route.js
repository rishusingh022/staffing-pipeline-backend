const skillsController = require('../controllers/skills.controller');
const router = require('express').Router();
const skillsValidator = require('../middlewares/skills.validator');

router.get('/:id', skillsValidator.validate, skillsController.getSkillsByUserId);
router.post('/:id', skillsValidator.validate, skillsController.addSkill);
router.put('/:id', skillsValidator.validate, skillsController.updateSkill);
router.delete('/:id', skillsValidator.validate, skillsController.deleteSkill);

module.exports = router;
