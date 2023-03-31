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
    await queryInterface.bulkInsert('roles', [
      {
        role_id: '8543e9fe-a420-4cfb-9f0b-a9bea4d0962c',
        role_name: 'pd',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        role_id: '7739b2b2-4dd2-41ee-aa3e-782783939127',
        role_name: 'leadership',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        role_id: '26fcc518-756f-4f4f-8a02-da357b5bd346',
        role_name: 'user',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        role_id: 'f3605859-279b-4805-ac35-ef5de38e58ce',
        role_name: 'admin',
        created_at: new Date(),
        updated_at: new Date()
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
    await queryInterface.bulkDelete('roles', null, {});
  }
};
