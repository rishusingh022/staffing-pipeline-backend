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
      'm_role_features',
      [
        {
          // user can delete_skill_self
          role_id: '26fcc518-756f-4f4f-8a02-da357b5bd346',
          feature_id: '347c4695-ecdc-458c-b091-11204c27be85',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // pd can delete_skill_self
          role_id: '8543e9fe-a420-4cfb-9f0b-a9bea4d0962c',
          feature_id: '347c4695-ecdc-458c-b091-11204c27be85',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // pd can read_users_in_engagement
          role_id: '8543e9fe-a420-4cfb-9f0b-a9bea4d0962c',
          feature_id: 'b237ba6a-55d9-4199-9149-c840304b8faa',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // leadership can_read_users_in_engagement
          role_id: '7739b2b2-4dd2-41ee-aa3e-782783939127',
          feature_id: 'b237ba6a-55d9-4199-9149-c840304b8faa',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // pd can read_past_users_in_engagement
          role_id: '8543e9fe-a420-4cfb-9f0b-a9bea4d0962c',
          feature_id: '2ffd2da5-8ede-48f2-a05f-31d158fba26d',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // leadership can read_past_users_in_engagement
          role_id: '7739b2b2-4dd2-41ee-aa3e-782783939127',
          feature_id: '2ffd2da5-8ede-48f2-a05f-31d158fba26d',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // pd can create_staffing_entry
          role_id: '8543e9fe-a420-4cfb-9f0b-a9bea4d0962c',
          feature_id: 'af9020ad-d6ec-4c9e-85d4-148883a5a65a',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // leadership can read_metrics
          role_id: '7739b2b2-4dd2-41ee-aa3e-782783939127',
          feature_id: 'e9a3a5db-df25-4042-868f-9c991b064052',
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
    await queryInterface.bulkDelete('m_role_features', null, {});
  },
};
