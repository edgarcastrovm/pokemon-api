const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('./config/config')

module.exports = (passport) => {
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
        secretOrKey: config.getSecretKey()
    }
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        //console.log(jwt_payload)
        return done(null, jwt_payload)
    })
    )
}