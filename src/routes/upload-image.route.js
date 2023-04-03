const express = require('express');
const uploadImageRouter = express.Router();
const uploadImageServices = require('../services/upload-image.service');
const uploadImageController = require('../controllers/upload-image.controller');
const allFeatures = require('../utils/features');
const { checkRolePermission } = require('../middlewares/role-permission.validator');
uploadImageRouter.post(
  '/upload/engagement',
  checkRolePermission(allFeatures.upload_image_engagement),
  uploadImageServices.uploadImage.single('file'),
  uploadImageController.uploadEngagementImage
);

uploadImageRouter.post(
  '/upload/user',
  checkRolePermission(allFeatures.upload_image_user),
  uploadImageServices.uploadImage.single('file'),
  uploadImageController.uploadUserImage
);

uploadImageRouter.post(
  '/upload/case-study',
  checkRolePermission(allFeatures.upload_image_case_study),
  uploadImageServices.uploadImage.single('file'),
  uploadImageController.uploadCaseStudyImage
);

module.exports = uploadImageRouter;
