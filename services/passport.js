require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("User");

// CREATING A UNIQUE IDENTIFIER
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// FINDIND THAT ONE USER WITH THIS ID
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// telling passport to handle google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.googleClientID,
      clientSecret: process.env.googleClientSecret,
      callbackURL: "/api/auth/google/callback",
      scope: ["profile", "email"],
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ clientID: profile.id });
      if (user) {
        done(null, user);
      } else {
        const newUser = await new User({
          clientID: profile.id,
          profilePicture: profile.photos ? profile.photos[0].value : null,
          name: profile.displayName,
          email: profile.emails ? profile.emails[0].value : null,
          gender: profile.gender,
        }).save();
        done(null, newUser);
      }
    }
  )
);
