const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

module.exports = {
  getQuestionById,
  getAnswersById,
  addQuestion,
  addAnswer
}

function getQuestionById () {
  // knex
}

function getAnswersById () {
  // knex
}

function addQuestion () {
  // knex
}

function addAnswer ()  {
  // knex
}
