const mongoose = require('mongoose')

// Create Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('users', UserSchema)
module.exports = User
