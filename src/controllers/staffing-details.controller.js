const staffingDetailsService = require('../services/staffing-details.service');
const { HttpError } = require('../utils/httpError');
const userService = require('../services/user.service');

const getUserCurrentEngagements = async (req, res) => {
  try {
    const { userId } = req.params;
    const userCurrentEngagements = await staffingDetailsService.getUserCurrentEngagements(userId);
    res.status(200).json({ data: userCurrentEngagements, user: req.user });
  } catch (err) {
    if (err instanceof HttpError) {
      res.status(err.statusCode).json({
        error: err.message,
        user: req.user,
      });
    } else {
      res.status(500).json({
        error: 'Internal Server Error',
        user: req.user,
      });
    }
  }
};

const getUserPastEngagements = async (req, res) => {
  try {
    const { userId } = req.params;
    const userPastEngagements = await staffingDetailsService.getUserPastEngagements(userId);
    res.status(200).json({ data: userPastEngagements, user: req.user });
  } catch (error) {
    if (err instanceof HttpError) {
      res.status(err.statusCode).json({
        error: err.message,
        user: req.user,
      });
    } else {
      res.status(500).json({
        error: 'Internal Server Error',
        user: req.user,
      });
    }
  }
};

const createStaffingEntry = async (req, res) => {
  try {
    console.log('In createStaffingEntry Controller');
    const entryDetails = req.body;
    const newEntry = await staffingDetailsService.createStaffingEntry(entryDetails);
    res.status(200).json({ data: newEntry, user: req.user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message, user: req.user });
  }
};

const getUsersInEngagement = async (req, res) => {
  try {
    const { engagementId } = req.params;
    const usersInEngagement = await staffingDetailsService.getUsersInEngagement(engagementId);
    res.status(200).json({ data: usersInEngagement, user: req.user });
  } catch (error) {
    if (err instanceof HttpError) {
      res.status(err.statusCode).json({
        error: err.message,
        user: req.user,
      });
    } else {
      res.status(500).json({
        error: 'Internal Server Error',
        user: req.user,
      });
    }
  }
};

const getUsersInvolvedInEngagement = async (req, res) => {
  try {
    const { engagementId } = req.params;
    const usersInEngagement = await staffingDetailsService.getUsersInvolvedInEngagement(engagementId);
    const usersInvolvedInEngagement = await Promise.all(
      usersInEngagement.map(async entry => {
        const userData = await userService.getUser(entry.userId);
        return {
          ...userData.dataValues,
          staffingEntry: entry,
        };
      })
    );
    res.status(200).json({ data: usersInvolvedInEngagement, user: req.user });
  } catch (err) {
    console.log(err);
    if (err instanceof HttpError) {
      res.status(err.statusCode).json({
        error: err.message,
        user: req.user,
      });
    } else {
      res.status(500).json({
        error: 'Internal Server Error',
        user: req.user,
      });
    }
  }
};

const staffingDetailsController = {
  createStaffingEntry,
  getUserCurrentEngagements,
  getUserPastEngagements,
  getUsersInEngagement,
  getUsersInvolvedInEngagement,
};
module.exports = staffingDetailsController;
