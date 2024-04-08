'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class followers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  followers.init({
    follower_id: DataTypes.BIGINT,
    followed_id: DataTypes.BIGINT,
    follow_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'followers',
  });
  return followers;
};