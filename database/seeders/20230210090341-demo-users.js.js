'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'users',
      [
        {
          user_id: 'a90c610c-1bd5-40c4-8b01-fdd7708f3730',
          email: 'johndoe@mckinsey.com',
          name: 'john Doe',
          fmno: '328060',
          case_study_ids: ['9225cf89-97f7-4ec8-8c36-54c68842a2e6'],
          skills: ['React', 'Node', 'GoLang'],
          role: 'pd',
          guild: 'product',
          image: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
          updated_at: new Date(),
          created_at: new Date(),
        },
        {
          user_id: '8efb2eef-b1fe-4124-bef1-6a1dcab02f85',
          name: 'Jane Doe',
          email: 'janedoe@mckinsey.com',
          fmno: '328560',
          case_study_ids: ['7de2e0b9-a1f4-465f-b2bd-b94316cd24bc'],
          skills: ['React', 'Node', 'Java', 'Python', 'C++'],
          role: 'junior engineer',
          guild: 'swe',
          image: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
          updated_at: new Date(),
          created_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('users', null, {});
  },
};
