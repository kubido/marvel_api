const axios = require('axios')
const router = require('express').Router()
const characterController = require('../controllers/charactersController')
const cacheValidation = require('../middlewares/cache')

const { marvelAPI } = require('../lib/http')

router.get('/', cacheValidation, characterController.index)
router.get('/:characterId', cacheValidation, characterController.show)

module.exports = router