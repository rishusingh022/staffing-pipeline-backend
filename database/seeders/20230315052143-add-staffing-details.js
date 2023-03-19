'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('staffing_details', [
      {
        entry_id: 'ff1d8b5a-c2f5-11ed-afa1-0242ac120002',
        fmno: 328549,
        name: 'Amit Kumar',
        user_id: 'a90c610c-1bd5-40c4-8b01-fdd7708f3730',
        engagement_id: 'd87ffb9b-06f2-4adb-8b6b-140995d97b04',
        assignment_type: 'Full Time',
        study: 'Study 1',
        utilization_percentage: 100,
        staffing_status: 'Active',
        assignment_start_date: '2023-03-10T05:57:53+0000',
        assignment_end_date: '2023-03-19T05:57:53+0000',
        a_p_name: 'AP Name',
        e_d_name: 'ED Name',
        e_m_name: 'EM Name',
        staffing_manager: 'Staffing Manager',
        guild: 'Guild',
        country: 'Country',
        department_code: 'Department Code',
        role: 'Role',
        practice: 'Practice',
        department_name: 'Department Name',
        integrated: 'Integrated',
        email: 'amit_kumar@mckinsey.com',
        path: 'Path',
        practice_function: 'Practice Function',
        practice_industry: 'Practice Industry',
        region: 'Region',
        role_category: 'Role Category',
        role_sub_category: 'Role Sub Category',
        staffing_office: 'Staffing Office',
        created_at: '2021-01-17T04:33:12.000Z',
        updated_at: '2021-01-17T04:33:12.000Z',
      },
      {
        entry_id: 'ff1d8b5a-c2f5-11ed-afa1-0242ac120003',
        fmno: 328549,
        name: 'Amit Kumar',
        user_id: 'a90c610c-1bd5-40c4-8b01-fdd7708f3730',
        engagement_id: 'be753dd4-7a33-449a-956a-a359b13282f3',
        assignment_type: 'Full Time',
        study: 'Study 1',
        utilization_percentage: 100,
        staffing_status: 'Active',
        assignment_start_date: '2023-03-13T05:57:53+0000',
        assignment_end_date: '2023-03-24T05:57:53+0000',
        a_p_name: 'AP Name',
        e_d_name: 'ED Name',
        e_m_name: 'EM Name',
        staffing_manager: 'Staffing Manager',
        guild: 'Guild',
        country: 'Country',
        department_code: 'Department Code',
        role: 'Role',
        practice: 'Practice',
        department_name: 'Department Name',
        integrated: 'Integrated',
        email: 'amit_kumar@mckinsey.com',
        path: 'Path',
        practice_function: 'Practice Function',
        practice_industry: 'Practice Industry',
        region: 'Region',
        role_category: 'Role Category',
        role_sub_category: 'Role Sub Category',
        staffing_office: 'Staffing Office',
        created_at: '2021-01-17T04:33:12.000Z',
        updated_at: '2021-01-17T04:33:12.000Z',
      },
      {
        entry_id: 'ff1d8b5a-c2f5-11ed-afa1-0242ac120004',
        fmno: 328549,
        name: 'Amit Kumar',
        user_id: 'a90c610c-1bd5-40c4-8b01-fdd7708f3730',
        engagement_id: 'be753dd4-7a33-449a-956a-a359b13282f3',
        assignment_type: 'Full Time',
        study: 'Study 1',
        utilization_percentage: 100,
        staffing_status: 'Active',
        assignment_start_date: '2023-03-02T05:57:53+0000',
        assignment_end_date: '2023-03-12T05:57:53+0000',
        a_p_name: 'AP Name',
        e_d_name: 'ED Name',
        e_m_name: 'EM Name',
        staffing_manager: 'Staffing Manager',
        guild: 'Guild',
        country: 'Country',
        department_code: 'Department Code',
        role: 'Role',
        practice: 'Practice',
        department_name: 'Department Name',
        integrated: 'Integrated',
        email: 'amit_kumar@mckinsey.com',
        path: 'Path',
        practice_function: 'Practice Function',
        practice_industry: 'Practice Industry',
        region: 'Region',
        role_category: 'Role Category',
        role_sub_category: 'Role Sub Category',
        staffing_office: 'Staffing Office',
        created_at: '2021-01-17T04:33:12.000Z',
        updated_at: '2021-01-17T04:33:12.000Z',
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('staffing_details', null, {});
  }
};
