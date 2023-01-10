'use strict';
const {
  Model
} = require('sequelize');
const grocery = require('./grocery');
const pantry = require('./pantry');
const recipe = require('./recipe');
const user_ingredients = require('./user_ingredients');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Users.hasMany(user_ingredients)
      // Users.hasMany(pantry, { through: user_ingredients })
      // Users.hasMany(recipe)
      // Users.hasMany(grocery, { through: user_ingredients })


    }
  }
  Users.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    first_Name: DataTypes.STRING,
    last_Name: DataTypes.STRING,
    email_address: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    timestamps: false,
  });
  return Users;
};