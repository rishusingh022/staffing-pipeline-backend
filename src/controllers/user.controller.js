const userServices = require('../services/user.service');
const { NotFoundError } = require('../../src/utils/httpError');
const logger = require('../logger');
const staffingDetailsService = require('../services/staffing-details.service');
const projectService = require('../services/project.service');
const listUsers = async (_, res) => {
  logger.info('fetching all the users');
  const allUsers = await userServices.listUsers();
  res.status(200);
  res.json({ data: allUsers, user: _.user });
};
const getUser = async (req, res) => {
  const { userId } = req.params;
  try {
    logger.info('fetching user with id: ' + userId);
    const user = await userServices.getUser(userId);

    // get current engagements data
    const userCurrentEngagements = await staffingDetailsService.getUserCurrentEngagements(userId);
    console.log('userCurrentEngagements', userCurrentEngagements);
    const userCurrentEngagementsData = await Promise.all(
      userCurrentEngagements.map(async entry => {
        const projectData = await projectService.getProject(entry.engagementId);
        projectData.staffingEntry = entry;
        return projectData;
      })
    );

    // get past engagements data
    const userPastEngagements = await staffingDetailsService.getUserPastEngagements(userId);
    console.log('userPastEngagements', userPastEngagements);
    const userPastEngagementsData = await Promise.all(
      userPastEngagements.map(async entry => {
        const projectData = await projectService.getProject(entry.engagementId);
        projectData.staffingEntry = entry;
        return projectData;
      })
    );
    res.status(200).json({
      userData: user,
      currentEngagements: userCurrentEngagementsData,
      pastEngagements: userPastEngagementsData,
      user: req.user,
    });
  } catch (error) {
    logger.error(error);
    if (error instanceof NotFoundError) {
      res.status(error.code);
      res.json({ message: error.message, user: req.user });
    } else {
      res.status(500);
      res.json({ message: 'Internal Server Error', user: req.user });
    }
  }
};

const createUser = async (req, res) => {
  try {
    logger.info('creating the user');
    const newUser = await userServices.createUser(req.body);
    res.status(201).json({ data: newUser, success: true, user: req.user });
  } catch (error) {
    logger.error(error);
    res.status(error.statusCode).json({
      error: error.message,
      user: req.user,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    logger.info('deleting the user with id: ' + req.params.id);
    await userServices.deleteUser(req.params.id);
    res.status(200).json({ message: 'User deleted', user: req.user });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: 'Something went wrong.', user: req.user });
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    logger.info('updating user with id: ' + req.params.userId);
    const updatedUser = await userServices.updateUser(id, body);
    if (!updatedUser) res.status(404).json({ message: 'User not found', user: req.user });
    res.status(200).json({ data: updatedUser, user: req.user });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      message: error.message,
      user: req.user,
    });
  }
};

module.exports = { listUsers, createUser, deleteUser, updateUser, getUser };
