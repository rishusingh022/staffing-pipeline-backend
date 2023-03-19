const express = require('express');
const uploadExcelRouter = express.Router();
const uploadExcelController = require('../controllers/upload-excel.controller');
const upload = require('../services/upload-excel.service');
uploadExcelRouter.post('/upload', upload.uploadExcel.single('file'), uploadExcelController.uploadExcel);
module.exports = uploadExcelRouter;
