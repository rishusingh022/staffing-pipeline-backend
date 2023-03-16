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
      'users',
      [
        {
          user_id: 'a90c610c-1bd5-40c4-8b01-fdd7708f3731',
          name: 'AP Dhillon',
          email: 'AP_Dhillon@mckinsey.com',
          fmno: '323332',
          case_study_ids: ['7de2e0b9-a1f4-465f-b2bd-b94316cd24bc', '7de2e0b9-a1f4-465f-b2bd-b94316cd24bd'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          role: 'engineer 1',
          guild: 'swe',
          image: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
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
    await queryInterface.bulkDelete('users', null, {});
  },
};
