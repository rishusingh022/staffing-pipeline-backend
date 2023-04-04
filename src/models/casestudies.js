'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CaseStudies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.sectors,{
        foreignKey:'sectorId'
      });
      this.belongsTo(models.sub_sectors,{
        foreignKey:'subSectorId'
      });
    }
  }
  CaseStudies.init(
    {
      caseStudyId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      sectorId: DataTypes.UUID,
      subSectorId: DataTypes.UUID,
      collaboratorsIds: DataTypes.ARRAY(DataTypes.STRING),
      image: DataTypes.STRING,
      boxLink: DataTypes.STRING,
      engagementId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'case_studies',
      underscored: true,
    }
  );
  return CaseStudies;
};
