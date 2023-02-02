'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CaseStudies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CaseStudies.init({
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    presentationLink: DataTypes.STRING,
    userId: DataTypes.UUID,
    studyId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'CaseStudies',
  });
  return CaseStudies;
};