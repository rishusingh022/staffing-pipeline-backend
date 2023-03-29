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
    // add column charge_code to table engagements
    await queryInterface.addColumn('engagements', 'charge_code', {
      type: Sequelize.STRING,
      unique: true
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // remove column charge_code from table engagements
    await queryInterface.removeColumn('engagements', 'charge_code');
  },
};
