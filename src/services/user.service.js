// require user model

const CustomErrors = require('../utils/httpError');
const db = require('../models');
const logger = require('../logger');
const PAGE_LIMIT = 16;

const getUser = async userId => {
  logger.info(`get user from database with id: ${userId}`);
  const user = await db.users.findOne({
    where: {
      userId,
    },
  });
  if (!user) {
    logger.error(`no user with id: ${userId}`);
    throw new CustomErrors.NotFoundError('User not found', 404);
  }
  return user;
};

const getUserByFmno = async fmno => {
  logger.info(`get user from database with fmno: ${fmno}`);
  const user = await db.users.findOne({
    where: {
      fmno,
    },
  });
  if (!user) {
    logger.error(`no user with fmno: ${fmno}`);
    throw new CustomErrors.NotFoundError('User not found');
  }
  return user;
};

const getUsersByName = async name => {
  logger.info(`get users from database with name: ${name}`);
  const users = await db.users.findAll({
    where: {
      name: db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('name')), 'LIKE', `%${name}%`),
    },
  });
  return users;
};

const listUsers = async page => {
  try {
    logger.info('get all users from the database');

    const allUsers = await db.users.findAll({
      limit: PAGE_LIMIT,
      offset: page ? (page - 1) * PAGE_LIMIT : 0,
    });
    return allUsers;
  } catch (error) {
    logger.error(error);
    throw new CustomErrors.HttpError(error.message, 500);
  }
};

const createUser = async userDetails => {
  try {
    logger.info('create user in the database');
    const newUser = await db.users.create(userDetails);
    return newUser;
  } catch (error) {
    logger.error(error);
    throw new CustomErrors.HttpError(error.message, 400);
  }
};

const updateUser = async (userId, userDetails) => {
  logger.info('update user in database with id: ' + userId);
  const user = await db.users.findOne({ where: { userId } });
  if (!user) {
    logger.info('no user in database exists with id: ' + userId);
    return null;
  }
  for (let key in userDetails) {
    user[key] = userDetails[key];
  }
  await user.save();
  return user;
};

const addCurrentEngagement = async (userId, engagementId) => {
  logger.info(`adding engagement : ${engagementId} to user: ${userId}`);
  const user = await getUser(userId);
  if (!user.currentEngagementIds.includes(engagementId)) {
    user.currentEngagementIds = [...user.currentEngagementIds, engagementId];
    await user.save();
  }
  return user;
};

const removeCurrentEngagement = async (userId, engagementId) => {
  const user = await getUser(userId);
  if (user.currentEngagementIds.includes(engagementId)) {
    user.currentEngagementIds = user.currentEngagementIds.filter(id => id !== engagementId);
    await user.save();
  }
  return user;
};

const deleteUser = async userId => {
  logger.info('delete user from database with id: ' + userId);
  const deletedRows = db.users.destroy({
    where: {
      userId,
    },
  });
  return deletedRows;
};

const deleteProjectFromUsers = async (userIds, id) => {
  const users = await userIds.map(async uid => {
    const userData = await db.users.findOne({
      where: {
        userId: uid,
      },
    });
    userData.dataValues.currentEngagementIds = userData.dataValues.currentEngagementIds.filter(
      element => element !== id
    );
    userData.dataValues.pastEngagementIds = userData.dataValues.pastEngagementIds
      ? userData.dataValues.pastEngagementIds.filter(element => element !== id)
      : undefined;
    return userData.dataValues;
  });
  const updatedUsers = await Promise.all(users);
  updatedUsers.map(async user => {
    const userData = await db.users.update(
      {
        currentEngagementIds: user.currentEngagementIds,
        pastEngagementIds: user.pastEngagementIds,
      },
      {
        where: {
          userId: user.userId,
        },
      }
    );
    return userData;
  });
  await Promise.all(updatedUsers);
};

const updateCaseStudyInUser = async (caseStudyId, body) => {
  const caseStudy = await db.case_studies.findOne({ where: { case_study_id: caseStudyId } });
  if (!caseStudy) return;
  const oldCollaborators = caseStudy.collaboratorsIds;
  const newCollaborators = body.collaboratorsIds;
  for (let i = 0; i < oldCollaborators.length; i++) {
    let collaborator = await db.users.findOne({ where: { userId: oldCollaborators[i] } });
    if (!collaborator) continue;
    let caseStudies = collaborator.caseStudyIds;
    caseStudies = caseStudies.filter(case_study_id => case_study_id !== caseStudyId);
    collaborator.caseStudyIds = caseStudies;
    await collaborator.save();
  }

  for (let i = 0; i < newCollaborators.length; i++) {
    let collaborator = await db.users.findOne({ where: { userId: newCollaborators[i] } });
    if (!collaborator) continue;
    collaborator.caseStudyIds = [...collaborator.caseStudyIds, caseStudyId];
    await collaborator.save();
    collaborator = await db.users.findOne({ where: { userId: newCollaborators[i] } });
  }
};

