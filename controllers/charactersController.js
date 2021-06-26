const { marvelAPI } = require('../lib/http')

const index = async (req, res, next) => {
  try {
    const resp = await marvelAPI.get('/characters')
    const characters = resp.data.data.results
    const characterIds = characters.map(char => char.id)
    res.json({ ids: characterIds })
  } catch (error) {
    next(error)
  }
}

const show = async (req, res) => {
  try {
    const resp = await marvelAPI.get(`/characters/${req.params.characterId}`)
    const character = resp.data.data.results[0]
    const { id, name, description } = character
    res.json({ Id: id, Name: name, Description: description })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  index,
  show
}