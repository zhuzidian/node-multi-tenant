const router = require('express').Router()

router.get('/', async (req, res) => {
  const result = await db.query('select * from account')
  res.send(result)
})

module.exports = router