
exports.up = (knex, Promise) => {
  return knex.schema.createTable('answers', (table) => {
      table.increments('id').primary()
      table.string('content')
      table.timestamp('created').notNullable().defaultTo(knex.raw('now()'))
      table.integer('question_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('answers')
}
