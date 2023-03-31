const { engagements } = require('../models');
const { HttpError } = require('../utils/httpError');
const db = require('../models');
const logger = require('../logger');
const CustomErrors = require('../utils/httpError');
const PAGE_LIMIT = 48;

const getProject = async projectId => {
  logger.info(`find engagement data for the id: ${projectId}`);
  const engagement = await db.engagements.findOne({
    where: {
      engagementId: projectId,
    },
  });
  // console.log(projectId, engagement);
  if (!engagement) {
    throw new CustomErrors.NotFoundError('Engagement not found');
  }
  return engagement;
};

const getProjectByChargeCode = async chargeCode => {
  logger.info(`find engagement data for the charge code: ${chargeCode}`);
  const engagement = await db.engagements.findOne({
    where: {
      chargeCode,
    },
  });
  if (!engagement) {
    throw new CustomErrors.NotFoundError('Engagement not found');
  }
  return engagement;
};

const listProjects = async page => {
  try {
    logger.info('get all the engagements from the database');
    const allProjects = await db.engagements.findAll({
      limit: PAGE_LIMIT,
      offset: page ? (page - 1) * PAGE_LIMIT : 0,
    });
    return allProjects;
  } catch (error) {
    logger.error({ error: error, text: 'error in fetching all the engagements from the database' });
    throw new CustomErrors.HttpError(error.message, 500);
  }
};

const getProjectsByName = async name => {
  logger.info(`get engagements from database with name: ${name}`);
  const engagements = await db.engagements.findAll({
    where: {
      name: db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('name')), 'LIKE', `%${name}%`),
    },
  });
  return engagements;
};

const updateProject = async (id, body) => {
  const engagement = await engagements.findByPk(id);
  if (!engagement) {
    throw new HttpError('Project not found', 404);
  }
  for (let key in body) {
    if (key === 'chargeCode') {
      continue;
    }
    engagement[key] = body[key];
  }
  await engagement.save();
  return engagement;
};

const deleteProject = async projectId => {
  logger.info('deleteing project with id: ' + projectId);
  await db.engagements.destroy({
    where: {
      engagementId: projectId,
    },
  });
};

const updateCaseStudyInProject = async (caseStudyId, body) => {
  logger.info('updating case study in project');
  const caseStudy = await db.case_studies.findOne({ where: { case_study_id: caseStudyId } });
  if (!caseStudy) return;
  const oldEngagement = caseStudy.engagementId;
  const newEngagement = body.engagementId;
  if (oldEngagement) {
    let engagement = await db.engagements.findOne({ where: { engagementId: oldEngagement } });
    if (engagement) {
      // remove the case study from the old engagement
      let caseStudies = engagement.caseStudyIds;
      caseStudies = caseStudies.filter(id => id !== caseStudyId);
      engagement.caseStudyIds = caseStudies;
      await engagement.save();
    }
  }
  if (newEngagement) {
    let engagement = await db.engagements.findOne({ where: { engagementId: newEngagement } });
    if (engagement) {
      // add the case study to the new engagement
      engagement.caseStudyIds = [...engagement.caseStudyIds, caseStudyId];
      await engagement.save();
      engagement = await db.engagements.findOne({ where: { engagementId: newEngagement } });
    }
  }
};

const removeCaseStudyFromProject = async caseStudyId => {
  const caseStudy = await db.case_studies.findOne({ where: { case_study_id: caseStudyId } });
  if (!caseStudy) return;
  const engagementId = caseStudy.engagementId;
  logger.info('removing case study from project');
  if (engagementId) {
    let engagement = await db.engagements.findOne({ where: { engagementId: engagementId } });
    if (engagement) {
      // remove the case study from the old engagement
      let caseStudies = engagement.caseStudyIds;
      caseStudies = caseStudies.filter(id => id !== caseStudyId);
      engagement.caseStudyIds = caseStudies;
      await engagement.save();
    }
  }
};

const createProject = async body => {
  try {
    logger.info('creating project');
    return await db.engagements.create(body);
  } catch (error) {
    logger.error({ error: error, text: 'error in creating an engagement and adding it to the database' });
    throw new CustomErrors.HttpError(error.message, 500);
  }
};
const getProjectsInMonths = async () => {
  logger.info('Getting projects metrics');
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 12);
  const engagements = await db.engagements.findAll({
    where: {
      startDate: {
        [db.Sequelize.Op.gte]: startDate,
      },
    },
  });
  const engagementsCount = {};
  engagements.map(engagement => {
    const month = new Date(engagement.startDate).getMonth();
    if (engagementsCount[month]) {
      engagementsCount[month] += 1;
    } else {
      engagementsCount[month] = 1;
    }
  });

  const projectsInMonths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (const key in engagementsCount) {
    const month = parseInt(key);
    projectsInMonths[(month - 1) % 12] = engagementsCount[key];
  }
  const first = projectsInMonths[0];
  projectsInMonths.splice(0, 1);
  projectsInMonths.push(first);
  return projectsInMonths;
};
const getEngagementsMonthwise = async startDate => {
  return db.engagements.findAll({
    where: {
      createdAt: {
        [db.Sequelize.Op.lte]: new Date(startDate),
      },
    },
  });
};
const getEngagementStatus = async () => {
  const statusCount = {};
  const engagements = await db.engagements.findAll();
  engagements.map(engagement => {
    if (statusCount[engagement.status]) {
      statusCount[engagement.status] += 1;
    } else {
      statusCount[engagement.status] = 1;
    }
  });
  console.log(statusCount);
  return statusCount;
};

const getEngagementsCount = async () => {
  try {
    logger.info('get engagements count');
    const count = await db.engagements.count();
    return count;
  } catch (error) {
    logger.error({ error: error, text: 'error in fetching engagements count from the database' });
    throw new CustomErrors.HttpError(error.message, 500);
  }
};

module.exports = {
  getProject,
  listProjects,
  deleteProject,
  updateProject,
  updateCaseStudyInProject,
  removeCaseStudyFromProject,
  createProject,
  getProjectsByName,
  getProjectByChargeCode,
  getEngagementsCount,
  getProjectsInMonths,
  getEngagementStatus,
  getEngagementsMonthwise,
};
