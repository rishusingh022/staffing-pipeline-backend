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
    await queryInterface.bulkInsert('features', [
      {
        feature_id: 'f3605859-279b-4805-ac35-ef5de38e58ce',
        feature_name: 'create_engagement',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '6dfcc9cb-2e72-42b9-868d-418c5cdf3092',
        feature_name: 'edit_engagement',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '6d035dfc-307e-46c0-b906-b583b20fb8c9',
        feature_name: 'delete_engagement',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: 'b08da895-7f4c-4603-9317-fd30d7518b90',
        feature_name: 'read_engagement',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '5caaeb5b-ab38-44e4-9492-262bed76650f',
        feature_name: 'create_case_study',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: 'd6d8b999-23e1-485d-8c00-3b0ff9d95c4e',
        feature_name: 'read_case_study',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: 'c6cfa8af-1235-4bce-addc-c05e3ee1f37c',
        feature_name: 'delete_case_study',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '26ff439b-e323-40b7-9672-9b1256cff154',
        feature_name: 'edit_case_study',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '42502c89-b879-49ef-9335-4c69a7122a6a',
        feature_name: 'search_user',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '9c83661e-39d0-4df8-881c-6db51363bd1e',
        feature_name: 'search_case_study',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '166ed786-93e7-40bf-8d5b-b16ca4474fc2',
        feature_name: 'search_engagement',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '7d45f7db-baea-47c6-a9fa-387fb259345c',
        feature_name: 'read_skills',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: 'fc6006a0-83b0-4c74-b1d5-afb2f69e6a27',
        feature_name: 'create_skills',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '4a44d582-7216-4388-b24f-6e570b7ade0b',
        feature_name: 'edit_skills',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: 'd435f633-1465-4b23-bb21-daaaa85c8227',
        feature_name: 'delete_skills',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '37618e29-fdb7-40d0-84a4-99b0fcbdfff4',
        feature_name: 'write_staffing_entry',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '805fcd9e-25d0-4ab4-9e29-469483411903',
        feature_name: 'upload_excel',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '00d0ed9b-b4c0-4ec5-99fb-78bec054e9b9',
        feature_name: 'upload_image_case_study',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: 'a4e0bc11-6ad3-4ee8-b74f-b9301a76be93',
        feature_name: 'upload_image_engagement',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '4fd7ea38-f09c-4803-9d19-d085d917ab5b',
        feature_name: 'upload_image_user',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '8f6e61e1-ee22-4fe4-8df5-83dcfb1541c9',
        feature_name: 'read_user',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '44dad0d3-ea12-419d-bc0a-9268ce727066',
        feature_name: 'create_user',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '441635e5-af5c-4bd1-9a95-ed10ce5c51c5',
        feature_name: 'delete_user',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '7c56a635-c20d-4e5d-b739-4395a5101e77',
        feature_name: 'edit_user',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: 'eb5d2b8b-49fc-40bc-9ab6-f0daac9bea57',
        feature_name: 'create_skill_self',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: 'ae8174e0-6ad9-4263-9809-33e2e3664a36',
        feature_name: 'edit_skill_self',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: 'bcd37230-0b63-4266-875c-d82fb8e6da99',
        feature_name: 'edit_user_self',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '7e6254c2-ed0b-474b-b649-bab345f67f75',
        feature_name: 'upload_image_user_self',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        feature_id: '1ce4967e-1454-4de7-96ee-e538cf139a23',
        feature_name: 'temp',
        feature_available: true,
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('features', null, {});
  }
};
