console.log('Express Tutorial')
const express = require('express')
const logger = require('./middlewares/logger')
const authorize = require('./middlewares/authorize')
const morgan = require('morgan')

const app = express()

// req => middleware => res

// app.use([logger, authorize])
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1>')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
