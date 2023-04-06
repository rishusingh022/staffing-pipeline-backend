const mockData = require('../__mocks__/upload-excel');
const uploadExcelService = require('../../src/services/upload-excel.service');
const staffingDetailsService = require('../../src/services/staffing-details.service');
const fs = require('fs');

describe('Upload Excel Services insertExcelDataToDatabase', () => {
  it('should return inserted data', async () => {
    jest.spyOn(staffingDetailsService, 'parse_xlsx_sheets').mockResolvedValue(mockData.excelData);
    jest.spyOn(staffingDetailsService, 'createStaffingEntry').mockResolvedValue(mockData.excelData);
    jest.spyOn(fs, 'unlinkSync').mockImplementation(() => {});
    jest.spyOn(staffingDetailsService, 'getStaffingEntry').mockResolvedValue(null);
    jest.spyOn(staffingDetailsService, 'getStaffingEntryOverDateBound').mockResolvedValue(true);
    const res = await uploadExcelService.insertExcelDataToDatabase(mockData.filePath);
    expect(res).toEqual(mockData.excelData);
  });
  it('should return entries but not insert them in DB if staffing entry exists', async () => {
    jest.spyOn(staffingDetailsService, 'parse_xlsx_sheets').mockResolvedValue(mockData.excelData);
    jest.spyOn(staffingDetailsService, 'createStaffingEntry').mockResolvedValue(mockData.excelData);
    jest.spyOn(fs, 'unlinkSync').mockImplementation(() => {});
    jest.spyOn(staffingDetailsService, 'getStaffingEntry').mockResolvedValue(true);
    const res = await uploadExcelService.insertExcelDataToDatabase(mockData.filePath);
    expect(res).toEqual(mockData.excelData);
  });
  it('should return entries but not insert them in DB if staffing entry dont exists over date bound', async () => {
    jest.spyOn(staffingDetailsService, 'parse_xlsx_sheets').mockResolvedValue(mockData.excelData);
    jest.spyOn(staffingDetailsService, 'createStaffingEntry').mockResolvedValue(mockData.excelData);
    jest.spyOn(fs, 'unlinkSync').mockImplementation(() => {});
    jest.spyOn(staffingDetailsService, 'getStaffingEntry').mockResolvedValue(null);
    jest.spyOn(staffingDetailsService, 'getStaffingEntryOverDateBound').mockResolvedValue(null);
    const res = await uploadExcelService.insertExcelDataToDatabase(mockData.filePath);
    expect(res).toEqual(mockData.excelData);
  });
});
