const { faker } = require('@faker-js/faker');
("use strict");

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
    const dummyJSON = [];
    for (let i = 0; i < 5; i++) {
      dummyJSON.push({
        username: faker.name.firstName(),
        email: faker.internet.email(),
        zipCode: parseInt(faker.address.zipCode()),
				password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("Users", dummyJSON, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
		await queryInterface.bulkDelete('Users', null, {});
  },
};
