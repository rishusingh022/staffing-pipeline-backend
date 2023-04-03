const express = require('express');
const uploadExcelRouter = express.Router();
const uploadExcelController = require('../controllers/upload-excel.controller');
const uploadExcelValidator = require('../middlewares/upload-excel.validator');
const upload = require('../services/upload-excel.service');
const { checkRolePermission } = require('../middlewares/role-permission.validator');
const allFeatures = require('../utils/features');
const authMiddlewares = require('../middlewares/okta-auth.validator');
uploadExcelRouter.post(
  '/upload',
  authMiddlewares.validateToken,
  checkRolePermission(allFeatures.upload_excel),
  upload.uploadExcel.single('file'),
  uploadExcelValidator.fileValidator,
  uploadExcelController.uploadExcel
);
module.exports = uploadExcelRouter;
