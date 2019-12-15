const express = require('express')
const { join } = require('path')

const app = express()
const db = require('./config')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

require('./routes')(app)

db.once('open', _ => {
  app.listen(3000)
  console.log('Listening on port 3000.')
})