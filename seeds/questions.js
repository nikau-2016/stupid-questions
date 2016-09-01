
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('questions').insert({id: 1, content: 'Stupid question content 1', title: 'Stupid question 1', created: '1' }),
        knex('questions').insert({id: 2, content: 'Stupid question content 2', title: 'Stupid question 2', created: '2' }),
        knex('questions').insert({id: 3, content: 'Stupid question content 3', title: 'Stupid question 3', created: '3' }),
        knex('questions').insert({id: 4, content: 'Stupid question content 4', title: 'Stupid question 4', created: '4' }),
        knex('questions').insert({id: 5, content: 'Stupid question content 5', title: 'Stupid question 5', created: '5' }),
        knex('questions').insert({id: 6, content: 'Stupid question content 6', title: 'Stupid question 6', created: '6' })
      ])
    })
}
