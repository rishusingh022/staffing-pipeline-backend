const skillsService = require('../../src/services/skills.service');
const { HttpError } = require('../../src/utils/httpError');
const userServices = require('../../src/services/user.service');
const skillsController = require('../../src/controllers/skills.controller');
const { getUser } = require('../__mocks__/user');
const req = {
  params: {
    id: 1,
  },
};
const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
const skills = [
  {
    skillId: 1,
    userId: 1,
    area: 'Frontend',
    skill: 'React',
    category: 'Framework',
  },
];

describe('Skills Controller', () => {
  describe('get skills by user id', () => {
    it('should return skills', async () => {
      jest.spyOn(skillsService, 'getSkillsByUserId').mockResolvedValueOnce(skills);
      await skillsController.getSkillsByUserId(req, res);
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith({ data: skills });
    });
    it('should return error', async () => {
      jest.spyOn(skillsService, 'getSkillsByUserId').mockRejectedValueOnce(new Error('error'));
      await skillsController.getSkillsByUserId(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'error' });
    });
    it('should return http error', async () => {
      jest.spyOn(skillsService, 'getSkillsByUserId').mockRejectedValueOnce(new HttpError('error', 404));
      await skillsController.getSkillsByUserId(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'error' });
    });
  });
  describe('add skill', () => {
    it('should return skill', async () => {
      jest.spyOn(skillsService, 'addSkill').mockResolvedValueOnce(skills[0]);
      jest.spyOn(userServices, 'getUser').mockResolvedValueOnce(getUser.resolvedValue);
      await skillsController.addSkill(req, res);
      expect(res.status).toBeCalledWith(201);
      expect(res.json).toBeCalledWith({ data: skills[0] });
    });
    it('should return error', async () => {
      jest.spyOn(userServices, 'getUser').mockResolvedValueOnce(getUser.resolvedValue);
      jest.spyOn(skillsService, 'addSkill').mockRejectedValueOnce(new Error('error'));
      await skillsController.addSkill(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'error' });
    });
    it('should return http error', async () => {
      jest.spyOn(userServices, 'getUser').mockResolvedValueOnce(null);
      jest.spyOn(skillsService, 'addSkill').mockRejectedValueOnce(new HttpError(404, 'error'));
      await skillsController.addSkill(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'error' });
    });
  });
  describe('update skill', () => {
    it('should return skill', async () => {
      jest.spyOn(skillsService, 'updateSkill').mockResolvedValueOnce(skills[0]);
      await skillsController.updateSkill(req, res);
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith({ data: skills[0] });
    });
    it('should return error', async () => {
      jest.spyOn(skillsService, 'updateSkill').mockRejectedValueOnce(new Error('error'));
      await skillsController.updateSkill(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'error' });
    });
    it('should return http error', async () => {
      jest.spyOn(skillsService, 'updateSkill').mockRejectedValueOnce(new HttpError(404, 'error'));
      await skillsController.updateSkill(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'error' });
    });
  });
  describe('delete skill', () => {
    it('should return skill', async () => {
      jest.spyOn(skillsService, 'deleteSkill').mockResolvedValueOnce(skills[0]);
      await skillsController.deleteSkill(req, res);
      expect(res.status).toBeCalledWith(200);
      expect(res.json).toBeCalledWith({ data: skills[0] });
    });
    it('should return error', async () => {
      jest.spyOn(skillsService, 'deleteSkill').mockRejectedValueOnce(new Error('error'));
      await skillsController.deleteSkill(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'error' });
    });
    it('should return http error', async () => {
      jest.spyOn(skillsService, 'deleteSkill').mockRejectedValueOnce(new HttpError(404, 'error'));
      await skillsController.deleteSkill(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'error' });
    });
  });
});
