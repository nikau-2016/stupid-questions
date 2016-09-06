const development = require('./knexfile').development
const knex = require('knex')(development)

const crypto = require('./crypto')

module.exports = {
  create: create,
  exists: exists,
  getById: getById,
  getByName: getByName
}

function create (username, password) {
  const hash = crypto.getHash(password)

  return knex('users')
    .insert({
      username: username,
      hash: hash
    })
}

function exists (username) {
  return knex('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getById (id) {
  return knex('users')
    .select('id', 'username')
    .where('id', id)
}

function getByName (username) {
  return knex('users')
    .select()
    .where('username', username)
}
