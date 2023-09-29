const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const crypto = require('crypto');
const User = require('../models/user');

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
  },
  async function(accessToken, refreshToken, profile, done) {
	const user = await User.findOne({ email: profile.emails[0].value});

    if (user) {
      return done(null, user);
    } else {
		const name = profile.displayName.split(' ');
        User.create({
            firstName: name[0],
			      lastName: name[1],
            email: profile.emails[0].value,
            password: crypto.randomBytes(20).toString('hex')
        });

        return done(null, user, { message: 'Account Created!' });
    }
  }
));

module.exports = passport;
