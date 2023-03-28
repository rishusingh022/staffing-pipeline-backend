const express = require('express');
const uploadImageRouter = express.Router();
const uploadImageServices = require('../services/upload-image.service');
const uploadImageController = require('../controllers/upload-image.controller');

uploadImageRouter.post(
  '/upload/engagement',
  uploadImageServices.uploadImage.single('file'),
  uploadImageController.uploadEngagementImage
);

uploadImageRouter.post(
  '/upload/user',
  uploadImageServices.uploadImage.single('file'),
  uploadImageController.uploadUserImage
);

uploadImageRouter.post(
  '/upload/case-study',
  uploadImageServices.uploadImage.single('file'),
  uploadImageController.uploadCaseStudyImage
);

module.exports = uploadImageRouter;
