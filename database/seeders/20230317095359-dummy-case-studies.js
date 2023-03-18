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
          collaborators_ids: ['1955fc61-40fb-4e1d-82ec-05fe507f24c4'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: 'f453fd9e-18b9-4ded-81cd-d1586d40e089',
          updated_at: '2023-03-17T10:39:32.148Z',
          created_at: '2023-03-17T10:39:32.148Z',
        },
        {
          case_study_id: 'dddb1641-76ab-45f5-b7ee-b54bdfccbe8b',
          name: 'front',
          description: 'Mollitia et distinctio dolor.      non. Iste est dolorum totam ut errerum eius vel laboriosam.',
          collaborators_ids: ['3ef58f1f-5054-4d8c-b71d-117ce1538b0a'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '97785676-d279-497d-82e0-8afeddafd543',
          updated_at: '2023-03-17T10:39:32.148Z',
          created_at: '2023-03-17T10:39:32.148Z',
        },
        {
          case_study_id: '386cf7be-69d9-4a9b-91f5-9f38f92962d0',
          name: 'unripe',
          description:
            'Mollitia temporibus incidunt voluptatem.      corporis ratione amet at. Voluptatem exercitations magnam ut.',
          collaborators_ids: ['c72fe384-d593-4772-8eb2-5a2fb4c473c4'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: 'b5ce4d67-09a8-4654-83cb-6be4f1729108',
          updated_at: '2023-03-17T10:39:32.148Z',
          created_at: '2023-03-17T10:39:32.148Z',
        },
        {
          case_study_id: 'f7617de5-573f-4db3-a0a8-ae65437416e1',
          name: 'occasional',
          description:
            'Totam rerum dicta alias eligendi      maiores eius cupiditate facere incidunt magni heiciendis beatae.',
          collaborators_ids: ['cf4e1f14-69e3-4826-bd01-aa160677767a'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: 'c630de7b-98eb-45a7-8a78-85fbcf775cc0',
          updated_at: '2023-03-17T10:39:32.149Z',
          created_at: '2023-03-17T10:39:32.149Z',
        },
        {
          case_study_id: '9f0d6ee2-eb55-4ec3-a772-05c03f56f950',
          name: 'terrific',
          description:
            'Totam veritatis incidunt assumenda iure      . Minima qui minus et temporibus laboriosam fugiat eum nemo.',
          collaborators_ids: ['03def610-f9a7-41a7-bdaa-3259a0bca73a'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '343eb723-6eda-4dcc-a019-c760247cd354',
          updated_at: '2023-03-17T10:39:32.149Z',
          created_at: '2023-03-17T10:39:32.149Z',
        },
        {
          case_study_id: '40fb0415-8710-47fd-a9b4-cecd38029fbb',
          name: 'nocturnal',
          description:
            'Voluptas fuga nam impedit eum      incidunt. Quia dolorum deserunt earum adipisci cupiditate ullam eaque.',
          collaborators_ids: ['0cca8e5e-3a21-4661-aedb-6ee099ed39ff'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '30b8d73a-ecc2-4e9f-bfbb-ae2e1099071f',
          updated_at: '2023-03-17T10:39:32.149Z',
          created_at: '2023-03-17T10:39:32.149Z',
        },
        {
          case_study_id: '29204c71-cb36-449d-b050-3e497461508a',
          name: 'violent',
          description:
            'Similique praesentium dignissimos eligendi tenetur       aliquam. Eaque rerum consequpsum molestiae totam vero.',
          collaborators_ids: ['81436438-5897-4f13-a6eb-48c34f5cae69'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '9068c42c-d8ac-4161-81ec-c70b97cf20ce',
          updated_at: '2023-03-17T10:39:32.149Z',
          created_at: '2023-03-17T10:39:32.149Z',
        },
        {
          case_study_id: 'd908ec87-868e-4fe2-b589-5fb27ff4ed2f',
          name: 'harmonious',
          description: ' ad necessitatibus totam iste illo explicabo vitae omnis veniam.',
          collaborators_ids: ['d1bc26d3-09fb-41a6-a110-f4698155950c'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '001e16cd-3708-42f3-aed9-6a0c73cfb162',
          updated_at: '2023-03-17T10:39:32.149Z',
          created_at: '2023-03-17T10:39:32.149Z',
        },
        {
          case_study_id: 'fa970f9e-7113-4ad7-8fca-301123dce225',
          name: 'snoopy',
          description: 'Quis dignissimos a perspiciatis.       ipsam.',
          collaborators_ids: ['cb15e8b5-4794-4c7b-b37b-f784b26bbef7'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: 'fcc0c7ed-4e71-47b1-8b66-6346279d6c6a',
          updated_at: '2023-03-17T10:39:32.149Z',
          created_at: '2023-03-17T10:39:32.149Z',
        },
        {
          case_study_id: 'cf0e7ce2-9ec9-4af4-b9fd-cc4e21638844',
          name: 'enchanting',
          description:
            'Modi tenetur at voluptatem molestias      .  quaerat vitae nam. Amet similique corrupti omnis recusandae error quo beatae inventore eligendi.',
          collaborators_ids: ['06d65ad7-1eb7-437e-94d0-0ce6a230d6ca'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '3ddcf4c9-0e58-40f8-8b3f-a3e1588dd964',
          updated_at: '2023-03-17T10:39:32.150Z',
          created_at: '2023-03-17T10:39:32.150Z',
        },
        {
          case_study_id: 'd5c05472-c4e4-4f4e-ba19-8afce48a4860',
          name: 'practical',
          description:
            'Similique eos quasi atque.      Minus non asperiores rerum tempore consectetur et maiores iure. Alias libero animi velit a sapiente.',
          collaborators_ids: ['f6b6bea0-4f04-456f-8705-4a5ba6e08bf5'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '3fd7a703-e231-43c6-b566-30c6fb13b129',
          updated_at: '2023-03-17T10:39:32.150Z',
          created_at: '2023-03-17T10:39:32.150Z',
        },
        {
          case_study_id: '11fd5be1-6bb8-49ed-97cd-c605342a66f4',
          name: 'jealous',
          description:
            'Debitis aliquam adipisci aut nulla     alias odit ea molestiae minima quasi natus. Optio assumenda esse reiciendis incidunt sto minima nihil.',
          collaborators_ids: ['22b4d6e5-48d3-4e09-949d-20259b004646'],
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          box_link: 'https://mckinsey.box.com/s/29gnws8p3wluztn6l7ag2kd2vbrjiweg',
          engagement_id: '3e3779d5-fe2b-4bc8-b8e1-5a5333cd81cf',
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
