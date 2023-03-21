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
      'auths',
      [
        {
          email: 'shilpa@mckinsey.com',
          password: '$2b$08$ap2OSCeWEBVlDY.xui2bPuoblmWTDQwetDvMHZF1B7k.NI3Ae5Tyq',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          email: 'Khushil@mckinsey.com',
          password: '$2b$08$ap2OSCeWEBVlDY.xui2bPuoblmWTDQwetDvMHZF1B7k.NI3Ae5Tyq',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          email: 'Sukhman@mckinsey.com',
          password: '$2b$08$ap2OSCeWEBVlDY.xui2bPuoblmWTDQwetDvMHZF1B7k.NI3Ae5Tyq',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          email: 'harsh@mckinsey.com',
          password: '$2b$08$ap2OSCeWEBVlDY.xui2bPuoblmWTDQwetDvMHZF1B7k.NI3Ae5Tyq',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          email: 'promit@mckinsey.com',
          password: '$2b$08$ap2OSCeWEBVlDY.xui2bPuoblmWTDQwetDvMHZF1B7k.NI3Ae5Tyq',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          email: 'sneha@mckinsey.com',
          password: '$2b$08$ap2OSCeWEBVlDY.xui2bPuoblmWTDQwetDvMHZF1B7k.NI3Ae5Tyq',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          email: 'aganya@mckinsey.com',
          password: '$2b$08$ap2OSCeWEBVlDY.xui2bPuoblmWTDQwetDvMHZF1B7k.NI3Ae5Tyq',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          email: 'chiranshu@mckinsey.com',
          password: '$2b$08$ap2OSCeWEBVlDY.xui2bPuoblmWTDQwetDvMHZF1B7k.NI3Ae5Tyq',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          email: 'swapnil@mckinsey.com',
          password: '$2b$08$ap2OSCeWEBVlDY.xui2bPuoblmWTDQwetDvMHZF1B7k.NI3Ae5Tyq',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          email: 'manjeeta@mckinsey.com',
          password: '$2b$08$ap2OSCeWEBVlDY.xui2bPuoblmWTDQwetDvMHZF1B7k.NI3Ae5Tyq',
          updated_at: new Date(),
          created_at: new Date(),
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
    await queryInterface.bulkDelete('auths', null, {});
  },
};
