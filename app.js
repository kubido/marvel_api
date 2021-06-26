const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const appRouter = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use('/', appRouter)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log("Server started at port", PORT);
})