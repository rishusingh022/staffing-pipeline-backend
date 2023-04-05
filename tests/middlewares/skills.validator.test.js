const skillsValidator = require('../../src/middlewares/skills.validator');

describe('Skill Validator Middleware', () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next = jest.fn();

  describe('createSkillValidate Middleware', () => {
    it('Should call the next function if the request body is valid', () => {
      const req = {
        body: {
          area: 'Area 1',
          category: 'Category 1',
          skill: 'Skill 1',
        },
      };

      skillsValidator.validate(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    it('Should not call the next function and throw an error if the request body is invalid', () => {
      const req = {
        body: {
          area: 'Area 1',
          category: 'Category 1',
        },
      };

      skillsValidator.validate(req, res, next);
      expect(res.status).toBeCalledWith(400);
      expect(res.json).toBeCalledWith({
        error: '"skill" is required',
      });
    });
  });
  describe('deleteSkillValidator Middleware', () => {
    it('Should call the next function if the request body is valid', () => {
      const req = {
        body: {
          skillId: '8543e9fe-a420-4cfb-9f0b-a9bea4d0962c',
        },
      };

      const middlewareFunc = skillsValidator.deleteValidator(skillsValidator.deleteBodySchema, 'body');
      middlewareFunc(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    it('Should not call the next function and throw an error if the request body is invalid', () => {
      const req = {
        body: {},
      };
      const middlewareFunc = skillsValidator.deleteValidator(skillsValidator.deleteBodySchema, 'body');
      middlewareFunc(req, res, next);
      expect(res.status).toBeCalledWith(400);
    });
  });
});
