const uploadExcelService = require('../services/upload-excel.service');
const uploadExcel = async (req, res) => {
  const result = await uploadExcelService.insertExcelDataToDatabase(req.file.path);
  res.status(200).json(result);
};
module.exports = { uploadExcel };
