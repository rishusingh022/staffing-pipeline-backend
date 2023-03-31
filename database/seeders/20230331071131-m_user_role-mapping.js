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
    await queryInterface.bulkInsert('m_user_roles', [
      {
        user_id: '844cd563-04e6-4f19-894b-32e0b70cd66b',
        role_id: '26fcc518-756f-4f4f-8a02-da357b5bd346',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: '0d7556dc-f3dc-4baf-9c34-0371b2de4a64',
        role_id: '26fcc518-756f-4f4f-8a02-da357b5bd346',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 'efd12e72-ede2-4673-b25c-6fc4c4b80598',
        role_id: '26fcc518-756f-4f4f-8a02-da357b5bd346',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 'e69b7a9a-560b-4ff9-a28a-94a06fb77a4f',
        role_id: '26fcc518-756f-4f4f-8a02-da357b5bd346',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 'aa97eaeb-0f4b-43ab-bafb-733576c9cfb2',
        role_id: '26fcc518-756f-4f4f-8a02-da357b5bd346',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: '172db79d-36d2-4bf6-8f64-f93ad04199c3',
        role_id: '26fcc518-756f-4f4f-8a02-da357b5bd346',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: '31b0f929-e974-4c4a-b369-99b0ba022e88',
        role_id: '26fcc518-756f-4f4f-8a02-da357b5bd346',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 'cba5e933-fc01-4a02-ac96-d982cd32acc7',
        role_id: '26fcc518-756f-4f4f-8a02-da357b5bd346',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 'ef371ae0-a209-4304-9b3a-2c060c227727',
        role_id: '8543e9fe-a420-4cfb-9f0b-a9bea4d0962c',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 'b335ccbb-381a-42ab-aec5-e5670398c0d1',
        role_id: '8543e9fe-a420-4cfb-9f0b-a9bea4d0962c',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: '0a9b605a-333e-4144-8ede-b6585862c462',
        role_id: '7739b2b2-4dd2-41ee-aa3e-782783939127',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: '9ac73ce8-e3ce-4185-b6b7-4e74fb1854d7',
        role_id: '7739b2b2-4dd2-41ee-aa3e-782783939127',
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
    await queryInterface.bulkDelete('m_user_roles', null, {});
  }
};
