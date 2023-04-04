'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Engagements extends Model {
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
  Engagements.init(
    {
      engagementId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      tags: DataTypes.ARRAY(DataTypes.STRING),
      chargeCode: {
        type:DataTypes.STRING,
        unique: true
      },
      sectorId: DataTypes.UUID,
      subSectorId: DataTypes.UUID,
      skills: DataTypes.ARRAY(DataTypes.STRING),
      guild: DataTypes.ENUM('swe', 'product', 'data', 'unspecified'),
      caseStudyIds: DataTypes.ARRAY(DataTypes.STRING),
      status: DataTypes.ENUM('upcoming', 'ongoing', 'completed'),
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'engagements',
      underscored: true,
    }
  );
  return Engagements;
};
