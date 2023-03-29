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
        return null;
      }
      const staffingEntryOverDateBound = await staffingDetailsService.getStaffingEntryOverDateBound(
        entry.userId,
        entry.engagementId,
        entry.assignmentStartDate,
        entry.assignmentEndDate
      );
      if (staffingEntryOverDateBound) {
        const staffingEntryStartDate = new Date(staffingEntryOverDateBound.assignmentStartDate).getTime();
        const staffingEntryEndDate = new Date(staffingEntryOverDateBound.assignmentEndDate).getTime();
        const entryStartDate = new Date(entry.assignmentStartDate).getTime();
        const entryEndDate = new Date(entry.assignmentEndDate).getTime();
        if (staffingEntryStartDate > entryStartDate) {
          staffingEntryOverDateBound.assignmentStartDate = entry.assignmentStartDate;
        }
        if (staffingEntryEndDate < entryEndDate) {
          staffingEntryOverDateBound.assignmentEndDate = entry.assignmentEndDate;
        }
        await staffingDetailsService.updateStaffingEntry(
          staffingEntryOverDateBound.entryId,
          staffingEntryOverDateBound.dataValues
        );
        return null;
      }
      return entry;
    })
  );
  const filteredData = newData.filter(entry => entry !== null);
  const result = await staffingDetailsService.createStaffingEntry(filteredData);
  fs.unlinkSync(fname);
  return JSON.parse(JSON.stringify(result));
};

module.exports = { uploadExcel, insertExcelDataToDatabase };
