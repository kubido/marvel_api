const router = require('express').Router()
const characterRouter = require('./character')
const swaggerRouter = require('./swagger')

router.use('/characters', characterRouter)
router.use('/docs', swaggerRouter)

module.exports = router