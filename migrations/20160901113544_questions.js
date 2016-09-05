
exports.up = (knex, Promise) => {
  return knex.schema.createTable('questions', (table) => {
    table.increments('id').primary()
    table.string('content')
    table.string('title')
    table.timestamps(false, true)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('questions')
}
