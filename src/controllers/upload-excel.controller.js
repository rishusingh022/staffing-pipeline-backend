const { HttpError } = require('../utils/httpError');
const uploadExcelService = require('../services/upload-excel.service');
const uploadExcel = async (req, res) => {
  try {
    const result = await uploadExcelService.insertExcelDataToDatabase(req.file.path);
    res.status(200).json({ data: result, success: true });
  } catch (error) {
    // console.log(error);
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({
        error: error.message,
      });
    } else {
      res.status(500).json({ error: error.message, success: false });
    }
  }
};
module.exports = { uploadExcel };
