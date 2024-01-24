const express = require('express')
const app = express()
const movieRouter = require('./routes/moviesRouter')
const performerRouter = require('./routes/performersRouter')

app.use(express.json())
app.use('/movies', movieRouter)
app.use('/performers', performerRouter)

module.exports = app