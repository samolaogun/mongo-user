const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const index = require('./routes/index')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost/users')

app.engine('handlebars', exphbs({ defaultLayout: 'index' }))
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(bodyParser.json())
app.use('/', index)
app.listen(3000)