const { marvelAPI } = require('../lib/http')
const redis = require('../lib/redis')

const index = async (req, res, next) => {
  try {
    const cachedKey = 'characters'
    const cachedResponse = await redis.get(cachedKey)
    if (cachedResponse) {
      res.status(200).json(JSON.parse(cachedResponse))
    } else {
      const resp = await marvelAPI.get('/characters', {
        params: { limit: 100 }
      })
      const characters = resp.data.data.results
      const characterIds = characters.map(char => char.id)
      const response = { ids: characterIds }
      redis.set(cachedKey, JSON.stringify(response), 'EX', 3600)
      res.status(200).json(response)
    }

  } catch (error) {
    next(error)
  }
}

const show = async (req, res, next) => {
  try {
    const cachedKey = `characters:${req.params.characterId}`
    const cachedResponse = await redis.get(cachedKey)
    if (cachedResponse) {
      res.status(200).json(JSON.parse(cachedResponse))
    } else {
      const resp = await marvelAPI.get(`/characters/${req.params.characterId}`)
      const character = resp.data.data.results[0]
      const { id, name, description } = character
      const response = { Id: id, Name: name, Description: description }
      redis.set(cachedKey, JSON.stringify(response), 'EX', 3600)
      res.status(200).json(response)
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {
  index,
  show
}