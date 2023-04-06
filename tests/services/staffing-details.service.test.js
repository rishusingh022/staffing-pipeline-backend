const db = require('../../src/models');
const staffingDetailsService = require('../../src/services/staffing-details.service');
const mockData = require('../__mocks__/upload-excel');

describe('staffing details services', () => {
  it('get user current engagements', async () => {
    jest.spyOn(db.staffing_details, 'findAll').mockResolvedValue([mockData.mockStaffingEntry]);
    const result = await staffingDetailsService.getUserCurrentEngagements('some-id');
    expect(result).toEqual([mockData.mockStaffingEntry]);
  });
  it('get user past engagements', async () => {
    jest.spyOn(db.staffing_details, 'findAll').mockResolvedValue([mockData.mockStaffingEntry]);
    const result = await staffingDetailsService.getUserPastEngagements('some-id');
    expect(result).toEqual([mockData.mockStaffingEntry]);
  });
  it('create staffing entry ', async () => {
    jest.spyOn(db.staffing_details, 'bulkCreate').mockResolvedValue([mockData.mockStaffingEntry]);
    const result = await staffingDetailsService.createStaffingEntry([mockData.mockStaffingEntry]);
    expect(result).toEqual([mockData.mockStaffingEntry]);
  });
  it('get users in engagements', async () => {
    jest.spyOn(db.staffing_details, 'findAll').mockResolvedValue([mockData.mockStaffingEntry]);
    const result = await staffingDetailsService.getUsersInEngagement('some-id');
    expect(result).toEqual([mockData.mockStaffingEntry]);
  });
  it('get past users in engagements', async () => {
    jest.spyOn(db.staffing_details, 'findAll').mockResolvedValue([mockData.mockStaffingEntry]);
    const result = await staffingDetailsService.getPastUsersInEngagement('some-id');
    expect(result).toEqual([mockData.mockStaffingEntry]);
  });
  it('get users involved in engagements by engagement id', async () => {
    jest.spyOn(db.staffing_details, 'findAll').mockResolvedValue([mockData.mockStaffingEntry]);
    const result = await staffingDetailsService.getUsersInvolvedInEngagement('some-id');
    expect(result).toEqual([mockData.mockStaffingEntry]);
  });
  it('get staffing entry with userId, engagementId, assignmentStartDate and assignmentEndDate', async () => {
    jest.spyOn(db.staffing_details, 'findOne').mockResolvedValue(mockData.mockStaffingEntry);
    const result = await staffingDetailsService.getStaffingEntry(
      'some-id',
      'some-id',
      '2022-12-04T00:25:06.919Z',
      '2023-03-25T00:28:45.949Z'
    );
    expect(result).toEqual(mockData.mockStaffingEntry);
  });
  it('get staffing entry with userId, engagementId, assignmentStartDate and assignmentEndDate', async () => {
    jest.spyOn(db.staffing_details, 'findOne').mockResolvedValue(mockData.mockStaffingEntry);
    const result = await staffingDetailsService.getStaffingEntryOverDateBound(
      'some-id',
      'some-id',
      '2022-12-04T00:25:06.919Z',
      '2023-03-25T00:28:45.949Z'
    );
    expect(result).toEqual(mockData.mockStaffingEntry);
  });
  it('update staffing entry with entryId and entrydetails', async () => {
    jest.spyOn(db.staffing_details, 'update').mockResolvedValue([1]);
    const result = await staffingDetailsService.updateStaffingEntry('some-id', mockData.mockStaffingEntry);
    expect(result).toEqual([1]);
  });
  it('get current staffing details', async () => {
    jest.spyOn(db.staffing_details, 'findAll').mockResolvedValue([mockData.mockStaffingEntry]);
    const result = await staffingDetailsService.getCurrentStaffingDetails();
    expect(result).toEqual([mockData.mockStaffingEntry]);
  });
});
