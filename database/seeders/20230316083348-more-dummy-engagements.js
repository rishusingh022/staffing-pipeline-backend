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
    // remove a row from the engagements table with engagement id as 'd87ffb9b-06f2-4adb-8b6b-140995d97b04'
    await queryInterface.bulkDelete('engagements', { engagement_id: 'd87ffb9b-06f2-4adb-8b6b-140995d97b04' }, {});
    // remove a row from the engagements table with engagement id as engagement_id: 'be753dd4-7a33-449a-956a-a359b13282f3',
    await queryInterface.bulkDelete('engagements', { engagement_id: 'be753dd4-7a33-449a-956a-a359b13282f3' }, {});

    await queryInterface.bulkInsert(
      'engagements',
      [
        {
          engagement_id: 'd87ffb9b-06f2-4adb-8b6b-140995d97b04',
          name: 'Study 1',
          tags: ['urgent'],
          skills: ['Node JS', 'Angular', 'Python'],
          guild: 'swe',
          case_study_ids: ['9225cf89-97f7-4ec8-8c36-54c68842a2e6'],
          status: 'ongoing',
          start_date: new Date(Date.now() - 6.048e8),
          end_date: new Date(Date.now() + 6.048e8 * 2),
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          engagement_id: 'be753dd4-7a33-449a-956a-a359b13282f3',
          name: 'Study 1',
          tags: ['urgent'],
          skills: ['Node JS', 'Django', 'React'],
          guild: 'swe',
          case_study_ids: ['9225cf89-97f7-4ec8-8c36-54c68842a2e7'],
          status: 'ongoing',
          start_date: new Date(Date.now() - 6.048e8 * 1),
          end_date: new Date(Date.now() + 6.048e8 * 3),
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          engagement_id: 'be753dd4-7a33-449a-956a-a359b13282f4',
          name: 'Study 1',
          tags: ['important'],
          skills: ['Node JS', 'React', 'Java'],
          guild: 'product',
          case_study_ids: ['7de2e0b9-a1f4-465f-b2bd-b94316cd24bc'],
          status: 'ongoing',
          start_date: new Date(Date.now() - 6.048e8 * 3),
          end_date: new Date(Date.now() + 6.048e8 * 5),
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          engagement_id: 'be753dd4-7a33-449a-956a-a359b13282f5',
          name: 'Two hearts never break the same',
          tags: ['important'],
          skills: ['Node JS', 'React', 'Java'],
          guild: 'product',
          case_study_ids: ['7de2e0b9-a1f4-465f-b2bd-b94316cd24bc'],
          status: 'ongoing',
          start_date: new Date(Date.now() - 6.048e8 * 4),
          end_date: new Date(Date.now() + 6.048e8 * 6),
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          engagement_id: 'be753dd4-7a33-449a-956a-a359b13282f6',
          name: 'Hidden Gems',
          tags: ['important'],
          skills: ['Node JS', 'React', 'Java'],
          guild: 'product',
          case_study_ids: ['7de2e0b9-a1f4-465f-b2bd-b94316cd24bc'],
          status: 'ongoing',
          start_date: new Date(Date.now() - 6.048e8 * 5),
          end_date: new Date(Date.now() + 6.048e8 * 7),
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
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
  },
};
