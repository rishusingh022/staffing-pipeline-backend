'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    userId: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    fmno: DataTypes.STRING,
    currentEngagementId: DataTypes.ARRAY(DataTypes.STRING),
    caseStudies: DataTypes.ARRAY(DataTypes.STRING),
    skills: DataTypes.ARRAY(DataTypes.STRING),
    role: DataTypes.ENUM('unspecified'),
    guild: DataTypes.ENUM('unspecified'),
    pastEngagementId: DataTypes.ARRAY(DataTypes.STRING),
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return Users;
};