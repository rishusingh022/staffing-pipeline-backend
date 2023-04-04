'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubSectors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.sectors,{
        foreignKey: 'sectorId'
      });
      this.hasMany(models.engagements,{
        foreignKey:'subSectorId'
      }),
      this.hasMany(models.case_studies,{
        foreignKey:'subSectorId'
      })
    }
  }
  SubSectors.init({
    name: DataTypes.STRING,
    subSectorId:{
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },  
    sectorId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'sub_sectors',
    underscored: true,
  });
  return SubSectors;
};