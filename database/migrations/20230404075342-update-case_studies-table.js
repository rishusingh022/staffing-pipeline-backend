'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('case_studies', 'sector_id', {
      type: Sequelize.UUID,
      allowNull: true,
    });
    await queryInterface.addColumn('case_studies', 'sub_sector_id', {
      type: Sequelize.UUID,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('case_studies', 'sector_id');
    await queryInterface.removeColumn('case_studies', 'sub_sector_id');
  }
};
