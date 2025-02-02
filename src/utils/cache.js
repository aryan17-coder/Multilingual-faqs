const redis = require('redis');
const client = redis.createClient({ url: process.env.REDIS_URL });

client.connect();

const getCachedData = async (key) => {
  const data = await client.get(key);
  return data ? JSON.parse(data) : null;
};

const setCachedData = async (key, value) => {
  if (value === null) {
    await client.del(key);
  } else {
    await client.set(key, JSON.stringify(value), { EX: 3600 }); // Cache for 1 hour
  }
};

module.exports = {
  getCachedData,
  setCachedData,
};