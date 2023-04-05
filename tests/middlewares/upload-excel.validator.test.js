const uploadExcelValidator = require('../../src/middlewares/upload-excel.validator');

describe('UploadExcel Validator middleware', () => {
  describe('Middleware validate', () => {
    it('Should return 400 if file is not provided in request', () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      uploadExcelValidator.validate(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'File is required' });
    });
    it('Should call the next function if file is provided in request', () => {
      const req = {
        file: {
          originalname: 'test.xlsx',
          mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          size: 1000,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      uploadExcelValidator.validate(req, res, next);
      expect(next).toHaveBeenCalled();
    });
  });
  describe('Middleware fileValidator', () => {
    it('Should return 400 if file is not provided in request', () => {
      const req = {
        file: {},
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      uploadExcelValidator.fileValidator(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: '"fieldname" is required' });
    });
    it('Should call the next function if the file is provided in request', () => {
      const req = {
        file: {
          fieldname: 'file',
          originalname: 'test.xlsx',
          mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          size: 1000,
          encoding: '7bit',
          destination: 'uploads/',
          path: 'uploads/161a6b0b-1b1f-4b1f-8c1a-8c1a8c1a8c1a',
          filename: '161a6b0b-1b1f-4b1f-8c1a-8c1a8c1a8c1a',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      uploadExcelValidator.fileValidator(req, res, next);
      expect(next).toHaveBeenCalled();
    });
  });
});