const removeCaseStudyFromUser = async caseStudyId => {
  const caseStudy = await db.case_studies.findOne({ where: { case_study_id: caseStudyId } });
  if (!caseStudy) return;
  const collaborators = caseStudy.collaboratorsIds;
  for (let i = 0; i < collaborators.length; i++) {
    let collaborator = await db.users.findOne({ where: { userId: collaborators[i] } });
    if (!collaborator) continue;
    let caseStudies = collaborator.caseStudyIds;
    //use filter to remove the case study id from the array
    caseStudies = caseStudies.filter(id => id !== caseStudyId);
    collaborator.caseStudyIds = caseStudies;
    await collaborator.save();
  }
};

const getUsersCount = async () => {
  const count = await db.users.count();
  return count;
};

const getUserRole = async email => {
  const user = await db.users.findOne({ where: { email } });
  if (!user) {
    return null;
  }
  const userRoles = await db.m_user_role.findAll({
    where: {
      userId: user.userId,
    },
  });
  const roles = userRoles.map(userRole => userRole.roleId);
  return { userId: user.userId, roles };
};
const startAndEndDates = {
  Jan: {
    startDate: '01-01',
    endDate: '01-31',
  },
  Feb: {
    startDate: '02-01',
    endDate: '02-28',
  },
  Mar: {
    startDate: '03-01',
    endDate: '03-31',
  },
  Apr: {
    startDate: '04-01',
    endDate: '04-30',
  },
  May: {
    startDate: '05-01',
    endDate: '05-31',
  },
  Jun: {
    startDate: '06-01',
    endDate: '06-30',
  },
  Jul: {
    startDate: '07-01',
    endDate: '07-31',
  },
  Aug: {
    startDate: '08-01',
    endDate: '08-31',
  },
  Sep: {
    startDate: '09-01',
    endDate: '09-30',
  },
  Oct: {
    startDate: '10-01',
    endDate: '10-31',
  },
  Nov: {
    startDate: '11-01',
    endDate: '11-30',
  },
  Dec: {
    startDate: '12-01',
    endDate: '12-31',
  },
};
const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const getUserMetrics = async () => {
  const totalUsers = await db.users.count();
  // get currentMonth
  const currentMonth = new Date().toLocaleString('en-us', { month: 'short' });
  const metrics = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const currentMonthIndex = allMonths.indexOf(currentMonth);
  const thisYearMonthsTillNow = allMonths.slice(0, currentMonthIndex + 1);
  const thisYear = new Date().getFullYear();
  const lastYear = thisYear - 1;
  const lastYearMonths = allMonths.slice(currentMonthIndex + 1);

  // for each month in thisYearMonthsTillNow, get the count of users whose assignment_start_date and assingment_end_date is in that month's start and end date
  for (let i = 0; i < thisYearMonthsTillNow.length; i++) {
    const startDate = `${thisYear}-${startAndEndDates[thisYearMonthsTillNow[i]].startDate}T10:36:09.638Z`;
    const endDate = `${thisYear}-${startAndEndDates[thisYearMonthsTillNow[i]].endDate}T10:36:09.638Z`;
    console.log(startDate, 'startDate');
    console.log(endDate, 'endDate');
    const count = await db.staffing_details.count({
      where: {
        assignment_start_date: {
          [db.Sequelize.Op.lte]: startDate,
        },
        assignment_end_date: {
          [db.Sequelize.Op.gte]: endDate,
        },
      },
    });
    // convert count into percentage of totalUsers
    metrics[i] = Math.round((count / totalUsers) * 100);
  }
  // for each month in lastYearMonths, get the count of users whose assignment_start_date and assignment_end_date is in that month's start and end date for last year
  for (let i = 0; i < lastYearMonths.length; i++) {
    const startDate = `${lastYear}-${startAndEndDates[lastYearMonths[i]].startDate}T10:36:09.638Z`;
    const endDate = `${lastYear}-${startAndEndDates[lastYearMonths[i]].endDate}T10:36:09.638Z`;
    const count = await db.staffing_details.count({
      where: {
        assignment_start_date: {
          [db.Sequelize.Op.lte]: startDate,
        },
        assignment_end_date: {
          [db.Sequelize.Op.gte]: endDate,
        },
      },
    });
    metrics[i + thisYearMonthsTillNow.length] = Math.round((count / totalUsers) * 100);
  }
  return metrics;
};
module.exports = {
  getUser,
  listUsers,
  updateUser,
  createUser,
  deleteUser,
  addCurrentEngagement,
  removeCurrentEngagement,
  deleteProjectFromUsers,
  updateCaseStudyInUser,
  removeCaseStudyFromUser,
  getUsersByName,
  getUserByFmno,
  getUsersCount,
  getUserRole,
  getUserMetrics,
};
