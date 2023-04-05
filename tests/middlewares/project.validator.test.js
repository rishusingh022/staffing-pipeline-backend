const projectValidator = require('../../src/middlewares/project.validator');

describe('Project Validator Middleware', () => {
  const req = {
    body: {
      name: 'Uranium go Boom',
      tags: ['Uranium, Nuclear, Boom'],
      skills: ['React', 'Node'],
      guild: 'SWE',
      userIds: ['1234', '5678'],
      caseStudyIds: ['1234', '5678'],
      status: 'Active',
      startDate: '2023-04-05T09:27:20.785Z',
      endDate: '2023-04-05T09:27:30.319Z',
      sectorId: '1234',
      subSectorId: '5678',
      chargeCode: '1234XYZ',
      image: 'www.google.com',
    },
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next = jest.fn();
  describe('Middleware validateProject', () => {
    it('Should call the next function if the request body is valid', () => {
      projectValidator.validateProject(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    it('Should not call the next function and throw an error if the request body is invalid', () => {
      projectValidator.validateProject({ body: { ...req.body, chargeCode: 'asfjafe' } }, res, next);
      expect(res.status).toBeCalledWith(400);
    });
    it('Should call ISE error if there is an error validating the request body', () => {
      jest.spyOn(projectValidator.projectSchema, 'validate').mockImplementation(() => {
        throw new Error('Error validating request body');
      });
      projectValidator.validateProject(req, res, next);
      expect(res.status).toBeCalledWith(500);
      expect(res.json).toBeCalled();
    });
  });
});
