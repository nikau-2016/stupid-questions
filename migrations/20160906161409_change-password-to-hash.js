exports.up = function (knex, Promise) {
  return knex.schema.table('users', table => {
    table.renameColumn('password', 'hash')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('users', table => {
    table.renameColumn('hash', 'password')
  })
}
