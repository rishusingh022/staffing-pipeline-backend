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
    await queryInterface.bulkInsert(
      'features',
      [
        {
          feature_id: '347c4695-ecdc-458c-b091-11204c27be85',
          feature_name: 'delete_skill_self',
          feature_available: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          feature_id: 'b237ba6a-55d9-4199-9149-c840304b8faa',
          feature_name: 'read_users_in_engagement',
          feature_available: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          feature_id: '2ffd2da5-8ede-48f2-a05f-31d158fba26d',
          feature_name: 'read_past_users_in_engagement',
          feature_available: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          feature_id: 'af9020ad-d6ec-4c9e-85d4-148883a5a65a',
          feature_name: 'create_staffing_entry',
          feature_available: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          feature_id: 'e9a3a5db-df25-4042-868f-9c991b064052',
          feature_name: 'read_metrics',
          feature_available: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('features', null, {});
  },
};
