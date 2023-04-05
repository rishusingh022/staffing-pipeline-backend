const userValidators = require('../../src/middlewares/user.validator');

describe('User validator Middleware', () => {
  describe('Middleware updateIdValidator', () => {
    it('Should call the next function if there is no error validating the request params', async () => {
      const req = {
        params: {
          id: '8543e9fe-a420-4cfb-9f0b-a9bea4d0962c',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      userValidators.updateIdValidator(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    it('Should not call the next function  if there is an error validating the request params', async () => {
      const req = {
        params: {
          id: '8543e9fe-a420-4cfb-9f0b-a9bea4d0962c',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      userValidators.updateIdValidator(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    it('Should throw an error if the id is not a valid uuid', async () => {
      const req = {
        params: {
          id: '1234',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      userValidators.updateIdValidator(req, res, next);
      expect(next).toBeCalledTimes(0);
      expect(res.status).toBeCalledWith(400);
      expect(res.json).toBeCalledWith({ message: '"id" must be a valid GUID' });
    });
  });
  describe('Middleware updateSelfBodyValidator', () => {
    it('Should call the next function if there is no error validating the request body', async () => {
      const req = {
        body: {
          image: 'https://www.google.com',
          skills: ['React', 'Node'],
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      userValidators.updateSelfBodyValidator(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    it('Should not call the next function  if there is an error validating the request body', async () => {
      const req = {
        body: {
          image: 'https://www.google.com',
          skills: {
            hello: 'World',
          },
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      userValidators.updateSelfBodyValidator(req, res, next);
      expect(next).toBeCalledTimes(0);
    });
    it('Should throw an error if the image is not a valid url', async () => {
      const req = {
        body: {
          image: 1234,
          skills: ['React', 'Node'],
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      userValidators.updateSelfBodyValidator(req, res, next);
      expect(next).toBeCalledTimes(0);
      expect(res.status).toBeCalledWith(400);
      expect(res.json).toBeCalledWith({ message: '"image" must be a string' });
    });
  });
  describe('Middleware updateBodyValidator', () => {
    it('Should call the next function if there is no error validating the request body', async () => {
      const req = {
        body: {
          image: 'https://www.google.com',
          skills: ['React', 'Node'],
          name: 'John Doe',
          email: 'user@example.com',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      userValidators.updateBodyValidator(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    it('Should not call the next function  if there is an error validating the request body', async () => {
      const req = {
        body: {
          image: 'https://www.google.com',
          skills: ['React', 'Node'],
          name: 'John Doe',
          email: 'user@example.com',
          fmno: 'alfdahfis',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      userValidators.updateBodyValidator(req, res, next);
      expect(next).toBeCalledTimes(0);
    });
    it('Should throw an error if the image is not a valid url', async () => {
      const req = {
        body: {
          image: 1234,
          skills: ['React', 'Node'],
          name: 'John Doe',
          email: 'user@example.com',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      userValidators.updateBodyValidator(req, res, next);
      expect(next).toBeCalledTimes(0);
      expect(res.status).toBeCalledWith(400);
      expect(res.json).toBeCalledWith({ message: '"image" must be a string' });
    });
  });
});
