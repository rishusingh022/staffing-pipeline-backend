'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('engagements', 'sector_id', {
      type: Sequelize.UUID,
      allowNull: true,
    });
    await queryInterface.addColumn('engagements', 'sub_sector_id', {
      type: Sequelize.UUID,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('engagements', 'sector_id');
    await queryInterface.removeColumn('engagements', 'sub_sector_id');
  }
};
