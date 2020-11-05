const express = require('express')
const app = express()

const db = require('./db')

app.use(async (req, res, next) => {
  const tenant = req.query.tenant || 'tenant1'
  console.log('tenant', tenant)

  await db.query(`set schema '${tenant}'`)

  next()
})

// routes
app.get('/', require('./routes/account'))

// start server
app.listen(3000)