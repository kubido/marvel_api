const Redis = require("ioredis");
const redisUri = process.env.REDIS_URI || "127.0.0.1:6379"
const redis = new Redis(redisUri);

module.exports = redis