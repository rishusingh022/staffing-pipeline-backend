const redis = require('redis');
const config = {
  socket: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
  },
};
const insertIntoRedis = async token => {
  const client = redis.createClient(config);
  await client.connect();
  await client.set(token, 1);
};
const verifyTokenIntoRedis = async token => {
  const client = redis.createClient(config);
  await client.connect();
  return client.get(token);
};
module.exports = { insertIntoRedis, verifyTokenIntoRedis };
