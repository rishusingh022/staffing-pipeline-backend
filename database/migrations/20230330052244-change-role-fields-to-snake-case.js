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
    await queryInterface.renameColumn('roles', 'roleId', 'role_id');
    await queryInterface.renameColumn('roles', 'roleName', 'role_name');
    await queryInterface.renameColumn('roles', 'createdAt', 'created_at');
    await queryInterface.renameColumn('roles', 'updatedAt', 'updated_at');
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameColumn('roles', 'role_id', 'roleId');
    await queryInterface.renameColumn('roles', 'role_name', 'roleName');
    await queryInterface.renameColumn('roles', 'created_at', 'createdAt');
    await queryInterface.renameColumn('roles', 'updated_at', 'updatedAt');

  }
};
