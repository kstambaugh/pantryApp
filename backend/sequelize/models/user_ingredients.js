'use strict';
const { INTEGER } = require('sequelize');
const {
  Model
} = require('sequelize');
const grocery = require('./grocery');
const ingredient_information = require('./ingredient_information');
const pantry = require('./pantry');
const recipe_ingredients = require('./recipe_ingredients');
const users = require('./user')
module.exports = (sequelize, DataTypes) => {
  class User_Ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User_Ingredients.belongsTo(users)
      // User_Ingredients.belongsTo(pantry)
      // User_Ingredients.hasOne(ingredient_information)
      // User_Ingredients.belongsTo(grocery)
      // User_Ingredients.belongsToMany(recipe_ingredients)
    }
  }
  User_Ingredients.init({
    ingredient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    ingredient_name: DataTypes.STRING,
    notes: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Ingredients',
    timestamps: false,
  });
  return User_Ingredients;
};