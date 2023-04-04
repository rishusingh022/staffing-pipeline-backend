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
      'skills',
      [
        // Khushil's 5 skills
        {
          skillId: 'f820acb2-367a-4677-b7ce-1f4d9bbdbeb6',
          userId: '844cd563-04e6-4f19-894b-32e0b70cd66b',
          area: 'Frontend',
          category: 'Framework',
          skill: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: 'a10ebb88-a46f-42e4-a90b-097eba759252',
          userId: '844cd563-04e6-4f19-894b-32e0b70cd66b',
          area: 'Backend',
          category: 'Framework',
          skill: 'Express',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '0da62bc6-717d-401c-a660-a3005abfa54a',
          userId: '844cd563-04e6-4f19-894b-32e0b70cd66b',
          area: 'Frontend',
          category: 'Framework',
          skill: 'Angular',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '86f0faa7-2afc-4016-a154-acc73464cd63',
          userId: '844cd563-04e6-4f19-894b-32e0b70cd66b',
          area: 'Backend',
          category: 'Framework',
          skill: 'NestJS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: 'f5e41a98-dbfa-49db-be37-85617992e81d',
          userId: '844cd563-04e6-4f19-894b-32e0b70cd66b',
          area: 'Frontend',
          category: 'Markup Languages',
          skill: 'HTML',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Sukhman's 5 skills
        {
          skillId: '65f9fcda-94f8-4473-86c7-39d167f62a0e',
          userId: '0d7556dc-f3dc-4baf-9c34-0371b2de4a64',
          area: 'Frontend',
          category: 'Framework',
          skill: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '882f8ee6-28a1-4684-96d3-6c85d0fdbb56',
          userId: '0d7556dc-f3dc-4baf-9c34-0371b2de4a64',
          area: 'Backend',
          category: 'Framework',
          skill: 'Express',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '4d02a3bd-3a03-4fed-ba52-cb26ba7ef18a',
          userId: '0d7556dc-f3dc-4baf-9c34-0371b2de4a64',
          area: 'Frontend',
          category: 'Framework',
          skill: 'Angular',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: 'e2295383-d7e6-414a-b7bd-2031630ae21b',
          userId: '0d7556dc-f3dc-4baf-9c34-0371b2de4a64',
          area: 'Backend',
          category: 'Framework',
          skill: 'NestJS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '42f2b072-13c4-4c53-92af-069ee00a697e',
          userId: '0d7556dc-f3dc-4baf-9c34-0371b2de4a64',
          area: 'Frontend',
          category: 'Markup Languages',
          skill: 'HTML',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Harsh 5 skills
        {
          skillId: '30eacccd-e836-48b0-8ed5-f72bec806f35',
          userId: 'efd12e72-ede2-4673-b25c-6fc4c4b80598',

          area: 'Frontend',
          category: 'Framework',
          skill: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: 'bcf3f42a-3b80-4f4a-9617-a445df1f6127',
          userId: 'efd12e72-ede2-4673-b25c-6fc4c4b80598',

          area: 'Backend',
          category: 'Programming Languages',
          skill: 'Python',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '7f5021c4-ca63-41fa-9264-fa15b0745d91',
          userId: 'efd12e72-ede2-4673-b25c-6fc4c4b80598',

          area: 'Frontend',
          category: 'Framework',
          skill: 'Angular',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '46c0c0e2-c125-42a9-b686-8b9b4ea66d56',
          userId: 'efd12e72-ede2-4673-b25c-6fc4c4b80598',

          area: 'Backend',
          category: 'Framework',
          skill: 'NestJS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '7a154429-3dd8-4bf1-9e10-6cec02c9da33',
          userId: 'efd12e72-ede2-4673-b25c-6fc4c4b80598',

          area: 'Frontend',
          category: 'Markup Languages',
          skill: 'HTML',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Promit's 5 skills
        {
          skillId: 'b7f344be-bb8c-4f83-8783-fbc003d7861b',
          userId: 'e69b7a9a-560b-4ff9-a28a-94a06fb77a4f',
          area: 'Frontend',
          category: 'Framework',
          skill: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '49df41cb-34bb-4e7f-a6ea-5b5f695414c8',
          userId: 'e69b7a9a-560b-4ff9-a28a-94a06fb77a4f',
          area: 'Backend',
          category: 'Programming Languages',
          skill: 'Python',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '6a8d5e04-9db2-4aad-875c-142b5011267a',
          userId: 'e69b7a9a-560b-4ff9-a28a-94a06fb77a4f',
          area: 'Frontend',
          category: 'Markup Languages',
          skill: 'CSS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '75cd6ba2-1941-48f2-b928-5aba690efab1',
          userId: 'e69b7a9a-560b-4ff9-a28a-94a06fb77a4f',
          area: 'Backend',
          category: 'Framework',
          skill: 'NestJS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '4e8f6b07-ceb2-4fce-8af2-f65233431136',
          userId: 'e69b7a9a-560b-4ff9-a28a-94a06fb77a4f',
          area: 'Frontend',
          category: 'Markup Languages',
          skill: 'HTML',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Sneha's 5 skills
        {
          skillId: '3bcdede4-091b-4c82-9f35-4997324c272a',
          userId: 'aa97eaeb-0f4b-43ab-bafb-733576c9cfb2',
          area: 'Frontend',
          category: 'Framework',
          skill: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '8a4c4084-08a1-4d7a-87c5-b945bad2e98d',
          userId: 'aa97eaeb-0f4b-43ab-bafb-733576c9cfb2',
          area: 'Backend',
          category: 'Programming Languages',
          skill: 'Python',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: 'ef3af15a-ace0-4547-a12f-275dc3ff3c8b',
          userId: 'aa97eaeb-0f4b-43ab-bafb-733576c9cfb2',
          area: 'Frontend',
          category: 'Markup Languages',
          skill: 'CSS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: 'ef24b9c6-d144-4117-9300-1dfa28003348',
          userId: 'aa97eaeb-0f4b-43ab-bafb-733576c9cfb2',
          area: 'Backend',
          category: 'Framework',
          skill: 'NestJS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 'aa97eaeb-0f4b-43ab-bafb-733576c9cfb2',
          skillId: '42fd73f0-ac94-49b0-a17b-30f32b96d976',
          area: 'Backend',
          category: 'Databases',
          skill: 'PostgreSQL',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'm_role_features',
      [
        {
          role_id: '7739b2b2-4dd2-41ee-aa3e-782783939127',
          feature_id: '347c4695-ecdc-458c-b091-11204c27be85',
          created_at: new Date(),
          updated_at: new Date(),
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
    await queryInterface.bulkDelete('skills', null, {});
    await queryInterface.bulkDelete('m_role_features', null, {});
  },
};
