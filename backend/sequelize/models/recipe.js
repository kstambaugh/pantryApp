'use strict';
const {
  Model
} = require('sequelize');
const meal_plan = require('./meal_plan');
const recipe_ingredients = require('./recipe_ingredients');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Recipe.hasOne(recipe_ingredients)
      // Recipe.belongsTo(user)
      // Recipe.belongsTo(meal_plan)
    }
  }
  Recipe.init({
    recipe_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_id: DataTypes.INTEGER,
    recipe_name: DataTypes.STRING,
    method: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Recipe',
    timestamps: false,
  });
  return Recipe;
};