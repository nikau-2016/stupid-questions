const config = require('../knexfile')[process.env.DB || 'development']
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
    .catch((error) => console.log(error))
}

function getQuestionById (id) {
  return knex('questions')
    .where('id', id)
    .catch((error) => console.log(error))
}

function getAnswersById (id) {
  return knex('answers')
    .where('question_id', id)
    .catch((error) => console.log(error))
}

function addQuestion (content, title) {
  return knex('questions')
    .insert({content, title})
    .catch((error) => console.log(error))
}

function addAnswer (content, question_id)  {
  return knex('answers')
    .insert({content, question_id})
    .catch((error) => console.log(error))
}
