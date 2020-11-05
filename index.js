const express = require('express')
const app = express()

// routes
app.get('/', require('./routes/account'))

// start server
app.listen(3000)