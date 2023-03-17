const staffingDetailsService = require('../services/staffing-details.service');
const { HttpError } = require('../utils/httpError');

const getUserCurrentEngagements = async (req, res) => {
  try {
    const { userId } = req.params;
    const userCurrentEngagements = await staffingDetailsService.getUserCurrentEngagements(userId);
    res.status(200).json(userCurrentEngagements);
  } catch (error) {
    if (err instanceof HttpError) {
      res.status(err.statusCode).json({
        error: err.message,
      });
    } else {
      res.status(500).json({
        error: 'Internal Server Error',
      });
    }
  }
};

const getUserPastEngagements = async (req, res) => {
  try {
    const { userId } = req.params;
    const userPastEngagements = await staffingDetailsService.getUserPastEngagements(userId);
    res.status(200).json(userPastEngagements);
  } catch (error) {
    if (err instanceof HttpError) {
      res.status(err.statusCode).json({
        error: err.message,
      });
    } else {
      res.status(500).json({
        error: 'Internal Server Error',
      });
    }
  }
};

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

const getUsersInEngagement = async (req, res) => {
  try {
    const { engagementId } = req.params;
    const usersInEngagement = await staffingDetailsService.getUsersInEngagement(engagementId);
    res.status(200).json(usersInEngagement);
  } catch (error) {
    if (err instanceof HttpError) {
      res.status(err.statusCode).json({
        error: err.message,
      });
    } else {
      res.status(500).json({
        error: 'Internal Server Error',
      });
    }
  }
};

const staffingDetailsController = {
  createStaffingEntry,
  getUserCurrentEngagements,
  getUserPastEngagements,
  getUsersInEngagement,
};
module.exports = staffingDetailsController;
