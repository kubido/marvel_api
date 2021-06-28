const { marvelAPI } = require('../lib/http')
const axios = require('axios')
const {
  redis,
} = require('../lib/redis')

const index = async (req, res, next) => {
  try {
    const resp = await marvelAPI.get('/characters', {
      params: {
        limit: req.query.limit || 100
      }
    })

    const characters = resp.data.data.results
    const response = characters.map(char => char.id)
    redis.set(req.cachedKey, JSON.stringify(response), 'EX', 3600)
    res.status(200).json(response)
  } catch (error) {
    console.log(error);
    next(error)
  }
}

const show = async (req, res, next) => {
  try {
    const resp = await marvelAPI.get(`/characters/${req.params.characterId}`)
    const character = resp.data.data.results[0]
    const { id, name, description } = character
    const response = { Id: id, Name: name, Description: description }
    redis.set(req.cachedKey, JSON.stringify(response), 'EX', 3600)
    res.status(200).json(response)
  } catch (error) {
    if (error.response?.status) {
      let { statusText, data: { code, status } } = error.response
      error = { name: statusText, code: code, message: status }
    }
    next(error)
  }
}

module.exports = {
  index,
  show
}