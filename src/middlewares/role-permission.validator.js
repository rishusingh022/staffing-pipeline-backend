const roleFeatureServices = require('../services/role-feature.service');
const userServices = require('../services/user.service');
const allFeatures = require('../utils/features');
const { HttpError } = require('../utils/httpError');
const checkRolePermission = featureName => async (req, res, next) => {
  try {
    const userEmail = req.user.email;
    const userRoles = await userServices.getUserRole(userEmail);
    const userFeatures = await roleFeatureServices.getRoleFeatures(userRoles.roles);
    console.log('featurename ', userFeatures);

    const userAllFeatures = [];
    userFeatures.forEach(userFeature => {
      userFeature.features.forEach(feature => {
        if (feature.featureAvailable) userAllFeatures.push(feature.featureName);
      });
    });
    const isFeatureAvailable = userAllFeatures.includes(featureName);

    if (!isFeatureAvailable) {
      throw new HttpError('Forbidden', 403);
    }
    if (featureName === allFeatures.create_skill_self && req.params.id !== userRoles.userId) {
      throw new HttpError('Forbidden', 403);
    }
    if (featureName === allFeatures.edit_skill_self && req.params.id !== userRoles.userId) {
      throw new HttpError('Forbidden', 403);
    }
    if (featureName === allFeatures.edit_user_self && req.params.id !== userRoles.userId) {
      throw new HttpError('Forbidden', 403);
    }
    if (featureName === allFeatures.delete_skill_self && req.params.id !== userRoles.userId) {
      throw new HttpError('Forbidden', 403);
    }

    next();
  } catch (error) {
    if (error instanceof HttpError) {
      res.status(error.statusCode);
      res.json({ message: error.message });
    } else {
      res.status(500);
      res.json({ message: 'Internal Server Error' });
    }
  }
};

const checkSelfPermission = async (req, res, next) => {
  try {
    const userEmail = req.user.email;
    const userRoles = await userServices.getUserRole(userEmail);
    const userFeatures = await roleFeatureServices.getRoleFeatures(userRoles.roles);
    const userAllFeatures = [];
    userFeatures.forEach(userFeature => {
      userFeature.features.forEach(feature => {
        if (feature.featureAvailable) userAllFeatures.push(feature.featureName);
      });
    });
    const isFeatureAvailable = userAllFeatures.includes(featureName);
    if (!isFeatureAvailable) {
      throw new HttpError('Forbidden', 403);
    }
    next();
  } catch (error) {
    if (error instanceof HttpError) {
      res.status(error.statusCode);
      res.json({ message: error.message });
    } else {
      res.status(500);
      res.json({ message: 'Internal Server Error' });
    }
  }
};

module.exports = {
  checkRolePermission,
};
