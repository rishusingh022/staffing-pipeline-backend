// require user model

const CustomErrors = require('../utils/httpError');
const db = require('../models');
const logger = require('../logger');
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

const listUsers = async () => {
  try {
    logger.info('get all users from the database');
    const allUsers = await db.users.findAll();
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

const getUserRole = async email => {
  const user = await db.users.findOne({ where: { email } });
  if (!user) {
    return null;
  }
  return { role: user.role, userId: user.userId };
};
const getUserMetrics = async () => {
  const countOfUsers = await db.users.count();
  const currentYear = new Date().getFullYear();
  const peopleStaffed = [];
  for (let i = 1; i <= 12; i++) {
    const currentMonthStartDate = new Date(currentYear, i - 1, 1);
    const currentMonthEndDate = new Date(currentYear, i, 0);
    let peopleStaffedInCurrentMonth = await db.staffing_details.count({
      where: {
        assignment_start_date: {
          [db.Sequelize.Op.lte]: currentMonthStartDate,
        },
        assignment_end_date: {
          [db.Sequelize.Op.gte]: currentMonthEndDate,
        },
      },
    });
    peopleStaffedInCurrentMonth = Math.round((peopleStaffedInCurrentMonth / countOfUsers) * 100);
    peopleStaffed.push(peopleStaffedInCurrentMonth);
  }
  return peopleStaffed;
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
  getUserRole,
  getUserMetrics,
};
