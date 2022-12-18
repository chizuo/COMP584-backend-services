'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bicycles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.STRING
      },
      frame: {
        type: Sequelize.STRING
      },
      fork: {
        type: Sequelize.STRING
      },
      headset: {
        type: Sequelize.STRING
      },
      handlebars: {
        type: Sequelize.STRING
      },
      stem: {
        type: Sequelize.STRING
      },
      crankset: {
        type: Sequelize.STRING
      },
      bottom_bracket: {
        type: Sequelize.STRING
      },
      shifters: {
        type: Sequelize.STRING
      },
      brakes: {
        type: Sequelize.STRING
      },
      brake_levers: {
        type: Sequelize.STRING
      },
      pedals: {
        type: Sequelize.STRING
      },
      saddle: {
        type: Sequelize.STRING
      },
      seatpost: {
        type: Sequelize.STRING
      },
      tires: {
        type: Sequelize.STRING
      },
      wheels: {
        type: Sequelize.STRING
      },
      accessories: {
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
    await queryInterface.dropTable('Bicycles');
  }
};