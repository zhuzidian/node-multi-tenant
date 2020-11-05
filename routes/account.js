const db = require('../db')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const tenant = req.query.tenant

  // 2回のqueryで異なるconnectionが使用されることはある　⇒NG
  // await db.query(`set schema '${tenant}'`)

  // const result = await db.query(`select * from account`)
  // res.send(result)

  // taskで括ると同じconnectionが使用される　⇒OK
  db.task(async t => {
    await t.query(`set schema '${tenant}'`)

    const result = await t.query(`select * from account`)
    res.send(result)
  })
})

module.exports = router