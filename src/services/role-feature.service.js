const db = require('../models');
const { HttpError } = require('../utils/httpError');

const getRoles = async () => {
  const roles = await db.role.findAll();
  return roles;
};

const getRole = async roleId => {
  const role = await db.role.findByPk(roleId);
  if (!role) throw new HttpError(404, 'Role not found');
  return role;
};

const getRoleFeatures = async roles => {
  const rolesData = await Promise.all(
    roles.map(roleId => {
      return db.role.findByPk(roleId, {
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
    })
  );
  return rolesData;
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
