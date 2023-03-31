'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class m_user_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  m_user_role.init({
    userId: DataTypes.UUID,
    roleId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'm_user_role',
    underscored: true,
  });
  return m_user_role;
};