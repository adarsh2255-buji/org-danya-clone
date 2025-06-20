import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import Signup from "../models/usermodel/signup.js";
import dotenv from 'dotenv';
dotenv.config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
  let user = await Signup.findOne({ providerId: profile.id });
  if (!user) {
    user = await Signup.create({
      provider: 'google',
      providerId: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,
      profilePic: profile.photos[0].value,
    });
  }
  return done(null, user);
}));


export default passport;
