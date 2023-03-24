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
    // update the image of the table row where name is 'Shilpa'
    await queryInterface.bulkUpdate(
      'users',
      { image: 'https://ca.slack-edge.com/E8RLKB40H-U04ABJ4UDPX-g3a14ddab8c2-512' },
      { name: 'Shilpa' }
    );
    await queryInterface.bulkUpdate(
      'users',
      { image: 'https://ca.slack-edge.com/E8RLKB40H-U01BQJZLQ0S-0b5e1e1b1b1a-512' },
      { name: 'Manjeeta' }
    );
    await queryInterface.bulkUpdate(
      'users',
      { image: 'https://ca.slack-edge.com/E8RLKB40H-U04ABJ4UDPX-afd4ee872e59-512' },
      { name: 'Chiranshu' }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkUpdate(
      'users',
      {
        image: 'https://ca.slack-edge.com/E8RLKB40H-U01BQJZLQ0S-0b5e1e1b1b1a-512',
      },
      { name: 'Manjeeta' }
    );
    await queryInterface.bulkUpdate(
      'users',
      {
        image: 'https://ca.slack-edge.com/E8RLKB40H-U01BQJZLQ0S-0b5e1e1b1b1a-512',
      },
      { name: 'Shilpa' }
    );
    await queryInterface.bulkUpdate(
      'users',
      {
        image: 'https://ca.slack-edge.com/E8RLKB40H-U01BQJZLQ0S-0b5e1e1b1b1a-512',
      },
      { name: 'Chiranshu' }
    );
  },
};
