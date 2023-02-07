'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      fmno: {
        type: Sequelize.STRING
      },
      currentEngagementIds: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      caseStudies: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      skills: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      role: {
        type: Sequelize.ENUM('intern', 'junior engineer', 'engineer 1', 'engineer 2')
      },
      guild: {
        type: Sequelize.ENUM('Swe', 'Product', 'Data')
      },
      pastEngagementId: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};