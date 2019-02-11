const { Strategy: JwtStrategy } = require('passport-jwt')
const { ExtractJwt}  = require('passport-jwt')
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secretOrKey,
}

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user)
          }
          return done(null, false)
        })
      .catch(err => console.log(err))
    })
  )
}
