'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('staffing_details', {
      entryId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      fmno: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.STRING,
      },
      engagementId: {
        type: Sequelize.STRING,
      },
      assignmentType: {
        type: Sequelize.STRING,
      },
      study: {
        type: Sequelize.STRING,
      },
      utilizationPercentage: {
        type: Sequelize.INTEGER,
      },
      staffingStatus: {
        type: Sequelize.STRING,
      },
      assignmentStartDate: {
        type: Sequelize.DATE,
      },
      assignmentEndDate: {
        type: Sequelize.DATE,
      },
      APName: {
        type: Sequelize.STRING,
      },
      EDName: {
        type: Sequelize.STRING,
      },
      EMName: {
        type: Sequelize.STRING,
      },
      staffingManager: {
        type: Sequelize.STRING,
      },
      guild: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      departmentCode: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
      },
      practice: {
        type: Sequelize.STRING,
      },
      departmentName: {
        type: Sequelize.STRING,
      },
      integrated: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      path: {
        type: Sequelize.STRING,
      },
      practiceFunction: {
        type: Sequelize.STRING,
      },
      practiceIndustry: {
        type: Sequelize.STRING,
      },
      region: {
        type: Sequelize.STRING,
      },
      roleCategory: {
        type: Sequelize.STRING,
      },
      roleSubCategory: {
        type: Sequelize.STRING,
      },
      staffingOffice: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('staffing_details');
  },
};
