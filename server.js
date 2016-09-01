const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 3000

const app = express()

const index = require('./routes/index')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', index)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
