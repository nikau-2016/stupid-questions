const express = require('express')
const router = express.Router()
const db = require('../../lib/database')

module.exports = router

router.get('/', (req, res) => {
  db.getAllQuestions()
    .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.sendStatus(500))
})

router.post('/', (req, res) => {
  const content = req.body.content
  const title = req.body.title
  db.addQuestion(content, title)
    .then((data) => {
      res.sendStatus(201)
    })
    .catch(() => res.sendStatus(500))
})

router.get('/:id/answers', (req, res) => {
  const id = req.params.id
  db.getAnswersById(id)
    .then((data) => {
      res.json({data: data})
    })
    .catch(() => res.sendStatus(500))
})

router.post('/:id/answers', (req, res) => {
  const content = req.body.content
  const id = req.params.id
  db.addAnswer(content, id)
    .then((data) => {
      res.sendStatus(201)
    })
    .catch((error) => res.sendStatus(500))
})
