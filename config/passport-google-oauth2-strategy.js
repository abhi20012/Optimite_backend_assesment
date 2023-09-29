const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');


// tell passport to use a new strategy for google login
passport.use(new googleStrategy({
    // Copy and Paste clientID and clientSecret from credentials
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
    },

    async function(accessToken, refreshToken, profile, done){
        // find the user
        const user = await User.findOne({email: profile.emails[0].value});
          
            if(user){
                // if found set this user as req.user
                return done(null, user);
            }else{

                const name = profile.displayName.split(' ');
                User.create({
                    // if not found, create the user and set it as req.user
                    firstName: name[0],
                    lastName: name[1],
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                });

                return done(null, user, {message:"Account Created!"});
            }
    }
));


module.exports = passport;