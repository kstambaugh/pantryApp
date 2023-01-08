'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
const user_ingredients = require('./user_ingredients');
module.exports = (sequelize, DataTypes) => {
  class Grocery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Grocery.hasMany(user_ingredients)
      Grocery.belongsTo(user, { through: user_ingredients })
    }
  }
  Grocery.init({
    ingredient_id: DataTypes.INTEGER,
    date_add: DataTypes.DATE,
    date_needed: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Grocery',
  });
  return Grocery;
};