const { NotFoundError } = require('../utils/httpError');
const logger = require('../logger');
const userServices = require('../services/user.service');
const projectServices = require('../services/project.service');
const caseStudyServices = require('../services/case-study.service');

const getUsersByName = async (req, res) => {
  const { name } = req.query;
  const lowerCaseName = name.toLowerCase();
  try {
    logger.info('fetching users with name: ' + name);
    const users = await userServices.getUsersByName(lowerCaseName);
    res.status(200);
    res.json(users);
  } catch (error) {
    logger.error(error);
    if (error instanceof NotFoundError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

const getProjectsByName = async (req, res) => {
  const { name } = req.query;
  const lowerCaseName = name.toLowerCase();
  try {
    logger.info('fetching projects with name: ' + name);
    const projects = await projectServices.getProjectsByName(lowerCaseName);
    res.status(200).json(projects);
  } catch (error) {
    logger.error(error);
    if (error instanceof NotFoundError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

const getCaseStudyByName = async (req, res) => {
  const { name } = req.query;
  const lowerCaseName = name.toLowerCase();
  try {
    logger.info('fetching case studies with name: ' + name);
    const caseStudies = await caseStudyServices.getCaseStudyByName(lowerCaseName);
    res.status(200).json(caseStudies);
  } catch (error) {
    logger.error(error);
    if (error instanceof NotFoundError) {
      res.status(error.code).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

module.exports = {
  getUsersByName,
  getProjectsByName,
  getCaseStudyByName,
};
