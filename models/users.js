'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    bio: DataTypes.STRING,
    join_date: DataTypes.DATE,
    bio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Users',
  });
  return User;
};