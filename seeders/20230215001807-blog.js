'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Blogs', [{
        title: 'My First Blog',
        content: 'This is where I will write about stuff',
        category: 'Life',
        createdAt: new Date(),
        updatedAt: new Date()
      }]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Blogs', null, {});
  }
};
