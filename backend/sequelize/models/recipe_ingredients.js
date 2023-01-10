'use strict';
const {
  Model
} = require('sequelize');
const recipe = require('./recipe');
const user_ingredients = require('./user_ingredients');
module.exports = (sequelize, DataTypes) => {
  class Recipe_Ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Recipe_Ingredients.belongsToMany(user_ingredients)
      // Recipe_Ingredients.belongsTo(recipe)
    }
  }
  Recipe_Ingredients.init({
    recipe_ingredient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    recipe_id: DataTypes.INTEGER,
    ingredient_id: DataTypes.INTEGER,
    amount_used: DataTypes.INTEGER,
    unit_of_measure: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recipe_Ingredients',
    timestamps: false,
  });
  return Recipe_Ingredients;
};