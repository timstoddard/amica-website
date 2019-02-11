/* eslint-disable no-console */

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const users = require('./src/server/routes/api/users')

const app = express()

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))

// enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // TODO should we just whitelist our own client? for security
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(bodyParser.json())

// MongoDB Config
const config_db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose.connect(config_db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize())

// Passport config
require('./config/passport')(passport)

// Routes
app.use('/api/users', users)

// process.env.port is Heroku's port if you choose to deploy
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server up and running on port ${port} !`))
