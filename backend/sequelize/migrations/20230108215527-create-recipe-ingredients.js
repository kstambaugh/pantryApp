'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Recipe_Ingredients', {
      recipe_ingredient_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recipe_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ingredient_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      amount_used: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      unit_of_measure: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Recipe_Ingredients');
  }
};