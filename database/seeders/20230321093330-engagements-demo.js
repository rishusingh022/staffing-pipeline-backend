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
    await queryInterface.bulkDelete('engagements', null, {});
    await queryInterface.bulkInsert(
      'engagements',
      [
        {
          engagement_id: '4e733f84-92af-4cc9-b0ab-d71dab092e85',
          name: 'NexusForge',
          charge_code: 'X2FEO7Q',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: ['bf59e15c-e19e-48d5-bf4a-811670d4c44b', 'dddb1641-76ab-45f5-b7ee-b54bdfccbe8b'],
          status: 'ongoing',
          start_date: '2022-06-30T17:10:37.318Z',
          end_date: '2023-04-21T01:48:20.686Z',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV5jNJ3xLdWGHgLW849r26Iee_EWt2BvVxJw&usqp=CAU',
          updated_at: '2023-01-17T10:32:27.625Z',
          created_at: '2023-01-17T10:32:27.625Z',
        },
        {
          charge_code: '3QXQ1BF',
          engagement_id: '64c8e683-7ee6-4380-a71c-e5cdb42d6a68',
          name: 'SkyNet Analytics',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: ['386cf7be-69d9-4a9b-91f5-9f38f92962d0', 'f7617de5-573f-4db3-a0a8-ae65437416e1'],
          status: 'completed',
          start_date: '2022-09-21T19:26:59.008Z',
          end_date: '2023-06-16T00:39:12.908Z',
          image: 'https://cdn.cdnlogo.com/logos/s/25/skynet.svg',
          updated_at: '2022-01-17T10:32:27.625Z',
          created_at: '2022-01-17T10:32:27.625Z',
        },
        {
          engagement_id: 'c3422128-a648-4ca9-a0b5-d6dd516bf631',
          charge_code: 'UGEOHQJ',
          name: 'Mind Wave',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: ['9f0d6ee2-eb55-4ec3-a772-05c03f56f950'],
          status: 'upcoming',
          start_date: '2022-11-01T16:49:45.674Z',
          end_date: '2023-12-22T14:55:14.021Z',
          image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bad8bd13938867.5627a9c4a6869.png',
          updated_at: '2022-03-17T10:32:27.625Z',
          created_at: '2022-03-17T10:32:27.625Z',
        },
        {
          engagement_id: '5f5c9464-e557-4bbf-88db-2c7baaade758',
          charge_code: 'VWX2JTS',
          name: 'Cybersphere',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: ['f7617de5-573f-4db3-a0a8-ae65437416e1', 'dddb1641-76ab-45f5-b7ee-b54bdfccbe8b'],
          status: 'upcoming',
          start_date: '2022-12-19T19:46:10.126Z',
          end_date: '2023-08-22T11:50:48.041Z',
          image: 'https://dcassetcdn.com/design_img/2481523/508385/508385_13154077_2481523_8082e516_image.jpg',
          updated_at: '2023-02-17T10:32:27.625Z',
          created_at: '2023-02-17T10:32:27.625Z',
        },
        {
          engagement_id: '2b445943-a57f-44c3-8d51-b056d08820e3',
          charge_code: '7XSMH9D',
          name: 'ZenithOS',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: [
            'bf59e15c-e19e-48d5-bf4a-811670d4c44b',
            '386cf7be-69d9-4a9b-91f5-9f38f92962d0',
            '9f0d6ee2-eb55-4ec3-a772-05c03f56f950',
          ],
          status: 'upcoming',
          start_date: '2023-02-22T23:01:54.978Z',
          end_date: '2023-03-30T21:59:54.378Z',
          image: 'https://i.ytimg.com/vi/yomWJnbqFwQ/hqdefault.jpg',
          updated_at: '2023-02-17T10:32:27.625Z',
          created_at: '2023-02-17T10:32:27.625Z',
        },
        {
          engagement_id: '9a142bc5-268b-4a07-a4b4-c9e3bc5f64d5',
          name: 'CodePilot',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: ['bf59e15c-e19e-48d5-bf4a-811670d4c44b'],
          status: 'completed',
          start_date: '2022-11-07T02:36:54.185Z',
          charge_code: 'XLW6536',
          end_date: '2023-07-02T17:33:19.266Z',
          image:
            'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/r9xxm3kgr2ymwudgqqjz',
          updated_at: '2022-05-17T10:32:27.625Z',
          created_at: '2022-05-17T10:32:27.625Z',
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
    await queryInterface.bulkDelete('engagements', null, {});
  },
};
