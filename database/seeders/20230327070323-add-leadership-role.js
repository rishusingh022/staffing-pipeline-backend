'use strict';
const replaceEnum = require('./../../src/utils/ReplaceEnum');
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
    await replaceEnum({
      tableName: 'users',
      columnName: 'role',
      enumName: 'enum_users_role',
      defaultValue: 'intern',
      newValues: ['intern', 'junior engineer', 'engineer 1', 'engineer 2', 'unspecified', 'pd', 'leadership'],
      queryInterface,
    });
    await queryInterface.bulkInsert(
      'auths',
      [
        {
          email: 'divya@mckinsey.com',
          password: '$2b$08$ap2OSCeWEBVlDY.xui2bPuoblmWTDQwetDvMHZF1B7k.NI3Ae5Tyq',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          email: 'raman@mckinsey.com',
          password: '$2b$08$ap2OSCeWEBVlDY.xui2bPuoblmWTDQwetDvMHZF1B7k.NI3Ae5Tyq',
          updated_at: new Date(),
          created_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'users',
      [
        {
          user_id: '0a9b605a-333e-4144-8ede-b6585862c462',
          name: 'Raman',
          email: 'raman@mckinsey.com',
          fmno: 123413,
          case_study_ids: ['random'],
          skills: ['Leadership', 'Monitoring'],
          guild: 'data',
          role: 'leadership',
          image: 'https://ca.slack-edge.com/E8RLKB40H-U01BQJZLQ0S-0b5e1e1b1b1a-512',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          user_id: '9ac73ce8-e3ce-4185-b6b7-4e74fb1854d7',
          name: 'Divya',
          email: 'divya@mckinsey.com',
          fmno: 123416,
          case_study_ids: ['random'],
          skills: ['Leadership', 'Monitoring'],
          guild: 'data',
          role: 'leadership',
          image: 'https://ca.slack-edge.com/E8RLKB40H-U01BQJZLQ0S-0b5e1e1b1b1a-512',
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
    await await replaceEnum({
      tableName: 'users',
      columnName: 'role',
      enumName: 'enum_users_role',
      defaultValue: 'intern',
      newValues: ['intern', 'junior engineer', 'engineer 1', 'engineer 2', 'unspecified', 'pd'],
      queryInterface,
    });
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('auths', null, {});
  },
};
