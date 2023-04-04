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
        // "Aganya" user's 5 skills
        {
          skillId: 'dd6856a1-78f7-4b7e-9129-e1924c949220',
          userId: '172db79d-36d2-4bf6-8f64-f93ad04199c3',
          area: 'Frontend',
          category: 'Framework',
          skill: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: 'abd5bb69-6423-4ea5-a72e-a285235f75d8',
          userId: '172db79d-36d2-4bf6-8f64-f93ad04199c3',
          area: 'Backend',
          category: 'Framework',
          skill: 'Node',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '11d9462d-0e5f-44de-829c-fec4743f212e',
          userId: '172db79d-36d2-4bf6-8f64-f93ad04199c3',
          area: 'Backend',
          category: 'Framework',
          skill: 'Express',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: 'a410a70e-fce7-4777-b859-d36255f6d64a',
          userId: '172db79d-36d2-4bf6-8f64-f93ad04199c3',
          area: 'Mobile',
          category: 'Programming Languages',
          skill: 'Swift',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: 'facbc960-e1e5-4a3a-bdf4-1e4be4ffe564',
          userId: '172db79d-36d2-4bf6-8f64-f93ad04199c3',
          area: 'Mobile',
          category: 'Framework',
          skill: 'Flutter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // for chiranshu these are the skills {'React', 'Node', 'Express', 'Swift', 'Flutter'}
        // Chiranshu's 5 skills
        {
          skillId: 'e5aba58d-0c7a-4409-af38-c1257553bb10',
          userId: '31b0f929-e974-4c4a-b369-99b0ba022e88',
          area: 'Frontend',
          category: 'Framework',
          skill: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '54ee31bd-b74f-4c31-b3d3-1d45a809e81c',
          userId: '31b0f929-e974-4c4a-b369-99b0ba022e88',
          area: 'Backend',
          category: 'Framework',
          skill: 'Node',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: 'e8c8963f-1659-49fd-988d-bc1e4e26a9a1',
          userId: '31b0f929-e974-4c4a-b369-99b0ba022e88',
          area: 'Backend',
          category: 'Framework',
          skill: 'Express',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: 'af6f1c22-f3fa-4a05-9e29-7bbbf68d9061',
          userId: '31b0f929-e974-4c4a-b369-99b0ba022e88',
          area: 'Mobile',
          category: 'Programming Languages',
          skill: 'Swift',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '20243510-d60a-4eb5-92a5-6c406143d3dc',
          userId: '31b0f929-e974-4c4a-b369-99b0ba022e88',
          area: 'Mobile',
          category: 'Framework',
          skill: 'Flutter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // add 2 skill for this usedId "9ac73ce8-e3ce-4185-b6b7-4e74fb1854d7" {'Leadership', 'Monitoring'}
        {
          skillId: 'c1b5b5a1-5b1f-4b0f-9b1f-1f5b1f4b0f9b',
          userId: '9ac73ce8-e3ce-4185-b6b7-4e74fb1854d7',
          area: 'General',
          category: 'Soft Skills',
          skill: 'Leadership',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '3d750eaf-e3ae-4a9a-806f-ae8b20732039',
          userId: '9ac73ce8-e3ce-4185-b6b7-4e74fb1854d7',
          area: 'General',
          category: 'Soft Skills',
          skill: 'Monitoring',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // for manjeeta
        {
          skillId: 'c2b5b5a1-5b1f-4b0f-9b1f-1f5b1f4b0f9b',
          userId: 'b335ccbb-381a-42ab-aec5-e5670398c0d1',
          area: 'General',
          category: 'Soft Skills',
          skill: 'Leadership',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '3c750eaf-e3ae-4a9a-806f-ae8b20732039',
          userId: 'b335ccbb-381a-42ab-aec5-e5670398c0d1',
          area: 'General',
          category: 'Soft Skills',
          skill: 'Monitoring',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // "0a9b605a-333e-4144-8ede-b6585862c462" this userId
        {
          skillId: '75d20b39-abda-4454-9c2b-43bf1fa5ae88',
          userId: '0a9b605a-333e-4144-8ede-b6585862c462',
          area: 'General',
          category: 'Soft Skills',
          skill: 'Leadership',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '7176a922-0e06-4d4d-b3e7-22cf17786c9f',
          userId: '0a9b605a-333e-4144-8ede-b6585862c462',
          area: 'General',
          category: 'Soft Skills',
          skill: 'Monitoring',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // for this userId "ef371ae0-a209-4304-9b3a-2c060c227727"
        {
          skillId: '79d20b39-abda-4454-9c2b-43bf1fa5ae88',
          userId: 'ef371ae0-a209-4304-9b3a-2c060c227727',
          area: 'General',
          category: 'Soft Skills',
          skill: 'Leadership',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '7276a922-0e06-4d4d-b3e7-22cf17786c9f',
          userId: 'ef371ae0-a209-4304-9b3a-2c060c227727',
          area: 'General',
          category: 'Soft Skills',
          skill: 'Monitoring',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '8bacf833-c89d-4f9d-845c-5d2956b9048a',
          userId: 'cba5e933-fc01-4a02-ac96-d982cd32acc7',
          area: 'Frontend',
          category: 'Framework',
          skill: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: 'c55a0669-1b99-46e2-bee8-cbd616a200cb',
          userId: 'cba5e933-fc01-4a02-ac96-d982cd32acc7',
          area: 'Backend',
          category: 'Framework',
          skill: 'Node',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: 'c536ac46-3443-424e-a24e-a5cf16ee9377',
          userId: 'cba5e933-fc01-4a02-ac96-d982cd32acc7',
          area: 'Backend',
          category: 'Framework',
          skill: 'Express',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '611f67b7-bcce-4060-9aa6-3f850eb81a04',
          userId: 'cba5e933-fc01-4a02-ac96-d982cd32acc7',
          area: 'Mobile',
          category: 'Programming Languages',
          skill: 'Swift',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          skillId: '20e5710b-4e89-4afa-a2e7-c40f52f9118f',
          userId: 'cba5e933-fc01-4a02-ac96-d982cd32acc7',
          area: 'Mobile',
          category: 'Framework',
          skill: 'Flutter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
