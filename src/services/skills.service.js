const { HttpError } = require('../utils/httpError');
const db = require('../models');

const getSkillsByUserId = async userId => {
  const skills = await db.skills.findAll({
    where: {
      userId,
    },
  });
  return skills;
};

const addSkill = async (userId, body) => {
  const skill = await db.skills.create({
    userId,
    ...body,
  });
  return skill;
};

const updateSkill = async (userId, skillId, body) => {
  const skill = await db.skills.findOne({
    where: {
      userId,
      skillId,
    },
  });
  if (!skill) throw new HttpError(404, 'Skill not found');
  for (let key in body) {
    skill[key] = body[key];
  }
  await skill.save();
  return skill;
};

const deleteSkill = async (userId, skillId) => {
  const skill = await db.skills.findOne({
    where: {
      userId,
      skillId,
    },
  });
  if (!skill) throw new HttpError(404, 'Skill not found');
  await skill.destroy();
  return skill;
};

module.exports = {
  getSkillsByUserId,
  addSkill,
  updateSkill,
  deleteSkill,
};
