'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  skills.init(
    {
      skillId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.STRING,
      },
      area: DataTypes.STRING,
      category: DataTypes.STRING,
      skill: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'skills',
    }
  );
  return skills;
};
