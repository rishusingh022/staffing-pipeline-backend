const db = require('../models');
const reader = require('xlsx');
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
              charge_code: res['Charge Code'],
            },
          })
        )
      );
      return {
        fmno: res.Fmno,
        name: res['Full Name'],
        userId: user ? user.userId : undefined,
        engagementId: engagement ? engagement.engagementId : undefined,
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
  const date_data = serial.split('/');
  // var utc_days = Math.floor(serial - 25569);
  // var utc_value = utc_days * 86400;
  // var date_info = new Date(utc_value * 1000);
  // var fractional_day = serial - Math.floor(serial) + 0.0000001;
  // var total_seconds = Math.floor(86400 * fractional_day);a
  // var seconds = total_seconds % 60;
  // total_seconds -= seconds;
  // var hours = Math.floor(total_seconds / (60 * 60));
  // var minutes = Math.floor(total_seconds / 60) % 60;
  return new Date(parseInt(date_data[2]), parseInt(date_data[0] - 1), parseInt(date_data[1]), 0, 0, 0).toISOString();
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

const getUsersInvolvedInEngagement = async engagementId => {
  const usersInvolvedInEngagement = await db.staffing_details.findAll({
    where: {
      engagementId,
    },
  });
  return usersInvolvedInEngagement;
};

const staffingDetailsService = {
  createStaffingEntry,
  getUserCurrentEngagements,
  getUserPastEngagements,
  parse_xlsx_sheets,
  getUsersInEngagement,
  getUsersInvolvedInEngagement,
};
module.exports = staffingDetailsService;
