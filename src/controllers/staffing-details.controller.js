const staffingDetailsService = require('../services/staffing-details.service');

const createStaffingEntry = async (req, res) => {
  try {
    console.log('In createStaffingEntry Controller');
    const entryDetails = req.body;
    const newEntry = await staffingDetailsService.createStaffingEntry(entryDetails);
    res.status(200).json(newEntry);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const staffingDetailsController = { createStaffingEntry };
module.exports = staffingDetailsController;
