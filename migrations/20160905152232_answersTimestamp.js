exports.up = function(knex, Promise) {
  return knex.schema.table('answers', (table) => {
    table.dropColumn('created')
    table.timestamps(false, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('answers', (table) => {
    table.string('created')
    table.dropColumn('created_at')
    table.dropColumn('updated_at')
  })
};
