const express = require('express')
const Router = express.Router()
const db = require("../../lib/database")

module.exports = Router

Router.get('/', (req, res) => {
  db.getAllQuestions()
    .then((data) => {
      res.status(200).json({data:data})
    })
    .catch((error) => res.status(500))
})

Router.post('/', (req, res) => {
  const content = req.body.content
  const title = req.body.title
  const created = req.body.created
  db.addQuestion(content, title, created)
    .then((data) => {
      res.status(200)
    })
    .catch((error) => res.status(500))
})

Router.get('/:id/answers', (req, res) => {
  const id = req.params.id
  db.getAnswersById(id)
    .then((data) => {
      console.log(data)
      res.status(200).json({data:data})
    })
    .catch((error) => res.status(500))
})

Router.post('/:id/answers', (req, res) => {
  const content = req.body.content
  const created = req.body.created
  const id = req.params.id
  db.addAnswer(content, created, id)
    .then((data) => {
      res.status(200)
    })
    .catch((error) => res.status(500))
})
