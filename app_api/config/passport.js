const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')

const User = require('../models/user')
const Users = mongoose.model('users')

passport.use(
    new LocalStrategy(
        { usernameField: 'email' },
        async (username, password, done) => {
            const q = await Users.findOne({ email: username }).exec()
            if (!q) {
                return done(null, false, { message: 'incorrect username' })
            }
            if (!q.validPassword(password)) {
                return done(null, false, { message: 'incorrect password' })
            }
            return done(null, q)
        }
    )
)