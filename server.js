/* eslint-disable no-console */

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const compression = require('compression')
const cors = require('cors')
const path = require('path')

const users = require('./src/server/routes/api/users')

const app = express()

// use compression
app.use(compression())

// serve static assets normally
app.use(express.static(__dirname))

// pass every other route with index.html, and it will be handled with react-router
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// enable CORS
/*
const whitelist = [
  'http://localhost:8080', // dev frontend
  'http://localhost:5000', // dev backend + local prod server
  'http://localhost:2375', // digitalocean docker port
  'https://amica-safe.com' // live site
]
const options = {
  origin: (origin, callback) => {
    // if same origin, `origin` will be undefined
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(options))
*/
// TODO use cors whitelist once hosting is configured
app.use(cors())

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

// define which port to bind to
const port = 5000
app.listen(port, () => console.log(`Server up and running on port ${port}!`))
