
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('answers').insert({id: 1, content: 'Stupid answer 1 content 1', created: '1', question_id: 1}),
        knex('answers').insert({id: 2, content: 'Stupid answer 1 content 2', created: '2', question_id: 1}),
        knex('answers').insert({id: 3, content: 'Stupid answer 2 content 1', created: '3', question_id: 2}),
        knex('answers').insert({id: 4, content: 'Stupid answer 1 content 3', created: '4', question_id: 1}),
        knex('answers').insert({id: 5, content: 'Stupid answer 2 content 2', created: '5', question_id: 2}),
        knex('answers').insert({id: 6, content: 'Stupid answer 3 content 1', created: '6', question_id: 3}),
        knex('answers').insert({id: 7, content: 'Stupid answer 4 content 1', created: '7', question_id: 4}),
        knex('answers').insert({id: 8, content: 'Stupid answer 4 content 2', created: '8', question_id: 4}),
        knex('answers').insert({id: 9, content: 'Stupid answer 3 content 2', created: '9', question_id: 3}),
        knex('answers').insert({id: 10, content: 'Stupid answer 5 content 1', created: '10', question_id: 5}),
        knex('answers').insert({id: 11, content: 'Stupid answer 6 content 1', created: '11', question_id: 6}),
        knex('answers').insert({id: 12, content: 'Stupid answer 5 content 2', created: '12', question_id: 5}),
        knex('answers').insert({id: 13, content: 'Stupid answer 6 content 2', created: '13', question_id: 6}),
        knex('answers').insert({id: 14, content: 'Stupid answer 5 content 3', created: '14', question_id: 5})
      ])
    })
}
