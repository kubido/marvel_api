require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

const appRouter = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use('/', appRouter)
app.use(errorHandler)

module.exports = app