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
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkInsert(
      'users',
      [
        {
          user_id: '844cd563-04e6-4f19-894b-32e0b70cd66b',
          name: 'Khushil',
          email: 'Khushil@mckinsey.com',
          fmno: 123450,
          case_study_ids: ['bf59e15c-e19e-48d5-bf4a-811670d4c44b', 'f7617de5-573f-4db3-a0a8-ae65437416e1'],
          skills: ['React', 'Node', 'Express'],
          role: 'intern',
          guild: 'swe',
          image: 'https://ca.slack-edge.com/E8RLKB40H-U04ABJ02XQD-343a519f23c2-512',
          updated_at: '2023-03-17T10:15:05.359Z',
          created_at: '2023-03-17T10:15:05.359Z',
        },
        {
          user_id: '0d7556dc-f3dc-4baf-9c34-0371b2de4a64',
          name: 'Sukhman',
          email: 'Sukhman@mckinsey.com',
          fmno: 123451,
          case_study_ids: [
            'bf59e15c-e19e-48d5-bf4a-811670d4c44b',
            'dddb1641-76ab-45f5-b7ee-b54bdfccbe8b',
            'f7617de5-573f-4db3-a0a8-ae65437416e1',
          ],
          skills: ['React', 'Node', 'Express', 'Swift', 'Flutter'],
          role: 'intern',
          guild: 'swe',
          image: 'https://ca.slack-edge.com/E8RLKB40H-U04A00X7S2K-3513345f1421-512',
          updated_at: '2023-03-17T10:15:05.360Z',
          created_at: '2023-03-17T10:15:05.360Z',
        },
        {
          user_id: 'efd12e72-ede2-4673-b25c-6fc4c4b80598',
          name: 'Harsh',
          email: 'harsh@mckinsey.com',
          fmno: 123452,
          case_study_ids: [
            'bf59e15c-e19e-48d5-bf4a-811670d4c44b',
            'dddb1641-76ab-45f5-b7ee-b54bdfccbe8b',
            'f7617de5-573f-4db3-a0a8-ae65437416e1',
          ],
          skills: ['React', 'Node', 'Express', 'Swift', 'Flutter'],
          role: 'intern',
          guild: 'swe',
          image: 'https://ca.slack-edge.com/E8RLKB40H-U04BN6K445D-5b3cb2699313-512',
          updated_at: '2023-03-17T10:15:05.360Z',
          created_at: '2023-03-17T10:15:05.360Z',
        },
        {
          user_id: 'e69b7a9a-560b-4ff9-a28a-94a06fb77a4f',
          name: 'Promit',
          email: 'promit@mckinsey.com',
          fmno: 123453,
          case_study_ids: ['bf59e15c-e19e-48d5-bf4a-811670d4c44b', 'dddb1641-76ab-45f5-b7ee-b54bdfccbe8b'],
          skills: ['React', 'Node', 'Express', 'Swift', 'Flutter'],
          role: 'intern',
          guild: 'swe',
          image: 'https://ca.slack-edge.com/E8RLKB40H-U04AEDS8ZT5-4207b420e067-512',
          updated_at: '2023-03-17T10:15:05.360Z',
          created_at: '2023-03-17T10:15:05.360Z',
        },
        {
          user_id: 'aa97eaeb-0f4b-43ab-bafb-733576c9cfb2',
          name: 'Sneha',
          email: 'sneha@mckinsey.com',
          fmno: 123454,
          case_study_ids: [
            'bf59e15c-e19e-48d5-bf4a-811670d4c44b',
            'dddb1641-76ab-45f5-b7ee-b54bdfccbe8b',
            '9f0d6ee2-eb55-4ec3-a772-05c03f56f950',
          ],
          skills: ['React', 'Node', 'Express', 'Swift', 'Flutter'],
          role: 'intern',
          guild: 'swe',
          image: 'https://ca.slack-edge.com/E8RLKB40H-U04AT5ZMMBK-7ba1a446b55a-512',
          updated_at: '2023-03-17T10:15:05.360Z',
          created_at: '2023-03-17T10:15:05.360Z',
        },
        {
          user_id: '172db79d-36d2-4bf6-8f64-f93ad04199c3',
          name: 'Aganya',
          email: 'aganya@mckinsey.com',
          fmno: 123455,
          case_study_ids: ['dddb1641-76ab-45f5-b7ee-b54bdfccbe8b', '9f0d6ee2-eb55-4ec3-a772-05c03f56f950'],
          skills: ['React', 'Node', 'Express', 'Swift', 'Flutter'],
          role: 'intern',
          guild: 'swe',
          image: 'https://ca.slack-edge.com/E8RLKB40H-U04AEDD0LKD-g579684e8cdf-512',
          updated_at: '2023-03-17T10:15:05.360Z',
          created_at: '2023-03-17T10:15:05.360Z',
        },
        {
          user_id: '31b0f929-e974-4c4a-b369-99b0ba022e88',
          name: 'Chiranshu',
          email: 'chiranshu@mckinsey.com',
          fmno: 123456,
          case_study_ids: ['386cf7be-69d9-4a9b-91f5-9f38f92962d0', '9f0d6ee2-eb55-4ec3-a772-05c03f56f950'],
          skills: ['React', 'Node', 'Express', 'Swift', 'Flutter'],
          role: 'intern',
          guild: 'swe',
          image: 'https://ca.slack-edge.com/E8RLKB40H-U04ABJ4UDPX-g3a14ddab8c2-512',
          updated_at: '2023-03-17T10:15:05.360Z',
          created_at: '2023-03-17T10:15:05.360Z',
        },
        {
          user_id: 'cba5e933-fc01-4a02-ac96-d982cd32acc7',
          name: 'Swapnil',
          email: 'swapnil@mckinsey.com',
          fmno: 123457,
          case_study_ids: ['386cf7be-69d9-4a9b-91f5-9f38f92962d0', '9f0d6ee2-eb55-4ec3-a772-05c03f56f950'],
          skills: ['React', 'Node', 'Express', 'Swift', 'Flutter'],
          role: 'intern',
          guild: 'product',
          image: 'https://ca.slack-edge.com/E8RLKB40H-U04BW4XA8BG-10f1b162b2f0-512',
          updated_at: '2023-03-17T10:15:05.360Z',
          created_at: '2023-03-17T10:15:05.360Z',
        },
        {
          user_id: 'ef371ae0-a209-4304-9b3a-2c060c227727',
          name: 'Shilpa',
          email: 'shilpa@mckinsey.com',
          fmno: 123458,
          case_study_ids: ['random'],
          skills: ['Leadership', 'Monitoring'],
          role: 'pd',
          guild: 'data',
          image: 'https://ca.slack-edge.com/E8RLKB40H-W953G89PF-600d59e016d5-512',
          updated_at: '2023-03-17T10:15:05.360Z',
          created_at: '2023-03-17T10:15:05.360Z',
        },
        {
          user_id: 'b335ccbb-381a-42ab-aec5-e5670398c0d1',
          name: 'Manjeeta',
          email: 'manjeeta@mckinsey.com',
          fmno: 123459,
          case_study_ids: ['random'],
          skills: ['Leadership', 'Monitoring'],
          role: 'pd',
          guild: 'data',
          image: 'https://ca.slack-edge.com/E8RLKB40H-WC40C6188-edb75e6c3e84-512',
          updated_at: '2023-03-17T10:15:05.360Z',
          created_at: '2023-03-17T10:15:05.360Z',
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
