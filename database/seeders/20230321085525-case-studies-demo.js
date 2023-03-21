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
    await queryInterface.bulkDelete('case_studies', null, {});
    await queryInterface.bulkInsert(
      'case_studies',
      [
        {
          case_study_id: 'bf59e15c-e19e-48d5-bf4a-811670d4c44b',
          name: 'The Marshmallow Experiment',
          description:
            'The Marshmallow Experiment is a classic study in delayed gratification. It was conducted by Walter Mischel, a psychologist at Stanford University, in the early 1970s.',
          collaborators_ids: [
            '844cd563-04e6-4f19-894b-32e0b70cd66b',
            '0d7556dc-f3dc-4baf-9c34-0371b2de4a64',
            'efd12e72-ede2-4673-b25c-6fc4c4b80598',
            'e69b7a9a-560b-4ff9-a28a-94a06fb77a4f',
            'aa97eaeb-0f4b-43ab-bafb-733576c9cfb2',
          ],
          image: 'https://i.ytimg.com/vi/2xMgHKxukr0/maxresdefault.jpg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '4e733f84-92af-4cc9-b0ab-d71dab092e85',
          updated_at: '2023-03-17T10:39:32.148Z',
          created_at: '2023-03-17T10:39:32.148Z',
        },
        {
          case_study_id: 'dddb1641-76ab-45f5-b7ee-b54bdfccbe8b',
          name: 'The Bystander Effect',
          description:
            'The bystander effect, or bystander apathy, is a social psychological theory that states that individuals are less likely to offer help to a victim in presence of other people.',
          collaborators_ids: [
            '0d7556dc-f3dc-4baf-9c34-0371b2de4a64',
            'efd12e72-ede2-4673-b25c-6fc4c4b80598',
            'e69b7a9a-560b-4ff9-a28a-94a06fb77a4f',
            'aa97eaeb-0f4b-43ab-bafb-733576c9cfb2',
            '172db79d-36d2-4bf6-8f64-f93ad04199c3',
          ],
          image: 'https://i.ytimg.com/vi/GZgIYGaeWy0/maxresdefault.jpg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '64c8e683-7ee6-4380-a71c-e5cdb42d6a68',
          updated_at: '2023-03-17T10:39:32.148Z',
          created_at: '2023-03-17T10:39:32.148Z',
        },
        {
          case_study_id: '386cf7be-69d9-4a9b-91f5-9f38f92962d0',
          name: 'Asch Conformity Study',
          description:
            'In psychology, the Asch conformity experiments or the Asch paradigm were a series of studies directed by Solomon Asch studying if and how individuals yielded to or defied a majority group and the effect of such influences on beliefs and opinions.',
          collaborators_ids: ['31b0f929-e974-4c4a-b369-99b0ba022e88', 'cba5e933-fc01-4a02-ac96-d982cd32acc7'],
          image: 'https://practicalpie.com/wp-content/uploads/2019/02/Asch-Line-Study-Example.png',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: 'c3422128-a648-4ca9-a0b5-d6dd516bf631',

          updated_at: '2023-03-17T10:39:32.148Z',
          created_at: '2023-03-17T10:39:32.148Z',
        },
        {
          case_study_id: 'f7617de5-573f-4db3-a0a8-ae65437416e1',
          name: 'The Bobo Doll Experiment',
          description:
            'The Bobo doll experiment is a classic study in social learning theory. It was conducted by Albert Bandura, a psychologist at Stanford University, in the early 1960s.',
          collaborators_ids: [
            '844cd563-04e6-4f19-894b-32e0b70cd66b',
            '0d7556dc-f3dc-4baf-9c34-0371b2de4a64',
            'efd12e72-ede2-4673-b25c-6fc4c4b80598',
          ],
          image: 'https://l450v.alamy.com/450v/2h6hg9w/bobo-doll-experiment-albert-bandura-2h6hg9w.jpg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '5f5c9464-e557-4bbf-88db-2c7baaade758',

          updated_at: '2023-03-17T10:39:32.148Z',
          created_at: '2023-03-17T10:39:32.148Z',
        },
        {
          case_study_id: '9f0d6ee2-eb55-4ec3-a772-05c03f56f950',
          name: 'Stanford Prison Experiment.',
          description:
            "It was a two-week simulation of a prison environment that examined the effects of situational variables on participants' reactions and behaviors. ",
          collaborators_ids: [
            'aa97eaeb-0f4b-43ab-bafb-733576c9cfb2',
            '172db79d-36d2-4bf6-8f64-f93ad04199c3',
            '31b0f929-e974-4c4a-b369-99b0ba022e88',
            'cba5e933-fc01-4a02-ac96-d982cd32acc7',
          ],
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEG5UcJVQHrob1tXDNwEXLKNB-BLVeWns8p0M1cVF50mb1Ye7_46MhpHd_h8DSgXqedI&usqp=CAU',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '9a142bc5-268b-4a07-a4b4-c9e3bc5f64d5',

          updated_at: '2023-03-17T10:39:32.148Z',
          created_at: '2023-03-17T10:39:32.148Z',
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
