'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pantry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pantry.init({
    ingredient_id: DataTypes.INTEGER,
    amount_on_hand: DataTypes.INTEGER,
    unit_of_measure: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pantry',
  });
  return Pantry;
};