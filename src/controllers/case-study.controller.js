const caseStudyServices = require('../services/case-study.service');
const userServices = require('../services/user.service');
const logger = require('../logger');
const projectServices = require('../services/project.service');

const createCaseStudy = async (req, res) => {
  try {
    logger.info('creating a new case study');
    const caseStudy = await caseStudyServices.createCaseStudy(req.body);
    const { caseStudyId, collaboratorsIds, engagementId } = caseStudy.dataValues;

    // update users case_study_ids
    for (let collabId of collaboratorsIds) {
      user = await userServices.getUser(collabId);
      user.dataValues['caseStudyIds'].push({ data: caseStudyId, user: req.user });
      user.save();
    }

    // update engagements case_study_ids
    const project = await projectServices.getProject(engagementId);
    project.dataValues['caseStudyIds'].push(caseStudyId);
    project.save();

    res.status(201).json({ data: caseStudy, user: req.user });
  } catch (error) {
    logger.error(error);
    console.log(error);
    res.status(500).json({ message: 'Something went wrong', success: false, user: req.user });
  }
};

const updateCaseStudy = async (req, res) => {
  try {
    logger.info('updating casestudy with id: ' + req.params.id);

    const { id } = req.params;
    const { body } = req;
    await userServices.updateCaseStudyInUser(id, body);
    await projectServices.updateCaseStudyInProject(id, body);
    const caseStudy = await caseStudyServices.updateCaseStudy(id, body);
    if (!caseStudy) res.status(404).json({ message: 'Case study not found', user: req.user });
    res.status(200).json({ data: caseStudy, user: req.user });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      message: error.message,
      user: req.user,
    });
  }
};

const deleteCaseStudy = async (req, res) => {
  try {
    try {
      logger.info('deleting case study with id: ' + req.params.id);
      const { id } = req.params;
      await userServices.removeCaseStudyFromUser(id);
      await projectServices.removeCaseStudyFromProject(id);
      const deletedCaseStudy = await caseStudyServices.deleteCaseStudy(id);
      if (!deletedCaseStudy) {
        res.status(404).json({ message: 'Case study not found', user: req.user });
      }
      res.status(200).json({ data: deletedCaseStudy, user: req.user });
    } catch (error) {
      logger.error(error);
      res.status(500).json({
        message: 'Something went wrong',
        user: req.user,
      });
    }
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      message: 'Something went wrong',
      user: req.user,
    });
  }
};

const getCaseStudy = async (req, res) => {
  try {
    const { id } = req.params;
    logger.info('fetching case study by id: ' + id);
    const caseStudy = await caseStudyServices.getCaseStudy(id);
    if (!caseStudy) throw new Error('Case study not found');
    res.status(200).json({ data: caseStudy, user: req.user });
  } catch (error) {
    logger.error(error);
    res.status(404).json({
      message: error.message,
      user: req.user,
    });
  }
};

const listCaseStudies = async (req, res) => {
  try {
    logger.info('fetching all the case studies');
    const allCaseStudies = await caseStudyServices.listCaseStudies();
    const completeCaseStudiesData = await Promise.all(
      allCaseStudies.map(async caseStudy => {
        const { collaboratorsIds, engagementId } = caseStudy.dataValues;
        const project = await projectServices.getProject(engagementId);
        const collaborators = await Promise.all(
          collaboratorsIds.map(async collabId => {
            const user = await userServices.getUser(collabId);
            return user;
          })
        );
        return {
          ...caseStudy.dataValues,
          engagement: project,
          collaborators,
        };
      })
    );
    res.status(200).json({ data: completeCaseStudiesData });
  } catch (error) {
    logger.error(error);
    console.log(error);
    res.status(500).json({
      message: 'Something went wrong',
      user: req.user,
    });
  }
};

module.exports = {
  createCaseStudy,
  updateCaseStudy,
  deleteCaseStudy,
  getCaseStudy,
  listCaseStudies,
};
