const express = require('express')
const Router = express.Router()
const db = require("../lib/database")

module.exports = Router

Router.get('/v1/questions', (req, res) => {
  db.getAllQuestions()
    .then((data) => {
      res.json({data:data})
    })
    .catch((error) => console.log(error))
})

Router.post('/v1/questions', (req, res) => {
  const content = req.body.content
  const title = req.body.title
  const created = req.body.created
  db.addQuestion(content, title, created)
})

Router.get('/v1/questions/:id/answers', (req, res) => {
  const id = req.params.id
  db.getAnswersById(id)
    .then((data) => {
      res.json({data:data})
    })
    .catch((error) => console.log(error))
})

Router.post('/v1/questions/:id/answers', (req, res) => {
  const content = req.body.content
  const created = req.body.created
  const id = req.params.id
  db.addAnswer(content, created, id)
})
