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
      'case_studies',
      [
        {
          case_study_id: 'bf59e15c-e19e-48d5-bf4a-811670d4c44b',
          name: 'fond',
          description: 'nobis in eos.',
          collaborators_ids: ['8efb2eef-b1fe-4124-bef1-6a1dcab02f85'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: 'c5b2f04b-33cd-4b40-bc87-098a2b091a2d',
          updated_at: '2023-03-17T10:39:32.148Z',
          created_at: '2023-03-17T10:39:32.148Z',
        },
        {
          case_study_id: 'dddb1641-76ab-45f5-b7ee-b54bdfccbe8b',
          name: 'front',
          description: 'Mollitia et distinctio dolor.      non. Iste est dolorum totam ut errerum eius vel laboriosam.',
          collaborators_ids: ['dc023947-5c15-4144-9457-c60cdacb3176'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: 'e51adf62-1e64-409d-8902-f7cb36eb9f9c',
          updated_at: '2023-03-17T10:39:32.148Z',
          created_at: '2023-03-17T10:39:32.148Z',
        },
        {
          case_study_id: '386cf7be-69d9-4a9b-91f5-9f38f92962d0',
          name: 'unripe',
          description:
            'Mollitia temporibus incidunt voluptatem.      corporis ratione amet at. Voluptatem exercitations magnam ut.',
          collaborators_ids: ['cd91a64d-3edc-4169-bb6a-de68d2d1d55e'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '2544abad-bda7-4029-8923-3762220e7b31',
          updated_at: '2023-03-17T10:39:32.148Z',
          created_at: '2023-03-17T10:39:32.148Z',
        },
        {
          case_study_id: 'f7617de5-573f-4db3-a0a8-ae65437416e1',
          name: 'occasional',
          description:
            'Totam rerum dicta alias eligendi      maiores eius cupiditate facere incidunt magni heiciendis beatae.',
          collaborators_ids: ['172db79d-36d2-4bf6-8f64-f93ad04199c3'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '2f45f1c6-53db-4cf0-955e-2662f9517345',
          updated_at: '2023-03-17T10:39:32.149Z',
          created_at: '2023-03-17T10:39:32.149Z',
        },
        {
          case_study_id: '9f0d6ee2-eb55-4ec3-a772-05c03f56f950',
          name: 'terrific',
          description:
            'Totam veritatis incidunt assumenda iure      . Minima qui minus et temporibus laboriosam fugiat eum nemo.',
          collaborators_ids: ['8efb2eef-b1fe-4124-bef1-6a1dcab02f85'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '4e733f84-92af-4cc9-b0ab-d71dab092e85',
          updated_at: '2023-03-17T10:39:32.149Z',
          created_at: '2023-03-17T10:39:32.149Z',
        },
        {
          case_study_id: '40fb0415-8710-47fd-a9b4-cecd38029fbb',
          name: 'nocturnal',
          description:
            'Voluptas fuga nam impedit eum      incidunt. Quia dolorum deserunt earum adipisci cupiditate ullam eaque.',
          collaborators_ids: ['a90c610c-1bd5-40c4-8b01-fdd7708f3730'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '64c8e683-7ee6-4380-a71c-e5cdb42d6a68',
          updated_at: '2023-03-17T10:39:32.149Z',
          created_at: '2023-03-17T10:39:32.149Z',
        },
        {
          case_study_id: '29204c71-cb36-449d-b050-3e497461508a',
          name: 'violent',
          description:
            'Similique praesentium dignissimos eligendi tenetur       aliquam. Eaque rerum consequpsum molestiae totam vero.',
          collaborators_ids: ['172db79d-36d2-4bf6-8f64-f93ad04199c3'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: 'c3422128-a648-4ca9-a0b5-d6dd516bf631',
          updated_at: '2023-03-17T10:39:32.149Z',
          created_at: '2023-03-17T10:39:32.149Z',
        },
        {
          case_study_id: 'd908ec87-868e-4fe2-b589-5fb27ff4ed2f',
          name: 'harmonious',
          description: ' ad necessitatibus totam iste illo explicabo vitae omnis veniam.',
          collaborators_ids: ['e69b7a9a-560b-4ff9-a28a-94a06fb77a4f'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '5f5c9464-e557-4bbf-88db-2c7baaade758',
          updated_at: '2023-03-17T10:39:32.149Z',
          created_at: '2023-03-17T10:39:32.149Z',
        },
        {
          case_study_id: 'fa970f9e-7113-4ad7-8fca-301123dce225',
          name: 'snoopy',
          description: 'Quis dignissimos a perspiciatis.       ipsam.',
          collaborators_ids: ['844cd563-04e6-4f19-894b-32e0b70cd66b'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '2b445943-a57f-44c3-8d51-b056d08820e3',
          updated_at: '2023-03-17T10:39:32.149Z',
          created_at: '2023-03-17T10:39:32.149Z',
        },
        {
          case_study_id: 'cf0e7ce2-9ec9-4af4-b9fd-cc4e21638844',
          name: 'enchanting',
          description:
            'Modi tenetur at voluptatem molestias      .  quaerat vitae nam. Amet similique corrupti omnis recusandae error quo beatae inventore eligendi.',
          collaborators_ids: ['0d7556dc-f3dc-4baf-9c34-0371b2de4a64'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '9a142bc5-268b-4a07-a4b4-c9e3bc5f64d5',
          updated_at: '2023-03-17T10:39:32.150Z',
          created_at: '2023-03-17T10:39:32.150Z',
        },
        {
          case_study_id: 'd5c05472-c4e4-4f4e-ba19-8afce48a4860',
          name: 'practical',
          description:
            'Similique eos quasi atque.      Minus non asperiores rerum tempore consectetur et maiores iure. Alias libero animi velit a sapiente.',
          collaborators_ids: ['efd12e72-ede2-4673-b25c-6fc4c4b80598'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '9a142bc5-268b-4a07-a4b4-c9e3bc5f64d5',
          updated_at: '2023-03-17T10:39:32.150Z',
          created_at: '2023-03-17T10:39:32.150Z',
        },
        {
          case_study_id: '11fd5be1-6bb8-49ed-97cd-c605342a66f4',
          name: 'jealous',
          description:
            'Debitis aliquam adipisci aut nulla     alias odit ea molestiae minima quasi natus. Optio assumenda esse reiciendis incidunt sto minima nihil.',
          collaborators_ids: ['aa97eaeb-0f4b-43ab-bafb-733576c9cfb2'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '9a142bc5-268b-4a07-a4b4-c9e3bc5f64d5',
          updated_at: '2023-03-17T10:39:32.150Z',
          created_at: '2023-03-17T10:39:32.150Z',
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
