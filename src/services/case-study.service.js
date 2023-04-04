const { case_studies } = require('../models');
const db = require('../models');
const logger = require('../logger');
const PAGE_LIMIT = 24;

const createCaseStudy = async caseStudy => {
  logger.info('insert new case study into database');
  const newCaseStudy = await case_studies.create(caseStudy);
  return newCaseStudy;
};

const deleteCaseStudy = async id => {
  logger.info('get case_study to be deleted with id: ' + id);
  const deletedCaseStudy = await db.case_studies.findOne({ where: { case_study_id: id } });
  if (!deletedCaseStudy) return null;
  await deletedCaseStudy.destroy();
  return deletedCaseStudy;
};

const updateCaseStudy = async (id, body) => {
  logger.info(`get case_study data from database for the id: ${id}`);
  const caseStudy = await db.case_studies.findOne({ where: { case_study_id: id } });
  if (!caseStudy) return null;

  for (let key in body) {
    caseStudy[key] = body[key];
  }

  logger.info('insert updated caseStudy to the database');
  await caseStudy.save();
  return caseStudy;
};

const removeProjectFromCaseStudy = async projectId => {
  logger.info('remove project from casestudy service');
  const result = await db.case_studies.update(
    {
      engagementId: null,
    },
    {
      where: {
        engagementId: projectId,
      },
    }
  );
  return result;
};

const getCaseStudy = async id => {
  logger.info('find case study with the given id');
  const caseStudy = await db.case_studies.findOne({
    include: [
      {
        model: db.sectors,
      },
      {
        model: db.sub_sectors,
      },
    ],
    where: { case_study_id: id },
  });
  return caseStudy;
};

const listCaseStudies = async page => {
  logger.info('get all the case studies from the database');
  const allCaseStudies = await db.case_studies.findAll({
    include: [
      {
        model: db.sectors,
      },
      {
        model: db.sub_sectors,
      },
    ],
    limit: PAGE_LIMIT,
    offset: page ? (page - 1) * PAGE_LIMIT : 0,
  });
  return allCaseStudies;
};

const addCurrentEngagement = async (caseStudyId, engagementId) => {
  logger.info(`adding engagement : ${engagementId} to caseStudy: ${caseStudyId}`);
  const caseStudy = await db.case_studies.findOne({ where: { case_study_id: caseStudyId } });
  caseStudy.engagementId = engagementId;
  await caseStudy.save();
};

const getCaseStudiesByEngagementId = async engagementId => {
  logger.info(`get case studies by engagement id: ${engagementId}`);
  const caseStudies = await db.case_studies.findAll({
    include: [
      {
        model: db.sectors,
      },
      {
        model: db.sub_sectors,
      },
    ],
    where: { engagementId: engagementId },
  });
  return caseStudies;
};
const getCaseStudyByName = async name => {
  logger.info(`get case studies from database with name: ${name}`);
  const caseStudies = await db.case_studies.findAll({
    where: {
      name: db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('name')), 'LIKE', `%${name}%`),
    },
    include: [
      {
        model: db.sectors,
      },
      {
        model: db.sub_sectors,
      },
    ],
  });
  return caseStudies;
};

const getCaseStudiesCount = async () => {
  logger.info('get case study count');
  const count = await db.case_studies.count();
  return count;
};

module.exports = {
  updateCaseStudy,
  deleteCaseStudy,
  createCaseStudy,
  removeProjectFromCaseStudy,
  getCaseStudy,
  listCaseStudies,
  addCurrentEngagement,
  getCaseStudiesByEngagementId,
  getCaseStudyByName,
  getCaseStudiesCount,
};
