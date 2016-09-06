const express = require('express')

const users = require('../../users')

const router = express.Router()

router.post('/', (req, res) => {
  users.exists(req.body.username)
    .then(exists => {
      if (exists) {
        res.status(409).json({ message: 'Could not create the user - username already exists.' })
      }

      users.create(req.body.username, req.body.password)
        .then(() => res.status(201).json({ message: 'User created.' }))
        .catch(console.error)
    })
})

module.exports = router
