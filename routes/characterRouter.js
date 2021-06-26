const router = require('express').Router()
const characterController = require('../controllers/charactersController')

router.get('/', characterController.index)
router.get('/:id', characterController.show)

module.exports = router