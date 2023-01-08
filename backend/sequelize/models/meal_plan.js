'use strict';
const {
  Model
} = require('sequelize');
const recipe = require('./recipe');
module.exports = (sequelize, DataTypes) => {
  class Meal_Plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Meal_Plan.hasMany(recipe)
    }
  }
  Meal_Plan.init({
    recipe_id: DataTypes.INTEGER,
    meal_type: DataTypes.STRING,
    meal_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Meal_Plan',
  });
  return Meal_Plan;
};