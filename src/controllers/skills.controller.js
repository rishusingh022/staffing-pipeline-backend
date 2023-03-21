const skillsService = require('../services/skills.service');
const userServices = require('../services/user.service');
const { HttpError } = require('../utils/httpError');

const getSkillsByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const skills = await skillsService.getSkillsByUserId(id);
    res.status(200).json({ data: skills });
  } catch (error) {
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({
        error: error.message,
      });
    } else {
      res.status(500).json({
        error: error.message,
      });
    }
  }
};

const addSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userServices.getUser(id);
    if (!user) throw new HttpError(404, 'User not found');
    const skill = await skillsService.addSkill(id, req.body);

    res.status(200).json({ data: skill });
  } catch (error) {
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({
        error: error.message,
      });
    } else {
      res.status(500).json({
        error: error.message,
      });
    }
  }
};

const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { skillId } = req.body;
    const skill = await skillsService.updateSkill(id, skillId, req.body);
    res.status(200).json({ data: skill });
  } catch (error) {
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({
        error: error.message,
      });
    } else {
      res.status(500).json({
        error: error.message,
      });
    }
  }
};

const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { skillId } = req.body;
    const skill = await skillsService.deleteSkill(id, skillId);
    res.status(200).json({ data: skill });
  } catch (error) {
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({
        error: error.message,
      });
    } else {
      res.status(500).json({
        error: error.message,
      });
    }
  }
};

module.exports = {
  getSkillsByUserId,
  addSkill,
  updateSkill,
  deleteSkill,
};
