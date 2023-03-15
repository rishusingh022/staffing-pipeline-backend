'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // change userId to user_id , engagementId to engagement_id , assignmentType to assignment_type,
    // utilizationPercentage to utilization_percentage, staffingStatus to staffing_status,
    // assignmentStartDate to assignment_start_date, assignmentEndDate to assignment_end_date,
    // APName to ap_name, EDName to ed_name, EMName to em_name, staffingManager to staffing_manager,
    // departmentCode to department_code, practiceFunction to practice_function,
    // practiceIndustry to practice_industry, roleCategory to role_category,
    //  staffingOffice to staffing_office, createdAt to created_at, updatedAt to updated_at
    await queryInterface.renameColumn('staffing_details', 'entryId', 'entry_id');
    await queryInterface.renameColumn('staffing_details', 'userId', 'user_id');
    await queryInterface.renameColumn('staffing_details', 'engagementId', 'engagement_id');
    await queryInterface.renameColumn('staffing_details', 'assignmentType', 'assignment_type');
    await queryInterface.renameColumn('staffing_details', 'utilizationPercentage', 'utilization_percentage');
    await queryInterface.renameColumn('staffing_details', 'staffingStatus', 'staffing_status');
    await queryInterface.renameColumn('staffing_details', 'assignmentStartDate', 'assignment_start_date');
    await queryInterface.renameColumn('staffing_details', 'assignmentEndDate', 'assignment_end_date');
    await queryInterface.renameColumn('staffing_details', 'APName', 'a_p_name');
    await queryInterface.renameColumn('staffing_details', 'EDName', 'e_d_name');
    await queryInterface.renameColumn('staffing_details', 'EMName', 'e_m_name');
    await queryInterface.renameColumn('staffing_details', 'staffingManager', 'staffing_manager');
    await queryInterface.renameColumn('staffing_details', 'departmentCode', 'department_code');
    await queryInterface.renameColumn('staffing_details', 'departmentName', 'department_name');
    await queryInterface.renameColumn('staffing_details', 'practiceFunction', 'practice_function');
    await queryInterface.renameColumn('staffing_details', 'practiceIndustry', 'practice_industry');
    await queryInterface.renameColumn('staffing_details', 'roleCategory', 'role_category');
    await queryInterface.renameColumn('staffing_details', 'roleSubCategory', 'role_sub_category');
    await queryInterface.renameColumn('staffing_details', 'staffingOffice', 'staffing_office');
    await queryInterface.renameColumn('staffing_details', 'createdAt', 'created_at');
    await queryInterface.renameColumn('staffing_details', 'updatedAt', 'updated_at');
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // write down migration code
    await queryInterface.renameColumn('staffing_details', 'entry_id', 'entryId');
    await queryInterface.renameColumn('staffing_details', 'user_id', 'userId');
    await queryInterface.renameColumn('staffing_details', 'engagement_id', 'engagementId');
    await queryInterface.renameColumn('staffing_details', 'assignment_type', 'assignmentType');
    await queryInterface.renameColumn('staffing_details', 'utilization_percentage', 'utilizationPercentage');
    await queryInterface.renameColumn('staffing_details', 'staffing_status', 'staffingStatus');
    await queryInterface.renameColumn('staffing_details', 'assignment_start_date', 'assignmentStartDate');
    await queryInterface.renameColumn('staffing_details', 'assignment_end_date', 'assignmentEndDate');
    await queryInterface.renameColumn('staffing_details', 'a_p_name', 'APName');
    await queryInterface.renameColumn('staffing_details', 'e_d_name', 'EDName');
    await queryInterface.renameColumn('staffing_details', 'e_m_name', 'EMName');
    await queryInterface.renameColumn('staffing_details', 'staffing_manager', 'staffingManager');
    await queryInterface.renameColumn('staffing_details', 'department_code', 'departmentCode');
    await queryInterface.renameColumn('staffing_details', 'department_name', 'departmentName');
    await queryInterface.renameColumn('staffing_details', 'practice_function', 'practiceFunction');
    await queryInterface.renameColumn('staffing_details', 'practice_industry', 'practiceIndustry');
    await queryInterface.renameColumn('staffing_details', 'role_category', 'roleCategory');
    await queryInterface.renameColumn('staffing_details', 'role_sub_category', 'roleSubCategory');
    await queryInterface.renameColumn('staffing_details', 'staffing_office', 'staffingOffice');
    await queryInterface.renameColumn('staffing_details', 'created_at', 'createdAt');
    await queryInterface.renameColumn('staffing_details', 'updated_at', 'updatedAt');
  },
};
