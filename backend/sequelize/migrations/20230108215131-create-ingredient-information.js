'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ingredient_Information', {
      ingredient_info_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ingredient_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      catagory_id: {
        type: Sequelize.STRING
      },
      date_of_last_use: {
        type: Sequelize.DATE
      },
      amount_last_used: {
        type: Sequelize.INTEGER
      },
      amount_last_purchased: {
        type: Sequelize.INTEGER
      },
      cumulative_usage: {
        type: Sequelize.INTEGER
      },
      low_limit: {
        type: Sequelize.INTEGER
      },
      high_limit: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ingredient_Information');
  }
};