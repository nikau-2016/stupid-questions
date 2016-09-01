
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('answers').insert({id: 1, content: 'Stupid answer content 1', created: '1', question_id: 1}),
        knex('answers').insert({id: 2, content: 'Stupid answer content 2', created: '2', question_id: 2}),
        knex('answers').insert({id: 3, content: 'Stupid answer content 3', created: '3', question_id: 3}),
        knex('answers').insert({id: 4, content: 'Stupid answer content 4', created: '4', question_id: 4}),
        knex('answers').insert({id: 5, content: 'Stupid answer content 5', created: '5', question_id: 5}),
        knex('answers').insert({id: 6, content: 'Stupid answer content 6', created: '6', question_id: 6})
      ])
    })
}
