const uploadExcelController = require('../../src/controllers/upload-excel.controller');
const uploadExcelService = require('../../src/services/upload-excel.service');
const mockData = require('../__mocks__/upload-excel');

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
    expect(mockRes.json).toHaveBeenCalledWith(mockData.excelData);
  });
});
