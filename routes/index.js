const router = require('express').Router()
const characterRouter = require('./characterRouter')

router.use('/characters', characterRouter)

module.exports = router