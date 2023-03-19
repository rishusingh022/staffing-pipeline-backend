const mockData = require('../__mocks__/upload-excel');
const uploadExcelService = require('../../src/services/upload-excel.service');
const staffingDetailsService = require('../../src/services/staffing-details.service');
const fs = require('fs');
const reader = require('xlsx');
const db = require('../../src/models');

describe('Upload Excel Services insertExcelDataToDatabase', () => {
  it('should return inserted data', async () => {
    jest.spyOn(staffingDetailsService, 'parse_xlsx_sheets').mockResolvedValue(mockData.excelData);
    jest.spyOn(staffingDetailsService, 'createStaffingEntry').mockResolvedValue(mockData.excelData);
    jest.spyOn(fs, 'unlinkSync').mockImplementation(() => {});
    const res = await uploadExcelService.insertExcelDataToDatabase(mockData.filePath);
    expect(res).toEqual(mockData.excelData);
  });
});

describe('Upload Excel Services parse_xlsx_sheets', () => {
  it('should return parsed data', async () => {
    jest
      .spyOn(reader, 'readFile')
      .mockReturnValue({ SheetNames: ['sheet1'], Sheets: { sheet1: { A1: { v: 'test' } } } });
    jest.spyOn(reader.utils, 'sheet_to_json').mockReturnValue(mockData.excelData);
    jest.spyOn(db.users, 'findOne').mockResolvedValue({});
    jest.spyOn(db.engagements, 'findOne').mockResolvedValue({});
    const res = await staffingDetailsService.parse_xlsx_sheets(mockData.filePath);
    expect(res).toEqual(mockData.excelData);
  });
});
