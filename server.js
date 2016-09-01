const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 3000

const app = express()

const index = require('./routes/index')

app.use('index', index)
app.use(express.static('public'))
app.use(bodyParser.json())

app.use('/', index)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))