const multer = require('multer');
const path = require('path');
const fs = require('fs');
const staffingDetailsService = require('./staffing-details.service');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const uploadExcel = multer({ storage: storage });
const insertExcelDataToDatabase = async fname => {
  const data = await staffingDetailsService.parse_xlsx_sheets(fname);
  const result = await staffingDetailsService.createStaffingEntry(data);
  fs.unlinkSync(fname);
  return JSON.parse(JSON.stringify(result));
};

module.exports = { uploadExcel, insertExcelDataToDatabase };
