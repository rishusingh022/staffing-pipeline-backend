const LoginError = require('./loginError.js');
const jwt = require('jsonwebtoken');
const db = require('../models');
const redisUtil = require('./redisUtil');
const verifyToken = async token => {
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  if (decodedToken) {
    const isPresent = parseInt(await redisUtil.verifyTokenIntoRedis(token));
    if (isPresent) {
      const user = await db.users.findOne({ where: { email: decodedToken.email } });
      return { data: user, success: true };
    }
  } else {
    throw new LoginError('Unauthorized Token', 401);
  }
};
module.exports = { verifyToken };
