'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('sub_sectors', [{
        name: 'Aerospace & Defense',
        sub_sector_id:'b7ebba0b-02e4-4352-a92f-f3e85dfbc5a0',
        sector_id:'93a3d40b-33a6-459e-96c2-bae49185bd61',
        created_at: new Date(),
        updated_at: new Date()
      },{
        name: 'Automotive & Assembly',
        sub_sector_id:'ef67dfad-1e14-441d-94cc-53c5e59e44bc',
        sector_id:'93a3d40b-33a6-459e-96c2-bae49185bd61',
        created_at: new Date(),
        updated_at: new Date()
      },{
        name: 'Industrials & Electronics',
        sub_sector_id:'7d1dbfd1-b3b6-4a5f-92fe-e76504c7bb99',
        sector_id:'93a3d40b-33a6-459e-96c2-bae49185bd61',
        created_at: new Date(),
        updated_at: new Date()
      },{
        name: 'Semiconductors',
        sub_sector_id:'ab737d0c-f7d8-4611-b6c7-d2d0d72c0f71',
        sector_id:'93a3d40b-33a6-459e-96c2-bae49185bd61',
        created_at: new Date(),
        updated_at: new Date()
      },{
        name: 'Materials Vault',
        sub_sector_id:'0a0ed5e0-7e59-48eb-b613-f061aa26ca84',
        sector_id:'70916eca-d321-4048-9c6a-e1d3728ea449',
        created_at: new Date(),
        updated_at: new Date()
      },{
        name: 'Chemicals & Agriculture',
        sub_sector_id:'dd47f2f2-3403-415b-a56c-2a03e7f66de2',
        sector_id:'70916eca-d321-4048-9c6a-e1d3728ea449',
        created_at: new Date(),
        updated_at: new Date()
      },{
        name: 'Electric Power & Natural Gas',
        sub_sector_id:'db4418cb-a980-4ff2-b674-dc5b55fcc9cd',
        sector_id:'70916eca-d321-4048-9c6a-e1d3728ea449',
        created_at: new Date(),
        updated_at: new Date()
      },{
        name: 'Oil & Gas',
        sub_sector_id:'09da9358-c297-477c-aaa2-44e729a9efff',
        sector_id:'70916eca-d321-4048-9c6a-e1d3728ea449',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sub_sectors', null, {}); 
  }
};
