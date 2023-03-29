const db = require('../models');
const reader = require('xlsx');
const projectService = require('./project.service');
const { HttpError } = require('../utils/httpError');
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
  const newEntry = await db.staffing_details.bulkCreate(entryDetails);
  return newEntry;
};
const parse_xlsx_sheets = fname => {
  const file = reader.readFile(fname);
  const sheets = file.SheetNames;

  var temp = reader.utils.sheet_to_json(file.Sheets[sheets[0]]);
  return Promise.all(
    temp.map(async res => {
      const user = JSON.parse(
        JSON.stringify(
          await db.users.findOne({
            attributes: ['userId'],
            where: {
              fmno: res['Fmno'].toString(),
              email: res['Mckinsey E-mail Address'],
            },
          })
        )
      );
      const engagement = JSON.parse(
        JSON.stringify(
          await db.engagements.findOne({
            attributes: ['engagementId'],
            where: {
              chargeCode: res['Charge Code'],
            },
          })
        )
      );
      let newEngagementId = undefined;
      if (!engagement) {
        const newEngagement = await projectService.createProject({
          name: res['Study'],
          chargeCode: res['Charge Code'],
        });
        newEngagementId = newEngagement.engagementId;
      }
      if (!user) {
        throw new HttpError('User not found', 400);
      }
      return {
        fmno: res.Fmno,
        name: res['Full Name'],
        userId: user ? user.userId : undefined,
        engagementId: engagement ? engagement.engagementId : newEngagementId,
        assignmentType: res['Assignment Type'],
        study: res['Study'],
        utilizationPercentage: parseInt(res['Utilization %'] * 100),
        staffingStatus: res['Staffing Status'],
        assignmentStartDate: ExcelDateToJSDate(res['Assignment Start Date']),
        assignmentEndDate: ExcelDateToJSDate(res['Assignment End Date']),
        APName: res['AP Name'],
        EDName: res['ED Name'],
        EMName: res['EM Name'],
        staffingManager: res['Staffing Manager'],
        guild: res['Guild'],
        country: res['Country'],
        departmentCode: res['Department Code'],
        role: res['Role'],
        practice: res['Practice'],
        departmentName: res['Department Name'],
        integrated: res['Integrated?'],
        email: res['Mckinsey E-mail Address'],
        path: res['Path'],
        practiceFunction: res['Practice Function'],
        practiceIndustry: res['Practice Industry'],
        region: res['Region'],
        roleCategory: res['Role Category'],
        roleSubCategory: res['Role SubCategory'],
        staffingOffice: res['Staffing Office'],
      };
    })
  );
};

function ExcelDateToJSDate(serial) {
  console.log(serial);
  if (typeof serial === 'string') {
    const date_data = serial.split('/');
    return new Date(parseInt(date_data[2]), parseInt(date_data[0] - 1), parseInt(date_data[1]), 0, 0, 0).toISOString();
  } else {
    let utc_days = Math.floor(serial - 25569);
    let utc_value = utc_days * 86400;
    let date_info = new Date(utc_value * 1000);
    let fractional_day = serial - Math.floor(serial) + 0.0000001;
    let total_seconds = Math.floor(86400 * fractional_day);
    let seconds = total_seconds % 60;
    total_seconds -= seconds;
    let hours = Math.floor(total_seconds / (60 * 60));
    let minutes = Math.floor(total_seconds / 60) % 60;
    return new Date(
      date_info.getFullYear(),
      date_info.getDate() - 1,
      date_info.getMonth() + 1,
      hours,
      minutes,
      seconds
    );
  }
}

const getUsersInEngagement = async engagementId => {
  const usersInEngagement = await db.staffing_details.findAll({
    where: {
      engagementId,
      assignmentStartDate: {
        [db.Sequelize.Op.lte]: new Date(),
      },
      assignmentEndDate: {
        [db.Sequelize.Op.gte]: new Date(),
      },
    },
  });
  return usersInEngagement;
};

const getPastUsersInEngagement = async engagementId => {
  const pastUsersInEngagement = await db.staffing_details.findAll({
    where: {
      engagementId,
      assignmentEndDate: {
        [db.Sequelize.Op.lt]: new Date(),
      },
    },
  });
  return pastUsersInEngagement;
};

const getUsersInvolvedInEngagement = async engagementId => {
  const usersInvolvedInEngagement = await db.staffing_details.findAll({
    where: {
      engagementId,
    },
  });
  return usersInvolvedInEngagement;
};

const getStaffingEntry = async (userId, engagementId, assignmentStartDate, assignmentEndDate) => {
  const staffingEntry = await db.staffing_details.findOne({
    where: {
      userId,
      engagementId,
      assignmentStartDate: {
        [db.Sequelize.Op.lte]: new Date(assignmentStartDate),
      },
      assignmentEndDate: {
        [db.Sequelize.Op.gte]: new Date(assignmentEndDate),
      },
    },
  });
  return staffingEntry;
};

const getStaffingEntryOverDateBound = async (userId, engagementId, assignmentStartDate, assignmentEndDate) => {
  const staffingEntry = await db.staffing_details.findOne({
    where: {
      userId,
      engagementId,
      [db.Sequelize.Op.or]: [
        {
          assignmentStartDate: {
            [db.Sequelize.Op.gte]: new Date(assignmentStartDate),
            [db.Sequelize.Op.lt]: new Date(assignmentEndDate),
          },
        },
        {
          assignmentEndDate: {
            [db.Sequelize.Op.lte]: new Date(assignmentEndDate),
            [db.Sequelize.Op.gt]: new Date(assignmentStartDate),
          },
        },
      ],
    },
  });
  return staffingEntry;
};

const updateStaffingEntry = async (entryId, entryDetails) => {
  const updatedEntry = await db.staffing_details.update(
    {
      ...entryDetails,
    },
    {
      where: {
        entryId,
      },
    }
  );
  return updatedEntry;
};

const getCurrentStaffingDetails = async () => {
  const currentStaffingDetails = await db.staffing_details.findAll({
    where: {
      assignmentStartDate: {
        [db.Sequelize.Op.lte]: new Date(),
      },
      assignmentEndDate: {
        [db.Sequelize.Op.gte]: new Date(),
      },
    },
  });
  return currentStaffingDetails;
};

const staffingDetailsService = {
  createStaffingEntry,
  getUserCurrentEngagements,
  getUserPastEngagements,
  parse_xlsx_sheets,
  getUsersInEngagement,
  getUsersInvolvedInEngagement,
  getStaffingEntry,
  getPastUsersInEngagement,
  getStaffingEntryOverDateBound,
  updateStaffingEntry,
  getCurrentStaffingDetails,
};
module.exports = staffingDetailsService;
