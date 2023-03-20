const express = require('express');
const uploadImageRouter = express.Router();
const upload = require('../services/upload-image.service');
const uploadImageController = require('../controllers/upload-image.controller');

uploadImageRouter.post(
  '/upload/engagement',
  upload.uploadEngagementImage.single('file'),
  uploadImageController.uploadEngagementImage
);

uploadImageRouter.post('/upload/user', upload.uploadUserImage.single('file'), uploadImageController.uploadUserImage);

uploadImageRouter.post(
  '/upload/case-study',
  upload.uploadCaseStudyImage.single('file'),
  uploadImageController.uploadCaseStudyImage
);

module.exports = uploadImageRouter;