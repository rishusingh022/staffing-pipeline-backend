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
    await queryInterface.removeColumn('users', 'current_engagement_ids');
    await queryInterface.removeColumn('users', 'past_engagement_ids');
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // write the down function
    await queryInterface.addColumn('users', 'current_engagement_ids', {
      type: Sequelize.ARRAY(Sequelize.STRING),
    });
    await queryInterface.addColumn('users', 'past_engagement_ids', {
      type: Sequelize.ARRAY(Sequelize.STRING),
    });
  },
};
