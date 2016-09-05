
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('questions').insert({id: 101, content: 'Stupid question content 1', title: 'Stupid question 1', created: '1' }),
        knex('questions').insert({id: 201, content: 'Stupid question content 2', title: 'Stupid question 2', created: '2' }),
        knex('questions').insert({id: 301, content: 'Stupid question content 3', title: 'Stupid question 3', created: '3' }),
        knex('questions').insert({id: 401, content: 'Stupid question content 4', title: 'Stupid question 4', created: '4' }),
        knex('questions').insert({id: 501, content: 'Stupid question content 5', title: 'Stupid question 5', created: '5' }),
        knex('questions').insert({id: 601, content: 'Stupid question content 6', title: 'Stupid question 6', created: '6' })
      ])
    .then(() => {
      return knex('answers').del()
    })
    .then(() => {
      return Promise.all([
        knex('answers').insert({id: 103, content: 'Stupid answer 1 content 1', created: '1', question_id: 101}),
        knex('answers').insert({id: 203, content: 'Stupid answer 1 content 2', created: '2', question_id: 101}),
        knex('answers').insert({id: 303, content: 'Stupid answer 2 content 1', created: '3', question_id: 201}),
        knex('answers').insert({id: 403, content: 'Stupid answer 1 content 3', created: '4', question_id: 101}),
        knex('answers').insert({id: 503, content: 'Stupid answer 2 content 2', created: '5', question_id: 201}),
        knex('answers').insert({id: 603, content: 'Stupid answer 3 content 1', created: '6', question_id: 301}),
        knex('answers').insert({id: 703, content: 'Stupid answer 4 content 1', created: '7', question_id: 401}),
        knex('answers').insert({id: 803, content: 'Stupid answer 4 content 2', created: '8', question_id: 401}),
        knex('answers').insert({id: 903, content: 'Stupid answer 3 content 2', created: '9', question_id: 301}),
        knex('answers').insert({id: 1003, content: 'Stupid answer 5 content 1', created: '10', question_id: 501}),
        knex('answers').insert({id: 1103, content: 'Stupid answer 6 content 1', created: '11', question_id: 601}),
        knex('answers').insert({id: 1203, content: 'Stupid answer 5 content 2', created: '12', question_id: 501}),
        knex('answers').insert({id: 1303, content: 'Stupid answer 6 content 2', created: '13', question_id: 601}),
        knex('answers').insert({id: 1403, content: 'Stupid answer 5 content 3', created: '14', question_id: 501})
      ])
    })
  })
}
