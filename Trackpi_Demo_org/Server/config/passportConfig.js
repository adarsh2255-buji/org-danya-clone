import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import Signup from "../models/usermodel/signup.js";
import dotenv from 'dotenv';
import User from '../models/usermodel/User.js';
import jwt from 'jsonwebtoken';
import { generateToken } from '../controllers/user.controller.js'; // or wherever your function is
dotenv.config();

// Debug: Check if environment variables are loaded
console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? 'SET' : 'NOT SET');
console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET ? 'SET' : 'NOT SET');
     
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => { 
  let user = await User.findOne({ provider: 'google', providerId: profile.id });
  if (!user) {
    user = await User.findOne({ email: profile.emails[0].value });
  }
  if (!user) {
    user = await User.create({
      provider: 'google',
      providerId: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,
      profilePic: profile.photos[0].value,
    });
  }
  return done(null, user);
}));

export const authCallback = (req, res) => {
  // req.user is set by Passport after Google login
  const token = generateToken(req.user); // This function should include email, userId, etc.
  // Send token to frontend (choose one of the following):

  // Option 1: Redirect with token in query string
  res.redirect(`${process.env.CLIENT_URL}/startCourse?token=${token}`);

  // Option 2: Send as JSON (for SPA/AJAX)
  // res.json({ token });

  // Option 3: Set as HTTP-only cookie (for SSR or extra security)
  // res.cookie('token', token, { httpOnly: true, secure: true }).redirect(process.env.CLIENT_URL);
};


export default passport;
