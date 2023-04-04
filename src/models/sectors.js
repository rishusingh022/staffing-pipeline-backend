'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sectors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.engagements, {
        foreignKey: 'sectorId',
      });
      this.hasMany(models.case_studies,{
        foreignKey: 'sectorId'
      });
      this.hasMany(models.sub_sectors,{
        foreignKey: 'sectorId'
      })
    }
  }
  Sectors.init({
    name: DataTypes.STRING,
    sectorId: {
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
  }, {
    sequelize,
    modelName: 'sectors',
    underscored: true,
  });
  return Sectors;
};