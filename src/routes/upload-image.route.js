const express = require('express');
const uploadImageRouter = express.Router();
const uploadImageServices = require('../services/upload-image.service');
const uploadImageController = require('../controllers/upload-image.controller');
const allFeatures = require('../utils/features');
const { checkRolePermission } = require('../middlewares/role-permission.validator');
const authMiddlewares = require('../middlewares/okta-auth.validator');

uploadImageRouter.post(
  '/upload/engagement',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.upload_image_engagement),
  uploadImageServices.uploadImage.single('file'),
  uploadImageController.uploadEngagementImage
);

uploadImageRouter.post(
  '/upload/user',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.upload_image_user),
  uploadImageServices.uploadImage.single('file'),
  uploadImageController.uploadUserImage
);

uploadImageRouter.post(
  '/upload/case-study',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.upload_image_case_study),
  uploadImageServices.uploadImage.single('file'),
  uploadImageController.uploadCaseStudyImage
);

module.exports = uploadImageRouter;
