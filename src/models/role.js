'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.feature, {
        through: models.m_role_feature,
        foreignKey: 'roleId',
      });
      this.belongsToMany(models.users, {
        through: models.m_user_role,
        foreignKey: 'roleId',
      });
    }
  }
  role.init({
    roleId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    roleName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'role',
    underscored: true,
  });
  return role;
};