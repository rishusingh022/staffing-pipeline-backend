const db = require('../../src/models');
const { HttpError } = require('../../src/utils/httpError');
const skillsService = require('../../src/services/skills.service');
const mockSkill = {
  skillId: 1,
  userId: 1,
  area: 'Frontend',
  skill: 'React',
  category: 'Framework',
  save: jest.fn(),
  destroy: jest.fn(),
};

describe('Skills Service', () => {
  it('should get skills by user id', async () => {
    jest.spyOn(db.skills, 'findAll').mockResolvedValueOnce([mockSkill]);
    const skills = await skillsService.getSkillsByUserId(1);
    expect(skills).toEqual([mockSkill]);
  });
  it('should add skill', async () => {
    jest.spyOn(db.skills, 'create').mockResolvedValueOnce(mockSkill);
    const skill = await skillsService.addSkill(1, mockSkill);
    expect(skill).toEqual(mockSkill);
  });
  it('should update skill', async () => {
    jest.spyOn(db.skills, 'findOne').mockResolvedValueOnce(mockSkill);
    const skill = await skillsService.updateSkill(1, 1, mockSkill);
    expect(skill).toEqual(mockSkill);
  });
  it('should throw error when updating skill', async () => {
    jest.spyOn(db.skills, 'findOne').mockResolvedValueOnce(null);
    await expect(skillsService.updateSkill(1, 1, mockSkill)).rejects.toThrow(HttpError);
  });
  it('should delete skill', async () => {
    jest.spyOn(db.skills, 'findOne').mockResolvedValueOnce(mockSkill);
    const skill = await skillsService.deleteSkill(1, 1);
    expect(skill).toEqual(mockSkill);
  });
  it('should throw error when deleting skill', async () => {
    jest.spyOn(db.skills, 'findOne').mockResolvedValueOnce(null);
    await expect(skillsService.deleteSkill(1, 1)).rejects.toThrow(HttpError);
  });
});
