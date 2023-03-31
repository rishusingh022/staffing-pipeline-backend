const db = require('../models');

const getRoles = async () => {
  const roles = await db.role.findAll();
  return roles;
};

const getRole = async roleId => {
  const role = await db.role.findByPk(roleId);
  return role;
};

const getRoleFeatures = async roleId => {
  const role = await db.role.findByPk(roleId, {
    attributes: ['roleId', 'roleName'],
    include: [
      {
        model: db.feature,
        as: 'features',
        through: {
          attributes: [],
        },
        attributes: ['featureName', 'featureAvailable'],
      },
    ],
  });
  return role;
};

const getAllFeatures = async () => {
  const features = await db.feature.findAll({
    attributes: ['featureName', 'featureAvailable'],
  });
  return features;
};

module.exports = {
  getRoles,
  getRole,
  getRoleFeatures,
  getAllFeatures,
};
