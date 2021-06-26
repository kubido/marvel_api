const router = require('express').Router()
const characterController = require('../controllers/charactersController')

router.get('/', characterController.index)
router.get('/:characterId', characterController.show)

module.exports = router