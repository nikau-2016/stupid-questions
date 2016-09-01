const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 3000

const app = express()

const questions = require('./routes/v1/questions')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

app.use('/v1/questions', questions)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
