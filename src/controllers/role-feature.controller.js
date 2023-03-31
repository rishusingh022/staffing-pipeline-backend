const roleFeatureServices = require('../services/role-feature.service');

const getRoles = async (req, res) => {
  try {
    const roles = await roleFeatureServices.getRoles();
    res.json({ data: roles });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRole = async (req, res) => {
  try {
    const role = await roleFeatureServices.getRole(req.params.roleId);
    res.json({ data: role });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRoleFeatures = async (req, res) => {
  try {
    const roleFeatures = await roleFeatureServices.getRoleFeatures(req.params.roleId);
    const allFeatures = await roleFeatureServices.getAllFeatures();
    // console.log(allFeatures);
    const permissions = {};
    allFeatures.forEach(feature => {
      permissions[feature.featureName] = false;
    });
    const allowedFeatures = roleFeatures.features.map(feature => feature.featureName);
    allowedFeatures.forEach(feature => {
      permissions[feature] = true;
    });
    const roleFeaturesData = {
      role_id: roleFeatures.role_id,
      role_name: roleFeatures.role_name,
      userId: req.user.userId,
      features: permissions,
    };
    res.json({ data: roleFeaturesData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRoles,
  getRole,
  getRoleFeatures,
};
