exports.up = function(knex, Promise) {
  return knex.schema.table('questions', (table) => {
    table.dropColumn('created')
    table.timestamps(false, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('questions', (table) => {
    table.string('created')
    table.dropColumn('created_at')
    table.dropColumn('updated_at')
  })
};
