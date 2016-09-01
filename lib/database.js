const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

module.exports = {
  getAllQuestions,
  getQuestionById,
  getAnswersById,
  addQuestion,
  addAnswer
}

function getAllQuestions () {
  return knex('questions')
    .select()
}

function getQuestionById (id) {
  return knex('questions')
    .where('id', id)
  // knex
}

function getAnswersById (id) {
  return knex('answers')
    .join('questions', 'question_id', '=', 'questions.id')
    .where('question_id', id)

}

function addQuestion (content, title, created) {
  return knex('questions')
    .insert({content, title, created})
  // knex
}

function addAnswer (content, created, question_id)  {
  return knex('answers')
    .insert({content, created, question_id})
  // knex
}
