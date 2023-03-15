const db = require('../models');

const createStaffingEntry = async entryDetails => {
  const newEntry = await db.staffing_details.create(entryDetails);
  return newEntry;
};
const staffingDetailsService = { createStaffingEntry };
module.exports = staffingDetailsService;
