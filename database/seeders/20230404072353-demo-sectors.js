'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'sectors',
      [
        {
          name: 'Advance Industries',
          sector_id: '93a3d40b-33a6-459e-96c2-bae49185bd61',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Banking',
          sector_id: '54981c7b-b85c-4e4d-a590-7e4abe312c3e',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Consumer',
          sector_id: '373492bc-838a-41c3-8734-7b99f6db3e67',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Global Energy & Materials',
          sector_id: '70916eca-d321-4048-9c6a-e1d3728ea449',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Insurance',
          sector_id: 'adbcf47d-5b65-469b-a61c-fe36195a5abd',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Life Sciences',
          sector_id: '23f888e0-31f4-49d5-a84b-9596ee4f37c5',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Private Equity & Principal Investors',
          sector_id: '226484f7-091f-418f-8348-3af49b805699',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Social Sector, Healthcare, & Public Sector Entities (SHaPE)',
          sector_id: 'd7f3a359-ce10-496a-8523-0cb302e66320',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Telecom, Media & Tech',
          sector_id: 'ecc90560-0a43-4f03-96c4-f998860018d3',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Travel, Logistics & Infrastructure',
          sector_id: '0f75d0c0-b660-4119-a6f3-f1d92d2a7995',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sectors', null, {});
  },
};
