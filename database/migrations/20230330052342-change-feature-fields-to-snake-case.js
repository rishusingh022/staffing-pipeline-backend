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
    await queryInterface.renameColumn('features', 'featureId', 'feature_id');
    await queryInterface.renameColumn('features', 'featureName', 'feature_name');
    await queryInterface.renameColumn('features', 'featureAvailable', 'feature_available');
    await queryInterface.renameColumn('features', 'createdAt', 'created_at');
    await queryInterface.renameColumn('features', 'updatedAt', 'updated_at');
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameColumn('features', 'feature_id', 'featureId');
    await queryInterface.renameColumn('features', 'feature_name', 'featureName');
    await queryInterface.renameColumn('features', 'feature_available', 'featureAvailable')
    await queryInterface.renameColumn('features', 'created_at', 'createdAt');
    await queryInterface.renameColumn('features', 'updated_at', 'updatedAt');
  }
};
