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
    await queryInterface.renameColumn('m_role_features', 'roleId', 'role_id');
    await queryInterface.renameColumn('m_role_features', 'featureId', 'feature_id');
    await queryInterface.renameColumn('m_role_features', 'createdAt', 'created_at');
    await queryInterface.renameColumn('m_role_features', 'updatedAt', 'updated_at');
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameColumn('m_role_features', 'role_id', 'roleId');
    await queryInterface.renameColumn('m_role_features', 'feature_id', 'featureId');
    await queryInterface.renameColumn('m_role_features', 'created_at', 'createdAt');
    await queryInterface.renameColumn('m_role_features', 'updated_at', 'updatedAt');
  }
};
