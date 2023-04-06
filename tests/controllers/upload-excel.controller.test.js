const uploadExcelController = require('../../src/controllers/upload-excel.controller');
const uploadExcelService = require('../../src/services/upload-excel.service');
const mockData = require('../__mocks__/upload-excel');
const fs = require('fs');
describe('Upload Excel Controller uploadExcel', () => {
  it('should return success', async () => {
    jest.spyOn(uploadExcelService, 'insertExcelDataToDatabase').mockResolvedValue(mockData.excelData);
    const req = {
      file: {
        path: 'test',
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await uploadExcelController.uploadExcel(req, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith({ data: mockData.excelData, success: true });
  });
  it('should return error', async () => {
    jest.spyOn(uploadExcelService, 'insertExcelDataToDatabase').mockRejectedValue(new Error(mockData.error.message));
    jest.spyOn(fs, 'unlinkSync').mockImplementation(() => {});
    const req = {
      file: {
        path: 'test',
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await uploadExcelController.uploadExcel(req, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith({ error: mockData.error.message, success: false });
  });
});
