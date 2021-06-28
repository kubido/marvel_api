const Redis = require("ioredis");
const redisUri = process.env.REDIS_URI || "127.0.0.1:6379"
const redis = new Redis(redisUri);

let getCacheKey = (name, options) => {
  let keys = [name]
  Object.keys(options).forEach(key => {
    let keyOptions = `:${key}:${options[key]}`
    keys.push(keyOptions)
  })
  return keys.join("")
}
module.exports = {
  redis,
  getCacheKey
}