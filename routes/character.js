const router = require('express').Router()
const characterController = require('../controllers/charactersController')
const cacheValidation = require('../middlewares/cache')

router.get('/', cacheValidation, characterController.index)
router.get('/:characterId', cacheValidation, characterController.show)

module.exports = router