
// require user model
const { Users } = require('../models');

const userServices = {
  'getAllUsers': async () => {
    const allUsers = await Users.findAll();
    return allUsers;
  },
  'createUser': async (userDetails) => {
    const newUser = await Users.create(userDetails);
    return newUser;
  }
};

module.exports = userServices;