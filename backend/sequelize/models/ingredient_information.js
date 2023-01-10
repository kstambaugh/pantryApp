'use strict';
const {
  Model
} = require('sequelize');
const user_ingredients = require('./user_ingredients');
module.exports = (sequelize, DataTypes) => {
  class Ingredient_Information extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Ingredient_Information.belongsTo(user_ingredients)
    }
  }
  Ingredient_Information.init({
    ingredient_info_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    ingredient_id: DataTypes.INTEGER,
    catagory_id: DataTypes.STRING,
    date_of_last_use: DataTypes.DATE,
    amount_last_used: DataTypes.INTEGER,
    amount_last_purchased: DataTypes.INTEGER,
    cumulative_usage: DataTypes.INTEGER,
    low_limit: DataTypes.INTEGER,
    high_limit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ingredient_Information',
    timestamps: false,
  });
  return Ingredient_Information;
};