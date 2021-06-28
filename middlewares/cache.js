const { redis, getCacheKey } = require('../lib/redis')

const cacheValidation = async (req, res, next) => {
  const cachedKey = getCacheKey(req.baseUrl, { ...req.query, ...req.params })
  const cachedResponse = await redis.get(cachedKey)

  if (cachedResponse) {
    res.status(200).json(JSON.parse(cachedResponse))
  } else {
    req.cachedKey = cachedKey
    next()
  }
}

module.exports = cacheValidation