const pgp = require('pg-promise')()
const connection = {
  host: 'localhost',
  port: 5432,
  database: 'conrepo_multi_tenant',
  user: 'postgres',
  password: 'postgres',
}
const db = pgp(connection)

module.exports = db