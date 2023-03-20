const express = require('express');
const uploadExcelRouter = express.Router();
const uploadExcelController = require('../controllers/upload-excel.controller');
const uploadExcelValidator = require('../middlewares/upload-excel.validator');
const upload = require('../services/upload-excel.service');
uploadExcelRouter.post(
  '/upload',
  // uploadExcelValidator.validate,
  upload.uploadExcel.single('file'),
  uploadExcelValidator.fileValidator,
  uploadExcelController.uploadExcel
);
module.exports = uploadExcelRouter;
