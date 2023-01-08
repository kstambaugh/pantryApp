'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe_Ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe_Ingredients.init({
    recipe_id: DataTypes.INTEGER,
    ingredient_id: DataTypes.INTEGER,
    amount_used: DataTypes.INTEGER,
    unit_of_measure: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recipe_Ingredients',
  });
  return Recipe_Ingredients;
};