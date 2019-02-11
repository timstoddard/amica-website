const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../../../config/keys');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');

const genericAuthError = { email: 'Invalid email or password' }
const serverError = (err) => ({ error: `Server error: ${err.message}` })

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const {
    name,
    email,
    password
  } = req.body

  User.findOne({ email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    } else {
      const newUser = new User({
        name,
        email,
        password
      });

      // Hash password before saving in database
      const PASSWORD_SALT_ROUNDS = 10;
      bcrypt.hash(password, PASSWORD_SALT_ROUNDS, (err, passwordHash) => {
        if (err) {
          return res.status(500).json(serverError(err));
        }
        newUser.password = passwordHash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      })
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const {
    email,
    password
  } = req.body;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json(genericAuthError);
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds TODO make this less
          },
          (err, token) => {
            if (err) {
              return res.status(500).json(serverError(err));
            }
            res.json({
              success: true,
              token: 'Bearer ' + token // TODO is 'bearer' needed?
            });
          }
        );
      } 
      else {
        return res.status(400).json(genericAuthError);
      }
    });
  });
});

module.exports = router;
