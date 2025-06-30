import express from 'express';
import passport from '../config/passportConfig.js';
import { verifyToken } from '../config/verifyToken.js';
import { authCallback, addPhoneNumber,updateUserCourseProgress,getUserCourseProgress,getVideoAssessment,submitAssessment, userGetCourses, getCourseById } from '../controllers/user.controller.js';

const router = express.Router();

// Google login
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { session: false }), authCallback);


// Add phone number
router.post('/add-phone',verifyToken,addPhoneNumber);

// Update progress (called when video is watched)
router.post('/progress/update', updateUserCourseProgress);

// Get progress for a specific user
router.get('/progress/:userId', getUserCourseProgress);
//Get course details route--------------------------//
router.get('/getCourse', userGetCourses);
//get course by id--------------------------------//
router.get('/courses/:id', getCourseById);


//Assesment----------------------------------------------//
//getting assesment video base
router.get('/assessment/:courseId/:videoId', getVideoAssessment);
//submitting user assessment result 
router.post('/assessment/submit', submitAssessment);

export default router;
