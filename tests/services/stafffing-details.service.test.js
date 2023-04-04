const db = require('../../src/models');
const { HttpError } = require('../../src/utils/httpError');
const staffingDetailsService = require('../../src/services/staffing-details.service');

const mockStaffingEntry = {
  // khushil in NexusForge
  entry_id: '0a672fb5-ecb8-4d48-a9c8-5c7c5d94092b',
  fmno: 123450,
  name: 'Khushil',
  user_id: 'some-id',
  email: 'Khushil@mckinsey.com',
  engagement_id: '4e733f84-92af-4cc9-b0ab-d71dab092e85',
  charge_code: 'X2FEO7Q',
  assignment_type: 'staffed',
  study: 'Photo',
  utilization_percentage: 28,
  assignment_start_date: '2022-12-04T00:25:06.919Z',
  assignment_end_date: '2023-03-25T00:28:45.949Z',
  a_p_name: 'Gretchen',
  e_d_name: 'Maudie',
  e_m_name: 'Kareem',
  staffing_manager: 'Jo Kautzer',
  guild: 'Guild',
  country: 'Comoros',
  department_code: 'Department Code',
  practice: 'Practice',
  department_name: 'Department Name',
  integrated: 'Integrated',
  path: 'Path',
  practice_function: 'Practice Function',
  practice_industry: 'Practice Industry',
  region: 'Region',
  role_category: 'Role Category',
  role_sub_category: 'Role Sub Category',
  staffing_office: 'Staffing Office',
  created_at: '2023-03-18T05:50:54.489Z',
  updated_at: '2023-03-17T18:44:16.467Z',
};

describe('staffing details services', () => {
  it('get user current engagements', async () => {
    jest.spyOn(db.staffing_details, 'findAll').mockResolvedValue([mockStaffingEntry]);
    const result = await staffingDetailsService.getUserCurrentEngagements('some-id');
    expect(result).toEqual([mockStaffingEntry]);
  });
  it('get user past engagements', async () => {
    jest.spyOn(db.staffing_details, 'findAll').mockResolvedValue([mockStaffingEntry]);
    const result = await staffingDetailsService.getUserPastEngagements('some-id');
    expect(result).toEqual([mockStaffingEntry]);
  });
  it('create staffing entry ', async () => {
    jest.spyOn(db.staffing_details, 'bulkCreate').mockResolvedValue([mockStaffingEntry]);
    const result = await staffingDetailsService.createStaffingEntry([mockStaffingEntry]);
    expect(result).toEqual([mockStaffingEntry]);
  });
  it('get users in engagements', async () => {
    jest.spyOn(db.staffing_details, 'findAll').mockResolvedValue([mockStaffingEntry]);
    const result = await staffingDetailsService.getUsersInEngagement('some-id');
    expect(result).toEqual([mockStaffingEntry]);
  });
  it('get past users in engagements', async () => {
    jest.spyOn(db.staffing_details, 'findAll').mockResolvedValue([mockStaffingEntry]);
    const result = await staffingDetailsService.getPastUsersInEngagement('some-id');
    expect(result).toEqual([mockStaffingEntry]);
  });
  it('get users involved in engagements by engagement id', async () => {
    jest.spyOn(db.staffing_details, 'findAll').mockResolvedValue([mockStaffingEntry]);
    const result = await staffingDetailsService.getUsersInvolvedInEngagement('some-id');
    expect(result).toEqual([mockStaffingEntry]);
  });
  it('get staffing entry with userId, engagementId, assignmentStartDate and assignmentEndDate', async () => {
    jest.spyOn(db.staffing_details, 'findOne').mockResolvedValue(mockStaffingEntry);
    const result = await staffingDetailsService.getStaffingEntry(
      'some-id',
      'some-id',
      '2022-12-04T00:25:06.919Z',
      '2023-03-25T00:28:45.949Z'
    );
    expect(result).toEqual(mockStaffingEntry);
  });
  it('get staffing entry with userId, engagementId, assignmentStartDate and assignmentEndDate', async () => {
    jest.spyOn(db.staffing_details, 'findOne').mockResolvedValue(mockStaffingEntry);
    const result = await staffingDetailsService.getStaffingEntryOverDateBound(
      'some-id',
      'some-id',
      '2022-12-04T00:25:06.919Z',
      '2023-03-25T00:28:45.949Z'
    );
    expect(result).toEqual(mockStaffingEntry);
  });
  it('update staffing entry with entryId and entrydetails', async () => {
    jest.spyOn(db.staffing_details, 'update').mockResolvedValue([1]);
    const result = await staffingDetailsService.updateStaffingEntry('some-id', mockStaffingEntry);
    expect(result).toEqual([1]);
  });
  it('get current staffing details', async () => {
    jest.spyOn(db.staffing_details, 'findAll').mockResolvedValue([mockStaffingEntry]);
    const result = await staffingDetailsService.getCurrentStaffingDetails();
    expect(result).toEqual([mockStaffingEntry]);
  });
});
