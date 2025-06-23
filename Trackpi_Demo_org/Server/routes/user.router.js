import express from 'express';
import passport from '../config/passportConfig.js';
import { verifyToken } from '../config/verifyToken.js';
import { authCallback, addPhoneNumber } from '../controllers/user.controller.js';

const router = express.Router();

// Google login
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { session: false }), authCallback);


// Add phone number
router.post('/add-phone',verifyToken,addPhoneNumber);


export default router;
