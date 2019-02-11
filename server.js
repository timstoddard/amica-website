/* eslint-disable no-console */

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')

const users = require('./src/server/routes/api/users')

const app = express()

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// enable CORS
var whitelist = ['http://localhost:8080', 'https://amica-safe.com']
var options = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(options))

// MongoDB Config
const config_db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose.connect(config_db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize())

// Passport config
require('./src/server/config/passport')(passport)

// Routes
app.use('/api/users', users)

// process.env.port is Heroku's port if you choose to deploy
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server up and running on port ${port} !`))
