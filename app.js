require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()


const appRouter = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use('/', appRouter)

app.use(errorHandler)

module.exports = app