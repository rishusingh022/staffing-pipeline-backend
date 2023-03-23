const multer = require('multer');
const path = require('path');
const fs = require('fs');
const staffingDetailsService = require('./staffing-details.service');
const { HttpError } = require('../utils/httpError');
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
  console.log(data);
  const newData = await Promise.all(
    data.map(async entry => {
      const staffingEntry = await staffingDetailsService.getStaffingEntry(
        entry.userId,
        entry.engagementId,
        entry.assignmentStartDate,
        entry.assignmentEndDate
      );
      console.log(staffingEntry);
      if (staffingEntry) {
        throw new HttpError('Staffing entry already exists', 400);
      }
      return entry;
    })
  );
  const result = await staffingDetailsService.createStaffingEntry(newData);
  fs.unlinkSync(fname);
  return JSON.parse(JSON.stringify(result));
};

module.exports = { uploadExcel, insertExcelDataToDatabase };
