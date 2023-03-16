const db = require('../models');

const getUserCurrentEngagements = async userId => {
  const userCurrentEngagements = await db.staffing_details.findAll({
    where: {
      userId,
      assignmentStartDate: {
        [db.Sequelize.Op.lte]: new Date(),
      },
      assignmentEndDate: {
        [db.Sequelize.Op.gte]: new Date(),
      },
    },
  });
  return userCurrentEngagements;
};

const getUserPastEngagements = async userId => {
  const userPastEngagements = await db.staffing_details.findAll({
    where: {
      userId,
      assignmentEndDate: {
        [db.Sequelize.Op.lt]: new Date(),
      },
    },
  });
  return userPastEngagements;
};

const createStaffingEntry = async entryDetails => {
  const newEntry = await db.staffing_details.create(entryDetails);
  return newEntry;
};
const staffingDetailsService = { createStaffingEntry, getUserCurrentEngagements, getUserPastEngagements };
module.exports = staffingDetailsService;
