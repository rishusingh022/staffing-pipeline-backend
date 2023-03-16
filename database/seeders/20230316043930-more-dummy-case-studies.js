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
    await queryInterface.bulkInsert('case_studies', [
      {
        case_study_id: '7de2e0b9-a1f4-465f-b2bd-b94316cd24be',
        name: 'Two hearts never break the same',
        description: 'Pop album',
        collaborators_ids: ['a90c610c-1bd5-40c4-8b01-fdd7708f3731'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
        box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
        engagement_id: 'be753dd4-7a33-449a-956a-a359b13282f5',
        updated_at: new Date(),
        created_at: new Date(),
      },
      {
        case_study_id: '7de2e0b9-a1f4-465f-b2bd-b94316cd24bd',
        name: 'Hidden Gems',
        description: 'Pop album',
        collaborators_ids: ['a90c610c-1bd5-40c4-8b01-fdd7708f3731'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
        box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
        engagement_id: 'be753dd4-7a33-449a-956a-a359b13282f6',
        updated_at: new Date(),
        created_at: new Date(),
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
    await queryInterface.bulkDelete('case_studies', null, {});
  },
};
