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
      'engagements',
      [
        {
          engagement_id: 'c5b2f04b-33cd-4b40-bc87-098a2b091a2d',
          name: 'Photo',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: ['bf59e15c-e19e-48d5-bf4a-811670d4c44b'],
          status: 'ongoing',
          start_date: '2022-10-15T14:11:11.348Z',
          end_date: '2023-11-12T14:27:30.467Z',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          updated_at: '2023-03-17T10:32:27.625Z',
          created_at: '2023-03-17T10:32:27.625Z',
        },
        {
          engagement_id: 'e51adf62-1e64-409d-8902-f7cb36eb9f9c',
          name: 'Roll deep',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: ['dddb1641-76ab-45f5-b7ee-b54bdfccbe8b'],
          status: 'ongoing',
          start_date: '2022-11-18T20:16:48.904Z',
          end_date: '2023-05-13T15:23:05.973Z',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          updated_at: '2023-03-17T10:32:27.625Z',
          created_at: '2023-03-17T10:32:27.625Z',
        },
        {
          engagement_id: '2544abad-bda7-4029-8923-3762220e7b31',
          name: 'Same Town',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: ['665a3abe-14a8-400e-aaa1-241ebcb9dfd0'],
          status: 'ongoing',
          start_date: '2022-03-29T18:41:57.440Z',
          end_date: '2024-02-20T12:04:32.228Z',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          updated_at: '2023-03-17T10:32:27.625Z',
          created_at: '2023-03-17T10:32:27.625Z',
        },
        {
          engagement_id: '2f45f1c6-53db-4cf0-955e-2662f9517345',
          name: 'Why Arjan',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: ['386cf7be-69d9-4a9b-91f5-9f38f92962d0', 'f7617de5-573f-4db3-a0a8-ae65437416e1'],
          status: 'ongoing',
          start_date: '2022-07-20T03:37:08.595Z',
          end_date: '2023-05-10T11:56:01.328Z',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          updated_at: '2023-03-17T10:32:27.625Z',
          created_at: '2023-03-17T10:32:27.625Z',
        },
        {
          engagement_id: '4e733f84-92af-4cc9-b0ab-d71dab092e85',
          name: 'Baller',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: ['9f0d6ee2-eb55-4ec3-a772-05c03f56f950', '40fb0415-8710-47fd-a9b4-cecd38029fbb'],
          status: 'ongoing',
          start_date: '2022-06-30T17:10:37.318Z',
          end_date: '2023-04-21T01:48:20.686Z',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          updated_at: '2023-03-17T10:32:27.625Z',
          created_at: '2023-03-17T10:32:27.625Z',
        },
        {
          engagement_id: '64c8e683-7ee6-4380-a71c-e5cdb42d6a68',
          name: 'Friends Matter',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: ['29204c71-cb36-449d-b050-3e497461508a'],
          status: 'ongoing',
          start_date: '2022-09-21T19:26:59.008Z',
          end_date: '2023-06-16T00:39:12.908Z',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          updated_at: '2023-03-17T10:32:27.625Z',
          created_at: '2023-03-17T10:32:27.625Z',
        },
        {
          engagement_id: 'c3422128-a648-4ca9-a0b5-d6dd516bf631',
          name: 'My Dear Punjab',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: ['d908ec87-868e-4fe2-b589-5fb27ff4ed2f'],
          status: 'ongoing',
          start_date: '2022-11-01T16:49:45.674Z',
          end_date: '2023-12-22T14:55:14.021Z',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          updated_at: '2023-03-17T10:32:27.625Z',
          created_at: '2023-03-17T10:32:27.625Z',
        },
        {
          engagement_id: '5f5c9464-e557-4bbf-88db-2c7baaade758',
          name: 'Loud',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: ['e457db2f-33d8-47b4-bd54-3e8c1900c084'],
          status: 'ongoing',
          start_date: '2022-12-19T19:46:10.126Z',
          end_date: '2023-08-22T11:50:48.041Z',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          updated_at: '2023-03-17T10:32:27.625Z',
          created_at: '2023-03-17T10:32:27.625Z',
        },
        {
          engagement_id: '2b445943-a57f-44c3-8d51-b056d08820e3',
          name: 'Unforgettable',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: ['1da9fbc4-b971-40cd-8bb6-ceda726a3582'],
          status: 'ongoing',
          start_date: '2023-02-22T23:01:54.978Z',
          end_date: '2023-03-30T21:59:54.378Z',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          updated_at: '2023-03-17T10:32:27.625Z',
          created_at: '2023-03-17T10:32:27.625Z',
        },
        {
          engagement_id: '9a142bc5-268b-4a07-a4b4-c9e3bc5f64d5',
          name: 'YKWIM',
          tags: ['urgent'],
          skills: ['React', 'Node', 'Pop', 'Swift', 'C#'],
          guild: 'swe',
          case_study_ids: ['11fd5be1-6bb8-49ed-97cd-c605342a66f4'],
          status: 'ongoing',
          start_date: '2022-11-07T02:36:54.185Z',
          end_date: '2023-07-02T17:33:19.266Z',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          updated_at: '2023-03-17T10:32:27.625Z',
          created_at: '2023-03-17T10:32:27.625Z',
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
