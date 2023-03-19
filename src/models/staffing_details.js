'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class staffing_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  staffing_details.init(
    {
      entryId: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      fmno: DataTypes.INTEGER,
      name: DataTypes.STRING,
      userId: {
        type: DataTypes.STRING,
      },
      chargeCode: {
        type: DataTypes.STRING,
      },
      engagementId: {
        type: DataTypes.STRING,
      },
      assignmentType: DataTypes.STRING,
      study: DataTypes.STRING,
      utilizationPercentage: DataTypes.INTEGER,
      staffingStatus: DataTypes.STRING,
      assignmentStartDate: DataTypes.DATE,
      assignmentEndDate: DataTypes.DATE,
      APName: DataTypes.STRING,
      EDName: DataTypes.STRING,
      EMName: DataTypes.STRING,
      staffingManager: DataTypes.STRING,
      guild: DataTypes.STRING,
      country: DataTypes.STRING,
      departmentCode: DataTypes.STRING,
      role: DataTypes.STRING,
      practice: DataTypes.STRING,
      departmentName: DataTypes.STRING,
      integrated: DataTypes.STRING,
      email: DataTypes.STRING,
      path: DataTypes.STRING,
      practiceFunction: DataTypes.STRING,
      practiceIndustry: DataTypes.STRING,
      region: DataTypes.STRING,
      roleCategory: DataTypes.STRING,
      roleSubCategory: DataTypes.STRING,
      staffingOffice: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'staffing_details',
      underscored: true,
    }
  );
  return staffing_details;
};
