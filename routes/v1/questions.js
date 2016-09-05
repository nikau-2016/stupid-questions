const express = require('express')
const Router = express.Router()
const db = require("../../lib/database")

module.exports = Router

Router.get('/', (req, res) => {
  db.getAllQuestions()
    .then((data) => {
      res.json({data:data})
    })
    .catch((error) => res.sendStatus(500))
})

Router.post('/', (req, res) => {
  const content = req.body.content
  const title = req.body.title
  db.addQuestion(content, title)
    .then((data) => {
      res.sendStatus(201)
    })
    .catch((error) => res.sendStatus(500))
})

Router.get('/:id/answers', (req, res) => {
  const id = req.params.id
  db.getAnswersById(id)
    .then((data) => {
      console.log(data)
      res.json({data:data})
    })
    .catch((error) => res.sendStatus(500))
})

Router.post('/:id/answers', (req, res) => {
  const content = req.body.content
  const created = req.body.created
  const id = req.params.id
  db.addAnswer(content, created, id)
    .then((data) => {
      res.sendStatus(201)
    })
    .catch((error) => res.sendStatus(500))
})
